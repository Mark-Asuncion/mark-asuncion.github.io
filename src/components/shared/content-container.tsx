interface ContentContainerProps extends React.HTMLProps<HTMLDivElement> {
}

export default function ContentContainer(props: ContentContainerProps) {
    return <div  {...props} className={"px-4 lg:px-16 " + (props.className || "")}>
    </div>
}
