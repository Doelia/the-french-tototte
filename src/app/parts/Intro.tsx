import {tartuffo} from "@/fonts/fonts";
import {useIsReached} from "@/app/useIsReached";
import {useRef} from "react";

export default function Intro({refFirstScreenTrigger}) {

    const textAnimated = "" +
        "absolute inset-0 " +
        "transition-all duration-[3s] bg-no-repeat text-transparent bg-clip-text " +
        "bg-[url('/Colors.png')] bg-[top_-100px_left_-500%] " +
        "group-hover:bg-[top_-100px_left_500%]" +
        ""
    ;

    return (
        <div className={"group h-screen flex items-end justify-center"}>
            <div className={"relative w-full"}>
                <div className={"bg-gradient-to-t from-bg2 from-50% to-transparent absolute w-full h-full z-20"}></div>
                <div className={"text-center flex flex-col items-center max-w-2xl px-10 relative mx-auto z-30"}>
                    <h1 className={"lowercase md:text-3xl text-2xl mb-3 text-fg2 " + tartuffo.className} ref={refFirstScreenTrigger}>The french tototte</h1>
                    <img className={"mb-8"} src={"/france.svg"} width={24} height={6} alt={"France"} />
                    <div className={"relative mb-16"}>
                        <h2 className={"lowercase text-5xl md:text-7xl text-fg2 " + tartuffo.className}>Pour ceux qui osent etre differents</h2>
                        <h2 className={"lowercase text-5xl md:text-7xl text-fg2 " + tartuffo.className + " " + textAnimated}>Pour ceux qui osent etre differents</h2>
                    </div>
                    <div className={"lowercase mb-8 text-fg2"}>Découvrir</div>
                </div>
                <div className={"relative h-10"}>
                    <div className={"h-[150px] w-[1px] bg-gradient-to-b from-fg2 to-transparent absolute left-1/2 z-40"}></div>
                </div>
            </div>
        </div>
    )
}
