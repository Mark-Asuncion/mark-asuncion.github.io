import ContentContainer from "../ui/content-container";
import Prompt from "../ui/prompt";

export default function Content() {
    return <ContentContainer>
        <div id="about">
            <div><Prompt>Website</Prompt><span>about-me</span></div>
        </div>
    </ContentContainer>
}
