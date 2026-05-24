interface PromptProps extends React.HTMLProps<HTMLDivElement> {
    path?: string
}

export default function Prompt({ path = "~/", ...p }: PromptProps) {
    return <div className="my-2 inline mr-2">
        <span className="text-lime-400">{p.children}</span>
        <span className="ml-2">
            <span className="text-blue-400">git:(</span>
            <span className="text-red-400">master</span>
            <span className="text-blue-400">)</span>
        </span>
        <span className="ml-2">{path}</span>
    </div>
}
