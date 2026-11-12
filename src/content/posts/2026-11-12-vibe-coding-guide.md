---
title: 비전공자도 오늘 시작하는 바이브코딩 가이드
date: 2026-11-12
description: 코딩을 한 번도 안 해봤어도 괜찮아요. 아이디어를 화면으로 만들고, 인터넷 주소로 배포하는 것까지 순서대로 따라 해요.
tags: [바이브코딩, 비전공자, 가이드]
series: [릴스정보, 바이브 코딩]
---

릴스 보고 오셨죠? 영상 순서 그대로 따라 하면 돼요.

> [!NOTE]
> 이 글은 **바이브코딩이 정말 처음인 분**, 또는 **유료 AI 구독이 없는 분**을 위한 시작 가이드예요. 좀 더 깊은 수준의 글은 앞으로 차근차근 올릴 예정이에요.

> 사진은 누르면 크게 볼 수 있어요.

이 글을 끝까지 따라 하면 머릿속 아이디어가 **화면 3개짜리 서비스**로 정리되고, 그 화면이 **진짜 웹페이지**로 만들어져요. 마지막엔 친구한테 보낼 수 있는 **내 인터넷 주소**까지 생겨요.

- ⏱ **예상 시간**: 처음이면 2~3시간 (나눠서 해도 돼요)
- 💰 **비용**: 0원으로 시작할 수 있어요
- 💻 **준비물**: 컴퓨터(윈도우·맥), 이메일 주소

> 지금 폰으로 보고 계시면 0번까지만 먼저 해보세요. 1번부터는 컴퓨터가 필요해요.

**어떤 도구를 쓰나요?**

| 도구 | 하는 일 | 무료 범위 |
|---|---|---|
| ChatGPT | 아이디어 정리 | 무료 가능 |
| Stitch | 화면 디자인 | 무료 가능 |
| VS Code | 코드 작업 공간 | 무료 |
| GitHub | 코드 저장 | 저장소 무제한 무료 |
| GitHub Copilot | AI 코딩 | 무료 플랜(월 사용량 제한) |
| Vercel | 배포 | 개인·비상업용 무료 |
| Supabase (선택) | 로그인·저장 | 프로젝트 2개까지 무료 |

## 목차

0. 시작 전에: 아이디어 줄이기
1. Stitch로 화면 먼저 보기
2. 개발 환경 만들기
3. GitHub 가입
4. AI랑 코드 만들기
5. Vercel로 배포
6. (선택) Supabase
7. 막혔을 때

---

## 0. 시작 전에: 아이디어 줄이기

처음부터 크게 만들면 지치기 쉬워요. 그래서 첫 단계는 **화면 3개**로 작게 시작해 볼게요.

> 3개는 작게 시작하려고 잡은 숫자예요. 꼭 넣고 싶은 기능이 있다면 개수는 안 지켜도 돼요.

1. ChatGPT를 열어요. (다른 AI 챗봇도 괜찮아요)
2. 묵혀둔 아이디어를 말하듯이 적어요. 엉성해도 돼요.
3. 아래 프롬프트를 복사해서 아이디어만 바꿔 넣어요.

> 프롬프트: AI한테 보내는 요청 문장이에요.

```text
나는 코딩을 처음 해보는 비전공자야.
아래 아이디어로 웹 서비스를 만들 건데, 먼저 Stitch(구글의 AI 디자인 도구)로 화면 디자인부터 뽑으려고 해.
네 답변을 Stitch에 그대로 붙여 넣을 거야. Stitch가 화면을 그릴 수 있게 "화면 3개짜리 화면 설계"로 정리해줘.
코드를 짜거나 화면을 직접 만들지는 말고, 글로 된 설계만 줘.

[내 아이디어]
(여기에 아이디어를 편하게 적기)

조건
- 화면은 딱 3개만
- 로그인, 결제, 관리자 기능은 빼기
- 각 화면마다: 화면 이름 / 보여줄 내용(위에서 아래 순서로) / 누를 수 있는 버튼
- 마지막에 서비스 한 줄 소개도 써줘
```

**예시: 저는 이렇게 채웠어요**

