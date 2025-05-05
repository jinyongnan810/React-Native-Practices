import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SignupScreenNavigationProps } from "../App";
import AuthContent from "../components/auth/AuthContents";

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenNavigationProps>();
  return (
    <AuthContent
      isLogin={false}
      onSwitch={() => navigation.replace("Login")}
      onAuthenticate={() => {}}
    />
  );
};

export default SignupScreen;
