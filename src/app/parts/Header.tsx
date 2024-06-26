import Button from "@/app/components/Button";
import Link from "next/link";
import {tartuffo} from "@/fonts/fonts";

export default function Header({fullHeaderMode, shopRef}) {

    function btnShop() {
        shopRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <header className={"fixed w-full z-50"}>
            <div className={"pointer-events-none h-[200%] absolute inset-0 bg-gradient-to-b from-white to-transparent duration-300 " + (fullHeaderMode ? 'opacity-100' : 'opacity-0')}></div>
            <div className="relative container mx-auto">
                <div className={"px-5 pt-5 relative"}>
                    <div className={"pointers-event-none absolute text-center m-auto left-0 right-0 duration-300 opacity-0 " + (fullHeaderMode ? 'md:opacity-100' : 'md:opacity-0')}>
                        <button className={"lowercase text-2xl tracking-tight mb-3 text-fg2 " + tartuffo.className}> the french tototte </button>
                    </div>
                    <div className={"flex justify-between relative"}>
                        <Link href="/" scroll={true}>
                            <img src="/logo.svg" width={32} height={32} alt="Logo" />
                        </Link>
                        <Button title="Acheter" onClick={btnShop}></Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
