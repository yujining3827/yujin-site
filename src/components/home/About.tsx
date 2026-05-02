export default function About() {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "30px" }}>About Me</h2>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "40px",
        }}
      >
        <img
          src="/profile2.png"
          alt="profile"
          style={{
            width: "160px",
            height: "240px",
            objectFit: "cover",
            borderRadius: "0px",
          }}
        />

        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
            안녕하세요! 저는 서울여자대학교 소프트웨어융합학과에서 개발 경험을 함께 쌓아가며,
            문제를 정의하는 데서 출발해, 기획과 개발을 하나의 흐름으로 이어 나가고자 하는 대학생입니다.
          </p>

          <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
            프로젝트를 참여하고 주도하며, 기획–PM–백엔드 개발까지 폭넓은 역할을 경험했습니다.
            AI를 활용한 생산성/교육 도구에 관심이 많으며, 사용자에게 진짜 필요한 도구를 만드는 데 집중하고자 합니다.
          </p>

          <p style={{ lineHeight: "1.6" }}>
            저는 단순히 기술을 익히는 것을 넘어,
            팀워크와 소통을 중시하며 프로젝트를 성공으로 이끄는 과정에 집중합니다.
            앞으로도 다양한 도전을 통해 개발자로서 성장하며, 의미 있는 가치를 창출하는 데 기여하고 싶습니다.
          </p>
        </div>
      </div>
    </div>
  );
}