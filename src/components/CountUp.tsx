import { useEffect, useState } from "react";

import { useInView } from "../hooks/useInView";

type Props = {
  /** "−45%", "10.7%", "+38" 처럼 앞뒤 기호가 붙은 숫자 문자열 */
  value: string;
  duration?: number;
};

const NUMBER = /^(\D*)([\d.,]+)(.*)$/;

// 화면에 들어오면 0부터 목표 숫자까지 올라간다. 기호와 소수 자릿수는 그대로 둔다.
export default function CountUp({ value, duration = 1100 }: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.6);
  const match = value.match(NUMBER);
  const target = match ? Number(match[2].replace(/,/g, "")) : 0;
  const decimals = match?.[2].split(".")[1]?.length ?? 0;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    // 움직임 줄이기 설정이면 첫 프레임에 바로 목표값을 보여준다
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 0 : duration;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = total === 0 ? 1 : Math.min((now - start) / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, duration]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} aria-label={value}>
      {match[1]}
      {current.toFixed(decimals)}
      {match[3]}
    </span>
  );
}
