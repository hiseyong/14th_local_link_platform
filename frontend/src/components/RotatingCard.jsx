export function RotatingCard({ i, text, onClick, isFront, isExpanded, isDisappear, style }) {
  return (
    <div 
      className={`satellite ${isFront ? 'front' : ''} ${isExpanded ? 'expand' : ''} ${isDisappear ? 'disappear' : ''}`} 
      style={style}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
