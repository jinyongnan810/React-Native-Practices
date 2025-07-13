import { renderHook, waitFor } from "@testing-library/react-native";
import * as Battery from "expo-battery";
import { act } from "react";
import useBattery from "../use-battery";
jest.mock("expo-battery", () => ({
  getBatteryLevelAsync: jest.fn(() => Promise.resolve(0.5)),
  getPowerStateAsync: jest.fn(() =>
    Promise.resolve({
      batteryLevel: 0.5,
      batteryState: "charging",
      lowPowerMode: false,
    })
  ),
  addBatteryLevelListener: jest.fn((callback) => {
    const mockSubscription = { remove: jest.fn() };
    setTimeout(() => callback({ batteryLevel: 0.1 }), 100);
    return mockSubscription;
  }),
}));

describe("useBattery", () => {
  describe("test useEffect", () => {
    beforeEach(() => {
      let callback: (state: { batteryLevel: number }) => void;
      (Battery.addBatteryLevelListener as jest.Mock).mockImplementation(
        (cb) => {
          callback = cb;
          return { remove: jest.fn() };
        }
      );
      (
        Battery as unknown as {
          _mockCallback: () => (state: { batteryLevel: number }) => void;
        }
      )._mockCallback = () => callback;
    });

    test("should set initial battery level (watchBattery=false)", async () => {
      (Battery.getBatteryLevelAsync as jest.Mock).mockResolvedValue(0.75);

      const { result } = renderHook(() => useBattery());
      expect(result.current.batteryLevel).toBe(null);
      await waitFor(() => {
        expect(result.current.batteryLevel).toBe(0.75);
        expect(Battery.addBatteryLevelListener).toHaveBeenCalledTimes(0);
      });
    });
    test("should set initial battery level (watchBattery=true)", async () => {
      (Battery.getBatteryLevelAsync as jest.Mock).mockResolvedValue(0.75);

      const { result } = renderHook(() => useBattery({ watchBattery: true }));
      expect(result.current.batteryLevel).toBe(null);
      await waitFor(() => {
        expect(result.current.batteryLevel).toBe(0.75);
        expect(Battery.addBatteryLevelListener).toHaveBeenCalledTimes(1);
      });

      const callback = (
        Battery as unknown as {
          _mockCallback: () => (state: { batteryLevel: number }) => void;
        }
      )._mockCallback();
      act(() => {
        if (typeof callback === "function") {
          callback({ batteryLevel: 0.99 });
        }
      });
      await waitFor(() => {
        expect(result.current.batteryLevel).toBe(0.99);
      });
    });
  });

  describe("test getPowerState", () => {
    test("should return power state", async () => {
      (Battery.getPowerStateAsync as jest.Mock).mockResolvedValue({
        batteryLevel: 0.88,
        batteryState: "charging",
        lowPowerMode: false,
      });
      const { result } = renderHook(() => useBattery());
      const powerState = await result.current.getPowerState();
      expect(powerState).toEqual({
        batteryLevel: 0.88,
        batteryState: "charging",
        lowPowerMode: false,
      });
      expect(Battery.getPowerStateAsync).toHaveBeenCalledTimes(1);
    });
  });
});
