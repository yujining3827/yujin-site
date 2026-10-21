# yujin_blog

React + TypeScript + Vite로 만든 포트폴리오 겸 블로그. Vercel에 자동 배포된다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 글 추가하기

`src/content/posts/`에 마크다운 파일을 추가하면 된다. 파일명이 곧 글 주소(slug)가 된다.

```markdown
---
title: 글 제목
date: 2026-08-03
---

본문은 여기에 마크다운으로 작성한다.
```

파일을 추가하고 commit & push하면 Vercel이 자동으로 재배포한다. 별도의 서버나 DB 없이 정적 빌드 시점에 모든 글을 읽어온다 (`src/lib/posts.ts`).

## 방문록 (Guestbook) 설정

방문록은 [Supabase](https://supabase.com)를 사용한다. 서버 코드 없이 브라우저에서 직접 Supabase에 접속한다.

1. Supabase 프로젝트 생성
2. SQL Editor에서 실행:

   ```sql
   create table guestbook_entries (
     id bigint generated always as identity primary key,
     name text not null check (char_length(name) between 1 and 30),
     message text not null check (char_length(message) between 1 and 300),
     created_at timestamptz not null default now()
   );
   alter table guestbook_entries enable row level security;
   create policy "public read" on guestbook_entries for select using (true);
   create policy "public insert" on guestbook_entries for insert with check (true);
   create policy "admin delete" on guestbook_entries for delete using (auth.role() = 'authenticated');
   ```

3. Authentication → Users에서 관리자 계정(이메일/비밀번호) 1개 생성. 이 계정으로 `/admin`에서 로그인하면 방문록 항목을 삭제할 수 있다.
4. Project Settings → API에서 URL과 anon key를 확인해 환경변수로 등록한다.

로컬에서는 `.env.example`을 복사해 `.env`를 만들고 값을 채운다. Vercel에서는 프로젝트 설정 → Environment Variables에 동일하게 등록한다.

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

환경변수가 없으면 방문록/관리자 페이지는 "준비 중" 안내만 보여주고, 나머지 페이지(홈, 프로젝트, 블로그)는 정상 동작한다.

## 페이지 구조

| 라우트 | 설명 |
|---|---|
| `/` | 소개 (About / Experience / Projects / Tech Stacks) |
| `/projects/:slug` | 프로젝트 상세 |
| `/blog` | 글 목록 (페이지네이션) |
| `/post/:slug` | 글 상세 |
| `/guestbook` | 방문록 |
| `/admin` | 관리자 로그인 (방문록 삭제 권한) |
