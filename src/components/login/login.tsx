"use client";
import React from "react";
import Image from "next/image";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import * as jwt_decode from "jwt-decode";
import User from "../user/User";
import { Grid2 as Grid } from "@mui/material";

interface LoginProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ isLogin, setIsLogin }) => {
  const [userName, setUserName] = React.useState<string | null>(null);

  const handleGoogleLoginSuccess = (response: any) => {
    const decoded: any = jwt_decode.jwtDecode(response.credential);
    setUserName(decoded.name);
    setIsLogin(true);
  };

  const handleGoogleLoginFailure = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={8}>
          {!isLogin && (
            <GoogleOAuthProvider clientId="751952271709-1i32otbqr4jebnj7m4mb91khml8hdaet.apps.googleusercontent.com">
              <section className="hero">
                <div className="text-content">
                  <h1>Login using Google</h1>
                  <p>Get started quickly by logging in with your Google account.</p>
                  <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginFailure} />
                </div>
              </section>
            </GoogleOAuthProvider>
          )}
          {isLogin && (
            <div>
              <h2>Welcome, {userName}!</h2>
              <User />
            </div>
          )}
        </Grid>
        <Grid size={4}>
          <div className="image-content">
            <Image src="/login.png" alt="Login Page" width={500} height={200} layout="responsive" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
