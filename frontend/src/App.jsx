import { useState } from "react";
import { Greeting } from "./pages/Greeting";

function Example() {
  return <div style={{ padding: "20px" }}>Example Page</div>;
}

function App() {
  const [currentPage, setCurrentPage] = useState("Greeting"); // 현재 페이지 상태
  const [startX, setStartX] = useState(0); // 스와이프 시작 지점

  // 터치 시작
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // 시작 지점 기록
  };

  // 터치 이동
  const handleTouchMove = (e) => {
    const deltaX = e.touches[0].clientX - startX; // 이동 거리 계산
    if (deltaX < -150) {
      setCurrentPage("Example"); // 스와이프 이동 거리 조건 충족 시 페이지 변경
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        transform: currentPage === "Greeting" ? "translateX(0)" : "translateX(-100%)",
        display: "flex",
        width: "200%",
      }}
    >
      <div style={{ width: "50%", flexShrink: 0 }}>
        <Greeting />
      </div>
      <div style={{ width: "50%", flexShrink: 0 }}>
        <Example />
      </div>
    </div>
  );
}

export default App;