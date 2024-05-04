import {tartuffo} from "@/fonts/fonts";

export default function Intro() {
    return (
        <div className={"h-screen flex items-end justify-center"}>
            <div className={"relative w-full"}>
                <div className={"bg-gradient-to-t from-bg2 from-50% to-transparent absolute w-full h-full z-20"}></div>
                <div className={"text-center flex flex-col items-center max-w-2xl px-10 relative mx-auto z-30"}>
                    <h1 className={"lowercase md:text-3xl text-2xl mb-3 text-fg2 " + tartuffo.className}>The french tototte</h1>
                    <img className={"mb-8"} src={"/france.svg"} width={24} height={6} alt={"France"} />
                    <h2 className={"lowercase text-5xl md:text-7xl text-fg2 mb-16 " + tartuffo.className}>Pour ceux qui osent etre differents</h2>
                    <div className={"lowercase mb-8 text-fg2"}>Découvrir</div>
                </div>
                <div className={"relative h-10"}>
                    <div className={"h-[150px] w-[1px] bg-gradient-to-b from-fg2 to-transparent absolute left-1/2 z-40"}></div>
                </div>
            </div>
        </div>
    )
}
