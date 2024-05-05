import {tartuffo} from "@/fonts/fonts";
import {useRef} from "react";
import {useIsReached} from "@/app/useIsReached";
import {useIsVisible} from "@/app/useIsVisible";

export default function Clients() {

    const bagheraRef = useRef(null);
    const bagreraIsReached = useIsVisible(bagheraRef);

    const revealAnimation = "transition duration-300 transform "
        + (bagreraIsReached ? "translate-x-0" : "translate-y-20")
        + " "
        + (bagreraIsReached ? "opacity-100" : "opacity-0")

    return (
        <div className={"bg-gradient-to-b from-bg2 to-bg4"}>
            <div className="container mx-auto max-w-md px-5 text-center mb-5">
                <div className={"mb-5 text-6xl text-fg1  " + tartuffo.className}>ils ont sucotes,<br/>ils ont adore</div>
                <div className={"text-fg3 text-sm"}>Nos totottes sont utilisées par les plus grands de ce monde et si vous voulez mon avis ce n’est pas un hasard</div>
            </div>
            <div className="container mx-auto max-w-3xl pt-20 px-5">
                <div className={"flex gap-20 flex-col md:flex-row items-center md:items-start"}>
                    <div className={"md:mt-20 md:w-1/3 w-1/2 delay-50 " + revealAnimation} ref={bagheraRef}>
                        <img src="/clients/baghera.webp" alt="" className={"rounded-full mb-5"}/>
                        <div className={"text-xl text-fg1 " + tartuffo.className}>/Baghera Jones</div>
                        <div className="flex items-center">
                            <img src="/icons/twitch.svg" width="12" height="12" alt="" className={"me-1 pt-2"}/>
                            <div className={"text-md text-fg1 mt-2 "}>
                                Streamer
                            </div>
                        </div>
                        <div className={"text-fg3 text-sm mt-5"}>
                            J’ai arrêté de vape depuis que j’ai découvert <span className={"text-fg1 " + tartuffo.className}>the french tototte</span>.
                        </div>
                    </div>
                    <div className={"md:mt-40 md:w-1/3 w-1/2 delay-25 " + revealAnimation}>
                        <img src="/clients/jdg.webp" alt="" className={"rounded-full mb-5"}/>
                        <div className={"text-xl text-fg1 " + tartuffo.className}>/Joueur_du_Grenier</div>
                        <div className="flex items-center">
                            <img src="/icons/twitch.svg" width="12" height="12" alt="" className={"me-1 pt-2"}/>
                            <div className={"text-md text-fg1 mt-2 "}>
                                Youtubeur
                            </div>
                        </div>
                        <div className={"text-fg3 text-sm mt-5"}>
                            J’ai commandé un pack pour toute la famille et même mon fils Légolas San Goku adore sa <span className={"text-fg1 " + tartuffo.className}>the french tototte</span>.
                        </div>
                    </div>
                    <div className={"md:w-1/3 w-1/2 " + revealAnimation}>
                        <img src="/clients/etoiles.webp" alt="" className={"rounded-full mb-5"}/>
                        <div className={"text-xl text-fg1 " + tartuffo.className}>/Etoiles</div>
                        <div className="flex items-center">
                            <img src="/icons/twitch.svg" width="12" height="12" alt="" className={"me-1 pt-2"}/>
                            <div className={"text-md text-fg1 mt-2 "}>
                                Streamer
                            </div>
                        </div>
                        <div className={"text-fg3 text-sm mt-5"}>
                            Grâce à  <span className={"text-fg1 " + tartuffo.className}>the french tototte</span>,
                            je régule mon taux d’insuline parfaitement et je n’achète plus de saumon ni de nutella !
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

