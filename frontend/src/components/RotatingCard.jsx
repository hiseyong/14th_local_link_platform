export function RotatingCard(props) {
    return (
        <div className="satellite" style={{ '--i': props.i }}>{props.text}</div>
    )
}