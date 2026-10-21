import { useEffect, useState, type FormEvent } from "react";

import Endpoint from "../components/Endpoint";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import { useSession } from "../lib/useSession";
import styles from "./Guestbook.module.css";

type Entry = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export default function Guestbook() {
  const { session } = useSession();
  const isAdmin = Boolean(session);

  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    supabase
      .from("guestbook_entries")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (fetchError) setError(fetchError.message);
        else setEntries(data ?? []);
        setLoading(false);
      });
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!supabase) return;
    if (company.trim() !== "") return; // bot caught by honeypot
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);
    setError(null);

    const { data, error: insertError } = await supabase
      .from("guestbook_entries")
      .insert({ name: name.trim(), message: message.trim() })
      .select("id, name, message, created_at")
      .single();

    setSubmitting(false);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setEntries((prev) => [data as Entry, ...prev]);
    setName("");
    setMessage("");
  }

  async function handleDelete(id: number) {
    if (!supabase) return;
    const { error: deleteError } = await supabase
      .from("guestbook_entries")
      .delete()
      .eq("id", id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }

  return (
    <div className={styles.page}>
      <Endpoint
        as="h1"
        method="POST"
        path="/guestbook"
        title="Guestbook"
        description="지나가다 흔적을 남겨주세요. 응원, 피드백, 커피챗 제안 모두 환영해요."
      />

      {!isSupabaseConfigured ? (
        <p className={styles.notice}>
          방문록은 아직 준비 중입니다. Supabase 연동이 완료되면 이용할 수
          있어요.
        </p>
      ) : (
        <>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.honeypot}
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              aria-hidden="true"
            />

            <div className={styles.row}>
              <input
                className={styles.input}
                placeholder="이름"
                maxLength={30}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <textarea
              className={styles.textarea}
              placeholder="메시지를 남겨주세요"
              maxLength={300}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div className={styles.formFooter}>
              <button className={styles.submit} type="submit" disabled={submitting}>
                {submitting ? "sending..." : "POST 남기기"}
              </button>
              {error && <p className={styles.error}>{error}</p>}
            </div>
          </form>

          {loading ? null : entries.length === 0 ? (
            <p className={styles.empty}>아직 남겨진 글이 없어요.</p>
          ) : (
            <div className={styles.list}>
              {entries.map((entry) => (
                <div key={entry.id} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <span className={styles.entryName}>{entry.name}</span>
                    <span className={styles.entryMetaRight}>
                      <span className={styles.entryDate}>
                        {entry.created_at.slice(0, 10)}
                      </span>
                      {isAdmin && (
                        <button
                          className={styles.deleteButton}
                          onClick={() => handleDelete(entry.id)}
                        >
                          삭제
                        </button>
                      )}
                    </span>
                  </div>
                  <p className={styles.entryMessage}>{entry.message}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
