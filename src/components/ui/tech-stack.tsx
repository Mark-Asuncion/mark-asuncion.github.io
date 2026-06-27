import Terminal from "../../icons/terminal.svg";
import Window from "../../icons/window.svg";
import ContentContainer from "../shared/content-container";
import Pill from "../shared/pills";

export default function TechStack() {
    return <ContentContainer id="techstack">
        <h1 className="text-5xl font-bold text-purple-400 mb-4 text-center">Tech Stack</h1>
        <div className="border border-solid border-neutral-700 mb-4">
            <div className="border-b border-b-solid border-inherit p-3 flex gap-2 items-center">
                <span><Window className="text-white" /></span> <h2 className="text-2xl">Frontend</h2>
            </div>
            <div className="p-4 flex gap-4">
                <Pill>React</Pill>
                <Pill>Typescript</Pill>
            </div>
        </div>

        <div className="border border-solid border-neutral-700 mb-4">
            <div className="border-b border-b-solid border-inherit p-3 flex gap-2 items-center">
                <span><Terminal className="text-white" /></span> <h2 className="text-2xl">Backend</h2>
            </div>
            <div className="p-4 flex gap-4">
                <Pill>...</Pill>
                <Pill>...</Pill>
            </div>
        </div>

        <div className="border border-solid border-neutral-700 mb-4">
            <div className="border-b border-b-solid border-inherit p-3 flex gap-2 items-center">
                <h2 className="text-2xl">DevOps</h2>
            </div>
            <div className="p-4 flex gap-4">
                <Pill>...</Pill>
                <Pill>...</Pill>
            </div>
        </div>
    </ContentContainer>
}
