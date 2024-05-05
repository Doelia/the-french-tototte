export default function Button({title}) {

    return (
        <button className="group bg-primary text-white py-2 px-6 relative hover:bg-black transition duration-500">
            <BgAnimated/>
            <div className={"relative"}>
                {title}
            </div>
        </button>
    )

}

function BgAnimated() {

    return (
        <div className={"absolute inset-0"}>
            <div className={`
                absolute inset-0
                transition-all ease-in-out duration-[500ms] bg-no-repeat 
                bg-[url('/Colors.png')] bg-[top_-100px_right_-200px] bg-[length:200px_300px] 
                group-hover:bg-[top_-100px_left_-200px]
            `}></div>
        </div>
    )
}