```text
나는 코딩을 처음 해보는 비전공자야.
아래 아이디어로 웹 서비스를 만들 건데, 먼저 Stitch(구글의 AI 디자인 도구)로 화면 디자인부터 뽑으려고 해.
네 답변을 Stitch에 그대로 붙여 넣을 거야. Stitch가 화면을 그릴 수 있게 "화면 설계"로 정리해줘.
코드를 짜거나 화면을 직접 만들지는 말고, 글로 된 설계만 줘.

[내 아이디어]
내가 갈 예정인 여행 계획이랑, 갔다온 후엔 갔다온 사진 기록하는 걸로 사용할 웹 사이트를 하나 만들고 싶어. 근데 사용은 앱에서 볼 거라 웹앱으로 만들어줘.

1. 여행 등록은 기간, 나라(도시는 선택), 왕복 비행기 편명 등록
2. 계획은 기간의 시작부터 끝까지 day 1, 2, 3 … n 이렇게 세부 페이지가 생기게
3. 사진 등록도 day별로 되면 좋은데, 한 번에 보이면 좋을 것 같아. 사진마다 캡션도 적을 수 있게

조건
- 화면은 3개까지 줄일 필요는 없지만 최소화해줘 (컨셉 잡히면 세부 페이지 만들려고)
- 로그인, 결제, 관리자 기능은 1차 디자인에서는 빼기
- 각 화면마다: 화면 이름 / 보여줄 내용(위에서 아래 순서로) / 누를 수 있는 버튼
- 마지막에 서비스 한 줄 소개도 써줘
```

![ChatGPT 입력창에 프롬프트를 넣은 화면](/posts/vibe-coding/chatgpt-prompt.png)

> 이 글의 프롬프트는 비전공자분들을 위해 가볍게 써본 거예요. 전공자분들은… 저보다 더 잘하시는 분도 계실 테니 알아서 작성해 주시면 됩니다 ><

4. 결과가 마음에 안 들면 "더 단순하게 줄여줘"라고 한 번 더 말해요.
5. 답변을 메모장에 복사해 둬요. 1번에서 그대로 써요.

![ChatGPT가 화면 3개로 정리해 준 답변](/posts/vibe-coding/chatgpt-result.png)

---

## 1. Stitch로 화면 먼저 보기

Stitch는 글로 설명하면 앱 화면을 그려주는 구글의 AI 디자인 도구예요.

### 가입하고 들어가기

