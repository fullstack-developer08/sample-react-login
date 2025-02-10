"use client";
import Login from "@/components/login/Login";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import React from "react";

export default function Home() {
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <div className={styles.custContainer}>
      <Header setIsLogin={setIsLogin} />
      <Login isLogin={isLogin} setIsLogin={setIsLogin}></Login>
    </div>
  );
}
