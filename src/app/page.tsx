"use client";
import Login from "@/components/login/login";
import styles from "./page.module.css";
import DrawerAppBar from "@/components/header/Header";
import User from "@/components/user/user";

export default function Home() {
  return (
    <div className={styles.page}>
      <DrawerAppBar />
      <Login></Login>
    </div>
  );
}
