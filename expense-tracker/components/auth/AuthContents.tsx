import React, { useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import Colors from "../../constants";
import MyButton from "../MyButton";
import MyInput from "../MyInput";
type Props = {
  isLogin: boolean;
  onSwitch: () => void;
  onAuthenticate: (email: string, password: string) => void;
};

const AuthContents = ({ isLogin, onSwitch, onAuthenticate }: Props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
  });
  function submitHandler() {
    const email = enteredEmail.trim();
    const password = enteredEmail.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
      return;
    }
    onAuthenticate(email, password);
  }
  return (
    <View style={styles.container}>
      <View style={styles.authContent}>
        <View style={styles.form}>
          <View>
            <MyInput
              label="Email Address"
              onSetValue={(v) => setEnteredEmail(v)}
              value={enteredEmail}
              type="email-address"
              isInvalid={credentialsInvalid.email}
            />
            <MyInput
              label="Password"
              onSetValue={(v) => setEnteredPassword(v)}
              secure={true}
              value={enteredPassword}
              type="default"
              isInvalid={credentialsInvalid.password}
            />
            <View style={styles.buttons}>
              <MyButton onClick={submitHandler} type="primary">
                {isLogin ? "Log In" : "Sign Up"}
              </MyButton>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            title={isLogin ? "Create a new user" : "Log in instead"}
            onPress={onSwitch}
            color={"#fff"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  authContent: {
    width: "100%",
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  form: {
    marginTop: 16,
  },
  buttons: {
    marginTop: 8,
  },
});

export default AuthContents;
function useNavigation(): { navigate: any } {
  throw new Error("Function not implemented.");
}
