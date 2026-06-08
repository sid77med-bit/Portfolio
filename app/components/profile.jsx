import styles from "../page.module.css"
import Link from "next/link";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.hero}>
        <Link href="https://github.com/sid77med-bit">
        <img src="/GitHub.png" alt="github" />
        </Link>
        <div className={styles.heroContainer}>
          <span className={styles.bonjour}>Hello I'm</span>

          <span className={styles.name}>
            <span className={styles.familyName}>Boudissa </span>
            MEROUANE SID AHMED.
          </span>
          <p>
            I'm a développeur orienté intelligence artificielle,
            automatisation et développement web.
          </p>
        </div>
      </div>
    </div>
  );
}
