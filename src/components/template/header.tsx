import Circle from "../ui/circle";

export default function Header()
{
    return <div className="flex gap-2 items-center h-10 p-2 mb-4 sticky top-0">
        <div>
            |
            <a href="#about" className="ml-2 hover:underline">About</a> |
            <a href="#contact" className="ml-2 hover:underline">Contact</a> |
        </div>
        <div className="mx-auto">
            {/* <p>Mark Asuncion</p> */}
        </div>
        {/* <div className="flex gap-2"> */}
        {/*     <Circle size={4} /> */}
        {/* </div> */}
    </div>
}
