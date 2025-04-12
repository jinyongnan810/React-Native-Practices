import { Alert } from "react-native";

export const showPopup = (title: string, msg: string) => {
  Alert.alert(
    title,
    msg,
    [
      {
        text: "OK",
        onPress: () => {},
      },
    ],
    { cancelable: true }
  );
};
