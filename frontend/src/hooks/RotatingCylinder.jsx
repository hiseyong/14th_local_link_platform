import { useState, useRef, useEffect } from 'react';
import { RotatingCard } from '../components/RotatingCard';
import { useNavigate } from 'react-router-dom';
import '../style/teamSelectionPage.css';

export function RotatingCylinder({items}) {
    const navigate = useNavigate();
    const length = items.length;
    const unitAngle = 360 / length;

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
        satellitesRef.current.style.transition = 'none';
    };

    const handleMouseMove = (event) => {
        if (!isDragging || expanded) return;
        const dx = event.clientX - startX;
        const rotationY = currentRotation + dx * 0.3;
        satellitesRef.current.style.transform = `rotateY(${rotationY}deg)`;
    };

    const handleMouseUp = (event) => {
        if (!isDragging || expanded) return;
        setIsDragging(false);
        const dx = event.clientX - startX;
        const newRotation = currentRotation + dx * 0.3;
        const snappedRotation = Math.round(newRotation / unitAngle) * unitAngle;
        satellitesRef.current.style.transition = 'transform 0.5s ease';
        satellitesRef.current.style.transform = `rotateY(${snappedRotation}deg)`;
        setCurrentRotation(snappedRotation);
    };

    const handleTouchStart = (event) => {
        if (expanded) return;
        setIsDragging(true);
        setStartX(event.touches[0].clientX);
        satellitesRef.current.style.transition = 'none';
    };

    const handleTouchMove = (event) => {
        if (!isDragging || expanded) return;
        const dx = event.touches[0].clientX - startX;
        const rotationY = currentRotation + dx * 0.05;
        satellitesRef.current.style.transform = `rotateY(${rotationY}deg)`;
    };

    const handleTouchEnd = (event) => {
        if (!isDragging || expanded) return;
        setIsDragging(false);
        const dx = event.changedTouches[0].clientX - startX;
        const newRotation = currentRotation + dx * 0.5;
        const snappedRotation = Math.round(newRotation / unitAngle) * unitAngle;
        satellitesRef.current.style.transition = 'transform 0.5s ease';
        satellitesRef.current.style.transform = `rotateY(${snappedRotation}deg)`;
        setCurrentRotation(snappedRotation);
    };

    useEffect(() => {
        const rotation = currentRotation % 360;
        if (Math.round(rotation % unitAngle) !== 0) return;
        const index = Math.round(-rotation / unitAngle) % length;
        setClosestIndex((index + length) % length);
    }, [currentRotation]);

    const handleCardClick = (index) => {
        const links = ['/academic/', '/media/', '/design/'];
        if (expanded) return;
        if (closestIndex !== index) return;
        setSelectedIndex(index);
        setExpanded(true);
        setTimeout(() => navigate(links[index]) , 800);
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
            onContextMenu={(e) => e.preventDefault()}
        >
            {items.map((item, index) => {
                return (
                    <RotatingCard 
                    key={index}
                    i={unitAngle * index}
                    text={item.text} 
                    onClick={() => handleCardClick(index)} 
                    isFront={closestIndex === index} 
                    isExpanded={expanded && selectedIndex === index}
                    isDisappear={expanded && selectedIndex !== index}
                    />
                );
            })}
        </div>
        
    );
}