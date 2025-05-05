import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { SignupScreenNavigationProps } from "../App";
import AuthContent from "../components/auth/AuthContents";
import { signupApi } from "../helper/HttpHelper";
import { onAuthenticated } from "../store/auth";

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenNavigationProps>();
  const dispatch = useDispatch();

  return (
    <AuthContent
      isLogin={false}
      onSwitch={() => navigation.replace("Login")}
      onAuthenticate={async (email, password) => {
        const auth = await signupApi(email, password);
        if (auth) {
          dispatch(onAuthenticated(auth));
        }
      }}
    />
  );
};

export default SignupScreen;
