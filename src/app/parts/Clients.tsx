import {tartuffo} from "@/fonts/fonts";
import {useRef} from "react";
import {useIsVisible} from "@/app/useIsVisible";

export default function Clients() {



    return (
        <div className={"bg-gradient-to-b from-bg2 to-bg4"}>
            <div className="container mx-auto max-w-md px-5 text-center mb-5">
                <div className={"mb-5 text-6xl text-fg1  " + tartuffo.className}>ils ont suçotés,<br/>ils ont adoré</div>
                <div className={"text-fg3 text-sm"}>Nos totottes sont utilisées par les plus grands de ce monde et si vous voulez mon avis ce n’est pas un hasard</div>
            </div>
            <div className="container mx-auto max-w-4xl pt-20 px-5">
                <div className={"flex gap-20 lg:gap-40 flex-col md:flex-row items-center md:items-start"}>
                    <Client className={"md:mt-20"}>
                        <img src="/clients/baghera.webp" alt="" className={"rounded-full mb-5 transition"}/>
                        <div className={"text-xl text-fg1 " + tartuffo.className}>/Baghera Jones</div>
                        <div className="flex items-center mt-2 gap-2">
                            <i aria-hidden className="fa-brands fa-twitch"></i>
                            <div className={"text-md text-fg1 "}>
                                Streamer
                            </div>
                        </div>
                        <div className={"text-fg3 text-sm mt-5"}>
                            J’ai arrêté de vape depuis que j’ai découvert <span className={"text-fg1 " + tartuffo.className}>the french tototte</span>.
                        </div>
                    </Client>
                    <Client className={"md:mt-40"}>
                        <img src="/clients/jdg.webp" alt="" className={"rounded-full mb-5 transition"}/>
                        <div className={"text-xl text-fg1 " + tartuffo.className}>/Joueur_du_Grenier</div>
                        <div className="flex items-center mt-2 gap-2">
                            <i aria-hidden className="fa-brands fa-youtube"></i>
                            <div className={"text-md text-fg1"}>
                                Youtubeur
                            </div>
                        </div>
                        <div className={"text-fg3 text-sm mt-5"}>
                            J’ai commandé un pack pour toute la famille et même mon fils Légolas San Goku adore sa <span className={"text-fg1 " + tartuffo.className}>the french tototte</span>.
                        </div>
                    </Client>
                    <Client className={""}>
                        <img src="/clients/etoiles.webp" alt="" className={"rounded-full mb-5 transition"}/>
                        <div className={"text-xl text-fg1 " + tartuffo.className}>/Etoiles</div>
                        <div className="flex items-center mt-2 gap-2">
                            <i aria-hidden className="fa-brands fa-twitch"></i>
                            <div className={"text-md text-fg1"}>
                                Streamer
                            </div>
                        </div>
                        <div className={"text-fg3 text-sm mt-5"}>
                            Grâce à  <span className={"text-fg1 " + tartuffo.className}>the french tototte</span>,
                            je régule mon taux d’insuline parfaitement et je n’achète plus de saumon ni de nutella !
                        </div>
                    </Client>
                </div>
            </div>
        </div>
    )
}

function Client({className, children}) {

    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const revealAnimation = "transition duration-500 transform "
        + (isVisible ? "translate-x-0" : "translate-y-20")
        + " "
        + (isVisible ? "opacity-100" : "opacity-0")

    return (
        <div className={className + " md:w-1/3 w-1/2 " + revealAnimation + " "} ref={ref}>
            {children}
        </div>

    )
}
