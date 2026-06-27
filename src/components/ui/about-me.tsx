import Github from "../../icons/github.svg";
import Linkedin from "../../icons/linkedin.svg";
import ButtonLink from "../shared/button-link";
import ContentContainer from "../shared/content-container";

export default function AboutMe() {
    return <ContentContainer id="about" className="min-h-[calc(100dvh-var(--header-h))]">
        <div className="sm:flex sm:flex-col-reverse sm:px-3 justify-center md:grid md:grid-cols-2 min-h-[inherit]">
            <div className="flex flex-col justify-center">
                <div>
                    <p className="text-lg">Hi I am,</p>
                    <h3 className="text-4xl font-bold text-purple-400 mb-1">Mark Anthony Asuncion</h3>
                    <p className="text-3xl font-bold text-purple-400 mb-4">Software Developer</p>
                    <p className="text-lg">Full-stack web developer building scalable web applications with frontend, backend, and Linux-based deployment experience.</p>
                </div>
                <div className="flex mt-2 mx-auto gap-8">
                    <ButtonLink href="https://github.com/Mark-Asuncion" target="_blank" className="size-7"><Github className="text-white" /></ButtonLink>
                    <ButtonLink href="https://www.linkedin.com/in/mark-anthony-asuncion-6806142ba" target="_blank" className="size-7"><Linkedin className="text-white" /></ButtonLink>
                </div>
            </div>
            <div className="md:flex md:flex-col">
                <img src="/toga-pic.JPG" className="sm:h-[50dvh] md:h-[70dvh] m-auto border-neutral-950 border-2 border-solid" />
            </div>
        </div>
    </ContentContainer>
}
