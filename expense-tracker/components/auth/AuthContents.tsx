import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Colors from "../../constants";
import MyButton from "../MyButton";
import MyInput from "../MyInput";
type Props = {
  isLogin: boolean;
  onSwitch: () => void;
  onAuthenticate: (email: string, password: string) => Promise<void>;
};

const AuthContents = ({ isLogin, onSwitch, onAuthenticate }: Props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  async function submitHandler() {
    setIsLoading(true);
    setCredentialsInvalid({ email: false, password: false });
    const email = enteredEmail.trim();
    const password = enteredPassword.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;

    if (!emailIsValid || !passwordIsValid) {
      setIsLoading(false);
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
      return;
    }
    await onAuthenticate(email, password);
    setIsLoading(false);
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView behavior="position" style={styles.container}>
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
        </KeyboardAvoidingView>
      </ScrollView>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  authContent: {
    flex: 1,
    minWidth: "100%",
    marginTop: 300,
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
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthContents;
function useNavigation(): { navigate: any } {
  throw new Error("Function not implemented.");
}
