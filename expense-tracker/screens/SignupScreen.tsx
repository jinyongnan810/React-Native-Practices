import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SignupScreenNavigationProps } from "../App";
import AuthContent from "../components/auth/AuthContents";
import { signupApi } from "../helper/HttpHelper";

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenNavigationProps>();
  return (
    <AuthContent
      isLogin={false}
      onSwitch={() => navigation.replace("Login")}
      onAuthenticate={async (email, password) => {
        await signupApi(email, password);
      }}
    />
  );
};

export default SignupScreen;
