export default function Header()
{
    return <div className="flex gap-2 items-center p-4 px-8 mb-4 sticky top-0 bg-(--bg-color) h-(--header-h)">
        <div className="mx-auto flex gap-4">
            <a href="#about" className="ml-2 hover:underline">About me</a>
            <a href="#projects" className="ml-2 hover:underline">Projects</a>
            <a href="#contact" className="ml-2 hover:underline">Contact</a>
        </div>
    </div>
}
