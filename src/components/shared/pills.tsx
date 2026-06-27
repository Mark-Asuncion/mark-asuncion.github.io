interface PillProps extends React.HTMLProps<HTMLDivElement> {
};

export default function Pill(props: PillProps) {
    const colors = [
        "bg-lime-600",
        "bg-green-600",
        "bg-cyan-600",
        "bg-sky-600",
        "bg-purple-600",
        "bg-violet-600",
        "bg-yellow-600",
        "bg-amber-600",
        "bg-orange-600",
        "bg-red-600"
    ]
    let colorIndex = 0;
    if (typeof props.children === "string") {
        colorIndex = props.children.charCodeAt(0) % colors.length;
    }
    return <div {...props} className={`rounded-full flex items-center px-4 py-1 ${colors[colorIndex]} ` + (props.className || "") }>
    </div>
}
