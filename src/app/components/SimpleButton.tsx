import Link from "next/link";

export default function SimpleButton({title, onClick}) {

    return (
        <button onClick={onClick} className={"lowercase mb-8 text-fg2 relative group font-medium"}>
            <div className={"absolute left-1/2 transform -translate-x-1/2 h-[1px] bg-fg1 -bottom-2 w-0 group-hover:w-full transition-[width] duration-300"}></div>
            {title}
        </button>
    )

}

