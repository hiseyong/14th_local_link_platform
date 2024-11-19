import { useState } from "react";
import { Greeting } from "./pages/Greeting"; // Greeting 컴포넌트 임포트
import { Selection } from "./pages/Selection";

function App() {
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0); // translateX 상태 관리
  const [isSwiped, setIsSwiped] = useState(false); // 스와이프 여부 상태
  const [opacity, setOpacity] = useState(1); // opacity 상태

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // 터치 시작 위치
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    if (!isSwiped) {
      setTranslateX(deltaX); // 스와이프 중인 위치에 따라 translateX 값 설정
      setOpacity(1 - Math.abs(deltaX) / window.innerWidth); // 스와이프 진행에 따라 opacity 변경
    }
  };

  const handleTouchEnd = () => {
    if (translateX < -100) {
      setIsSwiped(true); // 왼쪽으로 충분히 스와이프한 경우
    } else {
      setTranslateX(0); // 스와이프가 충분하지 않으면 원래 위치로 되돌리기
      setOpacity(1); // opacity 원래대로
    }
  };

  const handleScroll = (e) => {
    const deltaScroll = e.deltaY;

    if (!isSwiped && deltaScroll > 0) {
      setIsSwiped(true); // 스크롤로 스와이프 발생
    } else if (isSwiped && deltaScroll < 0) {
      setIsSwiped(false); // 스크롤로 다시 원래 상태로
    }
  };

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleScroll}
    >
      {/* Greeting */}
      <Greeting translateX={isSwiped ? '-100%' : 0} opacity={opacity} />

      {/* Example */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: `translateX(${isSwiped ? "0" : "100%"}) scale(${isSwiped ? 1 : 0.8})`,
          opacity: `${isSwiped ? 1 : 0}`,
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out, scale 0.3s ease-in-out",
          backgroundColor: "#e0e0e0",
          zIndex: 0,
        }}
      >
        <Selection />
      </div>
    </div>
  );
}

export default App;