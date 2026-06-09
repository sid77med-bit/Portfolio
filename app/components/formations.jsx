"use client";

import styles from "../page.module.css";
import { Search } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function Formations() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function askRag(question = query) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion || isLoading) {
      return;
    }

    setQuery(cleanQuestion);
    setAnswer("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: cleanQuestion }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur RAG");
      }

      setAnswer(data.answer);
    } catch {
      setError("Le RAG n'est pas disponible pour le moment.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    askRag();
  }

  return (
    <section className={styles.formations} id="assistant">
      <h5>ASSISTANT</h5>
      <div className={styles.formationTextSlot}>
        {answer && !isLoading && !error ? (
          <div className={styles.formationMarkdown}>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        ) : (
          <p className={isLoading || error ? styles.formationMainAnswer : undefined}>
            {isLoading && "Un instant..."}
            {error && error}
            {!isLoading && !error && "Let's talk about me ..."}
          </p>
        )}
      </div>
      <div className={styles.formationActions}>
        <form className={styles.inputContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            placeholder="What do you want to know about me ?"
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit" aria-label="Rechercher" disabled={isLoading}>
            <Search size={20} color="white" />
          </button>
        </form>
      </div>
    </section>
  );
}
