import { useState } from "react";
import { Greeting } from "./pages/Greeting";

function Example() {
  return <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>Example Page</div>;
}

function App() {
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isSwiped, setIsSwiped] = useState(false);

  const handleTouchStart = (e) => {
    console.log("Touch start detected"); // 디버깅 로그 추가
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    if (!isSwiped && deltaX < 0) {
      setTranslateX(deltaX);
    }
  };

  const handleTouchEnd = () => {
    if (translateX < -100) {
      setIsSwiped(true);
    } else {
      setTranslateX(0);
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
      onTouchStart={handleTouchStart} // 부모 컨테이너에 터치 이벤트 등록
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Greeting */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: `translateX(${isSwiped ? "-100%" : translateX}px)`,
          transition: isSwiped ? "transform 0.3s ease-in-out" : "none",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Greeting />
      </div>

      {/* Example */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: `translateX(${isSwiped ? "0" : "100%"})`,
          transition: "transform 0.3s ease-in-out",
          backgroundColor: "#e0e0e0",
        }}
      >
        <Example />
      </div>
    </div>
  );
}

export default App;