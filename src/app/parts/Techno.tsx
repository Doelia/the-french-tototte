import {tartuffo} from "@/fonts/fonts";
import Link from "next/link";
import SimpleButton from "@/app/components/SimpleButton";

export default function Techno({podsRef}) {

    function btnDecouvrir() {
        podsRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <div className={"bg-gradient-to-t from-bg2 from-20% to-bg3"}>
            <div className="container mx-auto max-w-2xl pt-20 px-5">
                <div className={"grid md:grid-cols-2 mb-8"}>
                    <h2 className={"text-6xl text-fg1 " + tartuffo.className}>technologie plug'n'tote</h2>
                </div>
                <div className={"grid md:grid-cols-2 gap-5 md:gap-10 mb-20"}>
                    <div className={"text-fg3"}>
                        La tototte est équipée de la <strong className={"text-fg1"}>technologie plug'n'tote</strong>, permettant de changer de plug à volonté,
                        offrant ainsi un accès à une <strong className={"text-fg1"}>gamme infinie de saveurs de suçotage</strong> pour satisfaire tous les goûts.
                    </div>
                    <div className={"text-fg3"}>
                        Cette technologie vous permet de changer en un clin d’œil de saveur pour <strong className={"text-fg1"}>voyager du bout des lèvres</strong>.
                    </div>
                </div>
                <div className={"text-center mb-5"}>
                    <SimpleButton onClick={btnDecouvrir} title={"Découvrir les saveurs"}></SimpleButton>
                </div>
                <div className={"mx-auto h-[200px] w-[1px] bg-gradient-to-b from-fg2 to-transparent"}></div>
            </div>
        </div>
    )
}
