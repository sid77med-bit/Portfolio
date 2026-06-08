import styles from "../page.module.css";
import Link from "next/link";
import {Bot} from "lucide-react"

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <Bot className={styles.bot} size={30} color="white"/>
      <div className={styles.navlinks}>
      <Link className={styles.active} href="#profile">Profile</Link>
      <Link href="#assistant">Assistant</Link>
      <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
}
