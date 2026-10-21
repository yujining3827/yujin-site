import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import { isSupabaseConfigured, supabase } from "../lib/supabase";
import { useSession } from "../lib/useSession";
import styles from "./Admin.module.css";

export default function Admin() {
  const { session, loaded } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!supabase) return;

    setSubmitting(true);
    setError(null);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setSubmitting(false);
    if (signInError) setError(signInError.message);
  }

  async function handleSignOut() {
    await supabase?.auth.signOut();
  }

  if (!isSupabaseConfigured) {
    return (
      <div>
        <h1 className={styles.title}>Admin</h1>
        <p className={styles.notice}>
          Supabase 연동이 완료되면 관리자 로그인을 이용할 수 있어요.
        </p>
      </div>
    );
  }

  if (!loaded) return null;

  if (session) {
    return (
      <div>
        <h1 className={styles.title}>Admin</h1>
        <div className={styles.status}>
          <span className={styles.email}>{session.user.email}로 로그인됨</span>
          <button className={styles.signOut} onClick={handleSignOut}>
            로그아웃
          </button>
        </div>
        <p className={styles.hint}>
          <Link to="/guestbook">방문록</Link>에서 항목을 삭제할 수 있습니다.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.title}>Admin</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.submit} type="submit" disabled={submitting}>
          {submitting ? "로그인 중..." : "로그인"}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
