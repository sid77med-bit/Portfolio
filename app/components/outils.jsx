import styles from "../page.module.css";

export default function Outils() {
  const logos = [
    { src: "/Python.png", alt: "Python" },
    { src: "/node.png", alt: "Node" },
    { src: "/React.png", alt: "React" },
    { src: "/Vite.png", alt: "Vite" },
    { src: "/Next.png", alt: "Next.js" },
    { src: "/FastAPI.png", alt: "FastAPI" },
    { src: "/PostgresSQL.png", alt: "PostgreSQL" },
    { src: "/Docker.png", alt: "Docker" },
    { src: "/langchain.png", alt: "LangChain" },
    { src: "/Git.png", alt: "Git" },
    { src: "/GitHub.png", alt: "GitHub" },
  ];
  return (
    <section className={styles.toolsSection} aria-label="Outils et technologies">
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {[...logos, ...logos].map((logo, i) => (
            <div className={styles.marqueeItem} key={`${logo.alt}-${i}`}>
              <img src={logo.src} alt={logo.alt} />
              <span>{logo.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
