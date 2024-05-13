import {tartuffo} from "@/fonts/fonts";
import {useIsReached} from "@/app/useIsReached";
import {useEffect, useRef} from "react";
import Link from "next/link";
import SimpleButton from "@/app/components/SimpleButton";

export default function Intro({refFirstScreenTrigger, bentoRef}) {

    const refTitle = useRef(null);

    useEffect(() => {
        let i = setInterval(() => {
            refTitle.current.classList.toggle("bg-[top_-100px_left_500%]");
        }, 3000);
        return () => clearInterval(i);
    }, []);

    const textAnimated = "" +
        "absolute inset-0 " +
        "transition-all duration-[3s] bg-no-repeat text-transparent bg-clip-text " +
        "bg-[url('/Colors.png')] bg-[top_-100px_left_-500%] "
    ;

    function btnDecouvrir() {
        bentoRef.current.scrollIntoView({ behavior: "smooth"});
    }

    return (
        <div className={"h-screen flex items-end justify-center"}>
            <div className={"relative w-full"}>
                <div className={"bg-gradient-to-t from-bg2 from-50% to-transparent absolute w-full h-full z-20"}></div>
                <div className={"text-center flex flex-col items-center max-w-2xl px-10 relative mx-auto z-30"}>
                    <h1 className={"lowercase text-2xl tracking-tight mb-3 text-fg2 " + tartuffo.className} ref={refFirstScreenTrigger}>The french tototte</h1>
                    <img className={"mb-8"} src={"/france.svg"} width={24} height={6} alt={"France"} />
                    <div className={"group relative mb-8"}>
                        <h2 className={"lowercase text-5xl md:text-6xl text-fg2 tracking-tight " + tartuffo.className}>Pour ceux qui osent être différents</h2>
                        <h2 ref={refTitle} className={"lowercase text-5xl md:text-6xl text-fg2 tracking-tight " + tartuffo.className + " " + textAnimated}>Pour ceux qui osent être différents</h2>
                    </div>
                    <SimpleButton title={"Découvrir"} onClick={btnDecouvrir}></SimpleButton>
                </div>
                <div className={"relative h-10"}>
                    <div className={"h-[150px] w-[1px] bg-gradient-to-b from-fg2 to-transparent absolute left-1/2 z-40"}></div>
                </div>
            </div>
        </div>
    )
}
