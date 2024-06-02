import {tartuffo} from "@/fonts/fonts";
import {useEffect, useRef} from "react";
import {useIsVisible} from "@/app/useIsVisible";

export default function Mynthos() {

    const refLueur = useRef(null);

    useEffect(() => {
        let i = setInterval(() => {
            refLueur.current.classList.toggle("top-full");
            refLueur.current.classList.toggle("left-full");
            refLueur.current.classList.toggle("top-[-100%]");
            refLueur.current.classList.toggle("left-[-100%]");
        }, 2500);
        return () => clearInterval(i);
    }, []);

    return (
        <div className={""}>
            <div className="group relative container mx-auto max-w-2xl pt-20 px-5">

                <div className={"flex flex-col md:flex-row gap-12 items-center"}>
                    <div className={"relative group md:w-1/2 text-5xl overflow-hidden"} style={{maskImage: 'url(/mynthos.webp)'}}>
                        <img src="/mynthos.webp" alt="" className={"transition"}/>
                        <img ref={refLueur} src={"/lueur.png"} alt="" className={"absolute top-full left-full w-full h-full transition-all mix-blend-overlay ease-in-out duration-[2500ms] "}/>
                    </div>
                    <div className={"md:w-1/2 text-fg3 text-sm"}>
                        <div className={"mb-3 text-6xl text-fg1  " + tartuffo.className}>le jus de mynthos</div>
                        <button disabled={true} className={"border border-fg2 px-2 py-1 text-fg2 mb-5 font-medium"}>Collaboration exclusive</button>
                        <div className={"mb-5 text-sm"}>
                            Découvrez l'exclusivité : la fusion inédite entre <strong className={"text-fg1 font-bold"}>Le Jus de Mynthos</strong> et <span className={"text-fg1 " + tartuffo.className}>the french tototte</span>®, offrant un goût rare et recherché.
                            Une collaboration qui révèle l'essence de l'excellence et de l'originalité,
                            à savourer sans plus attendre.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
