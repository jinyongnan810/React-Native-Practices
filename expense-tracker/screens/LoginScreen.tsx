import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { LoginScreenNavigationProps } from "../App";
import AuthContent from "../components/auth/AuthContents";
import { loginApi } from "../helper/HttpHelper";
import { onAuthenticated } from "../store/auth";

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const dispatch = useDispatch();
  return (
    <AuthContent
      isLogin={true}
      onSwitch={() => navigation.replace("Signup")}
      onAuthenticate={async (email, password) => {
        const auth = await loginApi(email, password);
        if (auth) {
          dispatch(onAuthenticated(auth));
        }
      }}
    />
  );
};

export default LoginScreen;
