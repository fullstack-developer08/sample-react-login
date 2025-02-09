"use client";
import React from "react";
import Image from "next/image";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import User from "../user/user";
import * as jwt_decode from "jwt-decode";

const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState<string | null>(null);

  const handleGoogleLoginSuccess = (response: any) => {
    const decoded: any = jwt_decode.jwtDecode(response.credential);
    setUserName(decoded.name);
    setLoggedIn(true);
  };

  const handleGoogleLoginFailure = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn && (
        <GoogleOAuthProvider clientId="751952271709-1i32otbqr4jebnj7m4mb91khml8hdaet.apps.googleusercontent.com">
          <section className="hero">
            <div className="text-content">
              <h1>Login Page using Google and Twitter</h1>
              <p>Get started quickly by logging in with your Google or Twitter account.</p>
              <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginFailure} />
            </div>
            <div className="image-content">
              <Image src="/aa.png" alt="Login Page" width={500} height={300} />
            </div>
          </section>
        </GoogleOAuthProvider>
      )}

      {loggedIn && (
        <div>
          <h2>Welcome, {userName}!</h2>
          <User />
        </div>
      )}
    </div>
  );
};

export default Login;
