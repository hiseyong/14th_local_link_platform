import React, { useState, useRef } from 'react';
import './general.css';
import { RotatingCard } from './components/RotatingCard';

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const satellitesRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    satellitesRef.current.style.transition = 'none'; // Disable transition for smooth dragging
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const dx = event.clientX - startX;
    const rotationY = currentRotation + dx * 0.05; // Adjust rotation speed as needed
    satellitesRef.current.style.transform = `rotateY(${rotationY}deg)`;
  };

  const handleMouseUp = (event) => {
    if (!isDragging) return;

    setIsDragging(false);
    const dx = event.clientX - startX;
    const newRotation = currentRotation + dx * 0.05;
    const snappedRotation = Math.round(newRotation / 120) * 120; // Snap to the nearest 120 degrees
    satellitesRef.current.style.transition = 'transform 0.5s ease'; // Enable transition for smooth snapping
    satellitesRef.current.style.transform = `rotateY(${snappedRotation}deg)`;
    setCurrentRotation(snappedRotation);
  };

  return (
    <div 
      className="satellites" 
      ref={satellitesRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
    >
      <RotatingCard i={0} text="개발팀" />
      <RotatingCard i={120} text="디자인팀" />
      <RotatingCard i={240} text="미디어팀" />
    </div>
  );
}

export default App;
