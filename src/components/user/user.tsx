"use client";
import React from "react";
import styles from "./user.module.css";
import DrawerAppBar from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const User: React.FC = () => {
  return (
    <div className={styles.page}>
      <DrawerAppBar />
      <main className={styles.main}>
        <h1>User Page</h1>
        <p>Welcome to the user page!</p>
      </main>
      <Footer />
    </div>
  );
};

export default User;