import React from "react";

interface CircleProps extends React.HTMLProps<HTMLDivElement> {
    color?: "red" | "blue" | "green" | "default"
    size?: 2 | 3 | 4
};

const colorMap = {
    red: "bg-red-700",
    blue: "bg-blue-700",
    green: "bg-green-700",
    default: "bg-gray-600"
}

const hoverMap = {
    red: "hover:bg-red-600",
    blue: "hover:bg-blue-600",
    green: "hover:bg-green-600",
    default: "hover:bg-gray-500"
}

const sizeMap = {
    [2]: "size-2",
    [3]: "size-3",
    [4]: "size-4"
}

export default function Circle({ color = "default", size = 2, ...p }: CircleProps) {
    return <div {...p} className={`rounded-full ${colorMap[color]} ${hoverMap[color]} ${sizeMap[size]}` + (p.className || "")}>
    </div>
}
