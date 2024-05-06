import Button from "@/app/components/Button";
import Link from "next/link";
import {tartuffo} from "@/fonts/fonts";

export default function Header({fullHeaderMode, shopRef}) {

    function btnShop() {
        shopRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    return (
        <header className={"fixed w-full z-50 pb-10"}>
            <div className={"absolute inset-0 bg-gradient-to-b from-white to-transparent duration-300 " + (fullHeaderMode ? 'opacity-75' : 'opacity-0')}></div>
            <div className="relative container mx-auto">
                <div className={"p-5 relative"}>
                    <div className={"absolute text-center m-auto left-0 right-0 duration-300 opacity-0 " + (fullHeaderMode ? 'md:opacity-100' : 'md:opacity-0')}>
                        <span className={"lowercase md:text-3xl text-2xl mb-3 text-fg2 " + tartuffo.className}> the french tototte </span>
                    </div>
                    <div className={"flex justify-between relative"}>
                        <Link href="/" scroll={false}>
                            <img src="/logo.svg" width={32} height={32} alt="Logo" />
                        </Link>
                        <Button title="Acheter" onClick={btnShop}></Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
