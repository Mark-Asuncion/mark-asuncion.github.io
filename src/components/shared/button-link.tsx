interface ButtonLinkProps extends React.HTMLProps<HTMLAnchorElement> {
}

export default function ButtonLink(props: ButtonLinkProps) {
    return <a {...props}
        className={"p-2 border-solid border-2 border-purple-500 bg-transparent hover:bg-purple-500 transition-all duration-100" + (props.className || "")}>
    </a>
}