1. [stitch.withgoogle.com](https://stitch.withgoogle.com) 에 들어가요.
2. 구글 계정으로 로그인해요.

![Stitch 첫 화면](/posts/vibe-coding/stitch.png)

### 아이디어 넣기

1. 입력창에 0번에서 정리한 내용을 붙여 넣어요.
2. 입력창 아래에서 **App**(모바일 화면)과 **Web**(웹 화면) 중 하나를 골라요.
3. 생성하고 잠깐 기다려요.

![Stitch에 ChatGPT 답변과 레퍼런스 이미지를 함께 넣은 화면](/posts/vibe-coding/stitch-reference.png)

### 팁: 한국 앱처럼 뽑는 법

그냥 넣으면 외국 사이트처럼 나와요. 두 가지만 지켜요.

- **스타일을 직접 말하기**: 색, 글씨, 분위기를 적어요.
- **레퍼런스 1장 + 설명**: 좋아하는 앱 화면을 한 장 캡처해서 올리고, 내 서비스가 뭔지 같이 설명해요.

> 레퍼런스: "이런 느낌으로 해줘" 하고 보여주는 참고 이미지예요.

**제 꿀팁: 레퍼런스는 핀터레스트에서 찾아요**

1. [핀터레스트](https://www.pinterest.com)를 열어요.
2. **분야 + 앱인지 웹인지 + aesthetic(에스테틱)** 순서로, 영어로 검색해요. 예: 여행 앱이면 아래처럼요.
3. 마음에 드는 디자인 컨셉을 한 장 저장해요.

```text
travel mobile app aesthetic
```

![핀터레스트에서 travel mobile app aesthetic을 검색한 결과](/posts/vibe-coding/pinterest-travel.png)

웹사이트를 만들 거면 `mobile app` 자리에 `website`를 넣어요.

```text
travel website aesthetic
```

![핀터레스트에서 travel website aesthetic을 검색한 결과](/posts/vibe-coding/pinterest-travel-web.png)

분야만 바꿔도 돼요. 금융(`finance mobile app aesthetic`)으로 검색해도 이렇게 우리가 익숙한 디자인이 나와요.

![핀터레스트에서 finance mobile app aesthetic을 검색한 결과](/posts/vibe-coding/pinterest-finance.png)

**레퍼런스를 구했으면 Stitch에 이렇게 넣어요**

```text
[서비스 설명]
(0번에서 받은 한 줄 소개와 화면 3개 내용 붙여넣기)

[스타일]
- 한국 모바일 앱 스타일 (토스, 당근처럼 깔끔하게)
- 모든 글자는 한국어
- 흰 배경, 포인트 색은 1개만
- 글씨는 크고 굵게, 여백은 넉넉하게
- 버튼은 화면 아래에 크게 하나
- 그림자나 장식은 최소로

첨부한 이미지는 분위기 참고용이야. 내용은 위 설명대로 만들어줘.
```

같은 설명인데, 레퍼런스가 있고 없고에 따라 이렇게 달라져요.

**레퍼런스 없이 요청했을 때**

![레퍼런스 없이 요청한 Stitch 결과](/posts/vibe-coding/stitch-no-reference.png)

**레퍼런스와 같이 요청했을 때**

![레퍼런스와 같이 요청한 Stitch 결과](/posts/vibe-coding/stitch-with-reference.png)

### 결과 받기

딸깍 한 번으로 완벽하게 안 나와요. **고치는 게 수고예요.**

1. 마음에 안 드는 부분을 한 번에 하나씩 말해요.

```text
두 번째 화면의 버튼을 더 크게 하고, 문구를 "결과 보기"로 바꿔줘.
```

2. 화면 3개가 괜찮아지면 오른쪽 위 **Export**로 내보내요.
3. 메뉴가 헷갈리면 그냥 화면을 캡처해서 이미지로 저장해도 돼요.

---

## 2. 개발 환경 만들기

VS Code는 코드를 쓰는 메모장 같은 프로그램이에요. 무료예요.

### VS Code 설치

1. [code.visualstudio.com/download](https://code.visualstudio.com/download) 에 들어가요.
2. 내 컴퓨터에 맞는 걸 받아요. (윈도우 10·11, 맥 macOS 12 이상)
3. 받은 파일을 열어서 설치해요.

![VS Code 다운로드 페이지](/posts/vibe-coding/vscode-download.png)

### 한국어로 바꾸기

1. VS Code를 열고 `Ctrl+Shift+P` (맥은 `Cmd+Shift+P`)를 눌러요.
2. `display`라고 치고 **Configure Display Language**를 골라요.

![VS Code에서 display를 검색해 Configure Display Language를 고르는 화면](/posts/vibe-coding/vscode-display-language.png)

3. 한국어를 골라요. 언어팩이 없으면 알아서 설치돼요.
4. 다시 시작하라는 안내가 나오면 **다시 시작**을 눌러요.

![언어를 바꾸면 뜨는 다시 시작 확인 창](/posts/vibe-coding/vscode-restart.png)

> 저는 이미 한국어로 쓰고 있어서, 위 사진은 영어로 바꿀 때 뜨는 확인 창이에요. 한국어로 바꿀 때도 같은 창이 떠요.

### Git 설치

Git은 코드를 GitHub에 올려주는 도구예요. VS Code와 따로 설치해야 해요.

**윈도우**

1. [git-scm.com/install/windows](https://git-scm.com/install/windows) 에서 Git for Windows를 받아요.
2. 설치 중 나오는 선택지는 전부 기본값으로 넘겨요.

**맥**

1. 터미널 앱을 열어요. (Spotlight에서 "터미널" 검색)
2. 아래 한 줄을 붙여 넣고 엔터를 눌러요.

```text
xcode-select --install
```

3. 설치 창이 뜨면 안내대로 진행해요.

설치가 끝나면 **VS Code를 껐다가 다시 켜요.** 이걸 안 하면 Git을 못 찾아요.

---

## 3. GitHub 가입

GitHub는 코드를 저장해 두는 인터넷 창고예요. 5번 배포에서 이 창고를 그대로 연결해요.

1. [github.com/signup](https://github.com/signup) 에 들어가요.
2. 이메일(Email), 비밀번호(Password), 사용자 이름(Username), 국가(Country/Region)를 채워요. **Continue with Google**로 구글 계정을 써도 돼요.
3. **Create account**를 눌러요.
4. 가입 중에 이메일 인증을 해요.

![GitHub 가입 화면](/posts/vibe-coding/github-signup.png)

> 무료 계정으로도 공개·비공개 저장소를 개수 제한 없이 만들 수 있어요.

---

## 4. AI랑 코드 만들기

이 글에서는 VS Code 안에 들어 있는 **GitHub Copilot**을 써요. 방금 만든 GitHub 계정으로 무료 플랜을 쓸 수 있어요.

> 무료 플랜은 한 달 사용량이 정해져 있어요. 다 쓰면 다음 달까지 기다리거나 유료(Copilot Pro, 월 10달러)로 바꿔야 해요.

### Copilot 켜기

1. VS Code 맨 아래 줄 오른쪽에서 Copilot 아이콘과 **Sign In**을 찾아서 눌러요.
2. 안내에 따라 GitHub 계정으로 로그인해요.

![VS Code 맨 아래 줄 오른쪽의 Copilot Sign In 버튼](/posts/vibe-coding/vscode-copilot-signin.png)

**Copilot 아이콘이 안 보일 때**

아직 한 번도 안 켰으면 아이콘이 안 보일 수 있어요. 위에서부터 하나씩 해봐요.

1. `Ctrl+Alt+I` (맥은 `Ctrl+Cmd+I`)를 눌러 채팅 창을 열어봐요. 위쪽 메뉴의 **Chat → Open Chat**으로도 열려요.
2. 안 열리면 `Ctrl+Shift+P` (맥은 `Cmd+Shift+P`)를 누르고 아래 문구를 검색해서 실행해요.

```text
GitHub Copilot: Sign in
```

3. 그래도 안 되면 왼쪽 아래 사람 모양 아이콘(계정)을 눌러요. **Sign in with GitHub to use GitHub Copilot**을 고르면 돼요.
4. 1~3번이 전부 안 먹으면 VS Code가 오래된 버전일 가능성이 커요. 맥은 맨 위 메뉴 막대의 **Code → 업데이트 확인**, 윈도우는 **도움말 → 업데이트 확인**을 눌러요.
5. 맥에서 "read-only volume" 오류가 뜨면서 업데이트가 안 되면, VS Code 앱이 다운로드 폴더에 있는 거예요. 앱을 **응용 프로그램** 폴더로 옮기고 다시 열어서 업데이트해요.

> 제가 딱 이 경우였어요. 2년 전에 깔아둔 VS Code를 그대로 쓰고 있어서 Copilot 메뉴가 아예 없었어요. 업데이트하니까 바로 아래 줄에 Sign In이 생겼어요.

> 로그인만 하면 따로 결제 없이 무료 플랜(Copilot Free)으로 시작돼요.

### 폴더 만들고 열기

1. 바탕화면에 새 폴더를 만들어요. 이름은 영어로 지어요. 예: `my-first-app`
2. VS Code에서 **파일 → 폴더 열기**로 그 폴더를 열어요.

![VS Code에서 my-first-app 폴더를 고르는 화면](/posts/vibe-coding/vscode-open-folder.png)

### AI한테 요청하기

1. `Ctrl+Alt+I` (맥은 `Ctrl+Cmd+I`)로 채팅 창을 열어요.
2. 채팅 창 아래에서 **Agent**가 선택돼 있는지 확인해요.
3. Stitch 화면 이미지 3장을 채팅 창으로 끌어다 놓아요. (또는 **+** 버튼 → Files)
4. 아래 요청문을 붙여 넣고 보내요.

```text
첨부한 화면 3장을 그대로 웹페이지로 만들어줘.

- 설치 없이 열리게 HTML, CSS, JavaScript 파일만 써줘
- 첫 화면 파일 이름은 index.html로, 폴더 맨 위에 만들어줘
- 폰 화면에서 먼저 예쁘게 보이게 해줘
- 버튼을 누르면 다음 화면으로 넘어가게 해줘
- 저장 기능은 아직 필요 없어. 예시 내용으로 채워줘
- 나는 코딩이 처음이야. 다 만들면 확인하는 방법을 한 줄로 알려줘
```


![Copilot 채팅 창에 화면 이미지 3장과 요청문을 넣은 화면](/posts/vibe-coding/copilot-prompt.png)

### 기다리는 동안 생기는 일

1. 중간에 "이거 해도 돼요?" 하고 허락을 구하는 창이 떠요. 내용을 읽어보고 **Allow in this Session**을 눌러요.

![Copilot이 브라우저를 열어도 되는지 묻는 창](/posts/vibe-coding/copilot-permission.png)

> 위 사진은 만든 페이지를 VS Code 안의 브라우저로 열어봐도 되냐는 질문이에요. 건너뛰고 싶으면 **Skip**을 눌러요.

2. 허용하면 AI가 화면을 직접 띄워서 잘 만들어졌는지 확인해요. 그냥 기다리면 돼요.

![Copilot이 만든 화면을 직접 띄워서 확인하는 모습](/posts/vibe-coding/copilot-working.png)

3. 다 끝나면 뭘 만들었는지와 확인 방법을 알려줘요. 저는 3분쯤 걸렸어요.

![Copilot 작업이 끝나고 확인 방법을 알려주는 화면](/posts/vibe-coding/copilot-done.png)

4. 결과가 마음에 들면 **Keep**을 눌러 만든 파일을 그대로 둬요. 되돌리고 싶으면 **Undo**예요.
5. 폴더 안의 `index.html`을 더블클릭해요. 브라우저에서 열려요.

### 고치기

여기서도 한 번에 안 돼요. 고칠 부분이 보이면 자유롭게 프롬프팅해서 고치면 돼요. 예를 들면 이렇게요.

```text
첫 화면 제목이 너무 작아. 더 크고 굵게 바꿔줘.
```

---

## 5. Vercel로 배포

배포는 내 컴퓨터에만 있는 웹페이지를 인터넷 주소로 올리는 거예요. Vercel이 그걸 무료로 해줘요.

> 무료(Hobby) 플랜은 개인·비상업 용도만 돼요. 돈을 받는 서비스나 판매 광고는 유료 플랜이 필요해요.

### 먼저 GitHub에 올리기

1. VS Code에서 `Ctrl+Shift+P` (맥은 `Cmd+Shift+P`)를 눌러요.
2. **Publish to GitHub**를 치고 골라요.
3. 로그인하라고 하면 GitHub 계정으로 로그인해요.
4. 저장소 이름을 정하고, 비공개(**private repository**)·공개(**public repository**) 중 하나를 골라요.

> 저장소: GitHub 안에 있는 내 프로젝트 폴더예요.

![Publish to GitHub에서 private과 public 중 하나를 고르는 화면](/posts/vibe-coding/vscode-publish-github.png)

> 비공개로 해도 Vercel 연결은 돼요. 코드를 남에게 보이기 싫으면 비공개를 골라요.

5. GitHub에 들어가서 내 저장소 목록에 올라갔는지 확인해요.

![GitHub 저장소 목록에 my-first-app이 올라간 화면](/posts/vibe-coding/github-repo.png)

### Vercel에 연결하기

1. [vercel.com](https://vercel.com) 에 들어가서 **Continue with GitHub**를 눌러요. 앞에서 만든 GitHub 계정으로 바로 가입·로그인돼요.

![Vercel 로그인 화면의 Continue with GitHub 버튼](/posts/vibe-coding/vercel-login.png)

2. 대시보드 오른쪽 위 **Create New**를 눌러 새 프로젝트를 만들어요.

![Vercel 대시보드 오른쪽 위의 Create New 버튼](/posts/vibe-coding/vercel-create-new.png)

3. **Import Git Repository** 목록에서 방금 올린 저장소 옆의 **Import**를 눌러요.

![Import Git Repository 목록에서 my-first-app 옆 Import 버튼](/posts/vibe-coding/vercel-import.png)

4. 설정은 건드리지 않아요. Application Preset이 **Other**로 돼 있으면 맞아요.
5. **Deploy**를 눌러요.

![Vercel New Project 화면의 설정과 Deploy 버튼](/posts/vibe-coding/vercel-new-project.png)

> 배포하는 중에 이메일로 인증번호를 한 번 확인해요. 메일함에서 번호를 찾아 입력하면 돼요.

잠깐 기다리면 **Deployed to Production**이라는 화면이 떠요. 저는 3초 걸렸어요.

![Vercel 배포 완료 화면](/posts/vibe-coding/vercel-deployed.png)

**Visit**을 누르면 내 사이트가 열려요. 주소는 `프로젝트이름-….vercel.app` 모양이고, 이게 내 서비스 주소예요.

제가 이 글 순서대로 만든 결과물은 여기서 볼 수 있어요: [my-first-app-ten-vert.vercel.app](https://my-first-app-ten-vert.vercel.app/)

### 고친 걸 다시 올리기

1. VS Code 왼쪽의 소스 제어 아이콘을 눌러요.
2. 메시지 칸에 뭘 고쳤는지 짧게 적고 **Commit**(커밋)을 눌러요.
3. **Sync Changes**(변경 내용 동기화)를 눌러요.

올리기만 하면 Vercel이 알아서 다시 배포해요. 주소는 그대로예요.

---

## 6. (선택) Supabase

**처음엔 건너뛰어도 돼요.** 5번까지 했으면 이미 완성이에요.

Supabase는 **회원가입**이나, 사용자가 **직접 글을 쓰고 수정하는 기능**이 있을 때 필요한 서비스예요. 로그인과 데이터 저장을 대신 맡아줘요.

이건 다음 편에서 더 깊게 다뤄볼게요. 지금 필요할 것 같은 분들만 가볍게 이렇게 해보세요.

1. [supabase.com](https://supabase.com) 에서 회원가입해요.
2. Copilot한테 이렇게 시켜요.

```text
이 프로젝트에 Supabase를 연결해서 (원하는 기능: 예) 회원가입, 글 쓰고 수정하기) 기능을 넣고 싶어.
나는 Supabase 회원가입만 해둔 상태야.
내가 Supabase에서 뭘 눌러서 뭘 복사해 와야 하는지, 처음 하는 사람 기준으로 하나씩 알려줘.
```

> 하다 보면 키(key)를 복사하라는 안내가 나와요. **Secret key는 절대 코드나 GitHub에 올리면 안 돼요.** 웹페이지에는 Publishable key만 써요.

---

## 7. 막혔을 때

### Publish to GitHub가 안 되거나 git 오류가 나요

Git이 없거나, 설치하고 VS Code를 다시 안 켠 경우예요.

1. 2번의 Git 설치를 다시 확인해요.
2. VS Code를 완전히 껐다가 켜요.

### Vercel에 내 저장소가 안 보여요

Vercel이 그 저장소를 볼 권한이 없는 거예요.

1. 저장소 목록 아래 **Adjust GitHub App Permissions**를 눌러요.
2. Repository access에서 내 저장소를 추가해요.
3. **Save**를 눌러요.

### 배포했는데 404나 빈 화면이 나와요

1. GitHub 저장소에 들어가서 `index.html`이 **맨 위**에 있는지 봐요.
2. 폴더 안에 들어가 있으면 Copilot한테 말해요.

```text
index.html을 폴더 맨 위로 옮기고, 깨지는 경로가 있으면 같이 고쳐줘.
```

### AI가 만든 게 이상하거나 에러가 나요

1. 에러 문구를 **그대로 복사**해서 붙여 넣고 "이거 고쳐줘"라고 해요.
2. 요청은 한 번에 하나씩 해요. 여러 개를 한꺼번에 말하면 더 꼬여요.
3. 화면이 Stitch랑 다르면 이미지를 다시 올리고 "이 화면이랑 똑같이"라고 해요.

---

## 마지막으로

일단 눈에 보이게 만들어보세요. 만들다 보면 애정이 생겨서 계속 고치게 돼요.

막히면 DM 주세요, 최대한 답해드릴게요.

- 인스타그램: [@greedy_uuu](https://www.instagram.com/greedy_uuu/)
- 같은 방식으로 만든 제 프로젝트: [오늘 시장은 (ReadEcon)](/projects/today-market)
