import styles from "../page.module.css";
import Link from "next/link";

export default function Profile() {
  return (
    <div className={styles.profile} id="profile">
      <div className={styles.hero}>
        <div className={styles.contacts}>
          <Link href="https://www.linkedin.com/in/sid-ahmed-boudissa-b4124a374" target="_blank">
            <img src="\linkedin.png" alt="linkedin" />
          </Link>
          <Link href="https://github.com/sid77med-bit" target="_blank">
            <img src="/GitHub.png" alt="github" />
          </Link>
        </div>
        <div className={styles.heroContainer}>
          <span className={styles.bonjour}>Hello I&apos;m</span>

          <span className={styles.name}>
            <span className={styles.familyName}>Boudissa </span>
            MEROUANE SID AHMED.
          </span>
          <p>
            I am an AI-oriented developer specializing in automation and web
            development.{" "}
            <a className={styles.download} href="/cv.pdf" download="boudissa_resume.pdf">
              Download my resume.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
