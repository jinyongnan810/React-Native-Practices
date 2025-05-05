import { useNavigation } from "@react-navigation/native";
import React from "react";
import { LoginScreenNavigationProps } from "../App";
import AuthContent from "../components/auth/AuthContents";

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  return (
    <AuthContent
      isLogin={true}
      onSwitch={() => navigation.replace("Signup")}
      onAuthenticate={() => {}}
    />
  );
};

export default LoginScreen;
