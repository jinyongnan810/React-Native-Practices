import * as Battery from "expo-battery";
import { useEffect, useState } from "react";

export default function useBattery({
  watchBattery = false,
}: { watchBattery?: boolean } = {}) {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    Battery.getBatteryLevelAsync().then((level) => {
      setBatteryLevel(level);
    });
  }, []);

  useEffect(() => {
    if (!watchBattery) {
      return;
    }
    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
    });
    return () => {
      subscription.remove();
    };
  }, [watchBattery]);

  const getPowerState = async () => {
    const powerState = await Battery.getPowerStateAsync();
    return {
      batteryLevel: powerState.batteryLevel,
      batteryState: powerState.batteryState,
      lowPowerMode: powerState.lowPowerMode,
    };
  };

  return { batteryLevel, getPowerState };
}
