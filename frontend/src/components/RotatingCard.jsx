export function RotatingCard({ i, text, onClick, isFront, isExpanded, isDisappear }) {
  return (
    <div 
      className={`satellite ${isFront ? 'front' : ''} ${isExpanded ? 'expand' : ''} ${isDisappear ? 'disappear' : ''}`} 
      style={{ '--i': i }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
