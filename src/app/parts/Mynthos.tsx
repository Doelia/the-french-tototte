import {tartuffo} from "@/fonts/fonts";

export default function Mynthos() {

    return (
        <div className={""}>
            <div className="group relative container mx-auto max-w-2xl pt-20 px-5">

                <div className={"flex flex-col md:flex-row gap-12"}>
                    <div className={"md:w-1/2 text-5xl"}>
                        <img src="/mynthos.webp" alt="" className={"transition hover:skew-y-6"}/>
                    </div>
                    <div className={"md:w-1/2 text-fg3 text-sm"}>
                        <div className={"mb-3 text-6xl text-fg1  " + tartuffo.className}>le jus de mynthos</div>
                        <button className={"border border-fg2 p-2 text-fg2 mb-5"}>Collaboration exclusive</button>
                        <div className={"mb-5 text-sm"}>
                            Découvrez l'exclusivité : la fusion inédite entre <strong className={"text-fg1 text-bold"}>Le Jus de Mynthos</strong>
                            et <span className={"text-fg1 " + tartuffo.className}>the french tototte</span>®, offrant un goût rare et recherché.
                            Une collaboration qui révèle l'essence de l'excellence et de l'originalité,
                            à savourer sans plus attendre.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
