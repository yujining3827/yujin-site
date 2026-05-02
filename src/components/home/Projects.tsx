import { useState } from "react";

export default function Projects() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const items = [
    {
      title: "MOCA",
      desc: "멋쟁이사자처럼 중앙해커톤 2차 진출",
      date: "2025.07.21 ~ 2025.08.26",
    },
    {
      title: "GURU2 Android",
      desc: "서울여자대학교 SW 사관학교 수료 - 팀 우수상",
      date: "2025.07 한달간",
    },
    {
      title: "축제 사이트",
      desc: "서울여자대학교 2025년도 축제 사이트 제작",
      date: "2025.05 한달간",
    },
    {
      title: "Curio",
      desc: "프로젝트종합설계",
      date: "2025.03 ~ 2025.06",
    },
    {
      title: "i-gacha",
      desc: "멋쟁이사자처럼 운영진 사이드 프로젝트",
      date: "2025.03 한달간",
    },
    {
      title: "중앙운영단",
      desc: "멋쟁이사자처럼",
      date: "2024.01 ~ 2025.12",
    },
    {
      title: "백엔드 운영진",
      desc: "멋쟁이사자처럼 서울여자대학교",
      date: "2024.12 ~ 2025.12",
    },
    {
      title: "STACKPOT",
      desc: "UMC 7기 프로젝트",
      date: "2023.12 ~ 2025.02",
    },
    {
      title: "GURU1",
      desc: "Python/HTML 수료 - 개인상 수상",
      date: "2025.01 한달간",
    },
    {
      title: "UMC Study",
      desc: "Plan 파트 스터디",
      date: "2024.09 ~ 2024.12",
    },
    {
      title: "유락 인턴",
      desc: "정보보안 기업 인턴",
      date: "2024.09 ~ 2024.12",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "30px" }}>Timeline</h2>

      <div>
        {items.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              marginBottom: "20px",
              paddingLeft: "12px",
              borderLeft: "2px solid #eee",
              padding: "12px",
              transition: "background-color 0.2s ease",
              backgroundColor:
                hoverIndex === idx ? "#FFF6F5" : "transparent",
              borderRadius: "0px",
            }}
          >
            <div style={{ fontSize: "13px", color: "#888" }}>
              {item.date}
            </div>

            <div style={{ fontWeight: 600, marginTop: "4px" }}>
              {item.title}
            </div>

            <div style={{ fontSize: "14px", color: "#555" }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
