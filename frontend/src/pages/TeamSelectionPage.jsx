import { useState, useRef, useEffect } from 'react';
import { RotatingCard } from '../components/RotatingCard';
import { useNavigate } from 'react-router-dom';
import '../style/teamSelectionPage.css';

export function TeamSelectionPage() {
  const navigate = useNavigate();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [closestIndex, setClosestIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const satellitesRef = useRef(null);

  const handleMouseDown = (event) => {
    if (expanded) return;
    setIsDragging(true);
    setStartX(event.clientX);
    satellitesRef.current.style.transition = 'none'; // Disable transition for smooth dragging
  };

  const handleMouseMove = (event) => {
    if (!isDragging || expanded) return;
    const dx = event.clientX - startX;
    const rotationY = currentRotation + dx * 0.3; // Adjust rotation speed as needed
    satellitesRef.current.style.transform = `rotateY(${rotationY}deg)`;
  };

  const handleMouseUp = (event) => {
    if (!isDragging || expanded) return;
    setIsDragging(false);
    const dx = event.clientX - startX;
    const newRotation = currentRotation + dx * 0.3;
    const snappedRotation = Math.round(newRotation / 120) * 120; // Snap to the nearest 120 degrees
    satellitesRef.current.style.transition = 'transform 0.5s ease'; // Enable transition for smooth snapping
    satellitesRef.current.style.transform = `rotateY(${snappedRotation}deg)`;
    setCurrentRotation(snappedRotation);
    console.log(closestIndex)
  };

  const handleTouchStart = (event) => {
    if (expanded) return;
    setIsDragging(true);
    setStartX(event.touches[0].clientX);
    satellitesRef.current.style.transition = 'none'; // Disable transition for smooth dragging
  };

  const handleTouchMove = (event) => {
    if (!isDragging || expanded) return;
    const dx = event.touches[0].clientX - startX;
    const rotationY = currentRotation + dx * 0.05; // Adjust rotation speed as needed
    satellitesRef.current.style.transform = `rotateY(${rotationY}deg)`;
  };

  const handleTouchEnd = (event) => {
    if (!isDragging || expanded) return;
    setIsDragging(false);
    const dx = event.changedTouches[0].clientX - startX;
    const newRotation = currentRotation + dx * 0.5;
    const snappedRotation = Math.round(newRotation / 120) * 120; // Snap to the nearest 120 degrees
    satellitesRef.current.style.transition = 'transform 0.5s ease'; // Enable transition for smooth snapping
    satellitesRef.current.style.transform = `rotateY(${snappedRotation}deg)`;
    setCurrentRotation(snappedRotation);
  };

  useEffect(() => {
    // Calculate the closest index based on currentRotation
    const rotation = currentRotation % 360;
    if (Math.round(rotation % 120) !== 0) return; // Skip if the rotation is already snapped
    const index = Math.round(-rotation / 120) % 3;
    setClosestIndex((index + 3) % 3); // Ensure index is positive
  }, [currentRotation]);

  const handleCardClick = (index) => {
    if (expanded) return;
    if (closestIndex !== index) return;
    setSelectedIndex(index);
    setExpanded(true);

  };

  return (
    <div 
      className="satellites" 
      ref={satellitesRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
    >
      <RotatingCard 
        i={0} 
        text="학술팀" 
        onClick={() => handleCardClick(0)} 
        isFront={closestIndex === 0} 
        isExpanded={expanded && selectedIndex === 0}
        isDisappear={expanded && selectedIndex !== 0}
      />
      <RotatingCard 
        i={120} 
        text="미디어팀" 
        onClick={() => handleCardClick(1)} 
        isFront={closestIndex === 1} 
        isExpanded={expanded && selectedIndex === 1}
        isDisappear={expanded && selectedIndex !== 1}
      />
      <RotatingCard 
        i={240} 
        text="디자인팀" 
        onClick={() => handleCardClick(2)} 
        isFront={closestIndex === 2} 
        isExpanded={expanded && selectedIndex === 2}

        isDisappear={expanded && selectedIndex !== 2}
      />
    </div>
  );
}