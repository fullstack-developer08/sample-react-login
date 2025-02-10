"use client";
import React from "react";
import styles from "./user.module.css";
import Header from "../header/Header";

const User: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header setIsLogin={() => {}}/>
    </div>
  );
};

export default User;
