import styles from "../page.module.css";
import Link from "next/link";
import {Bot} from "lucide-react"

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <Bot className={styles.bot} size={30} color="white"/>
      <Link className={styles.active} href="#">Profile</Link>
      <Link href="~#">Formations</Link>
      <Link href="#">Expériences</Link>
      <Link href="#">Compétences</Link>
    </div>
  );
}