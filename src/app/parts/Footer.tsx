import Link from "next/link";
import {tartuffo} from "@/fonts/fonts";

export default function Footer() {

    return (
        <div className={"bg-fg1 p-5"}>
            <img src="/logo_footer.svg" width={500} height={500} alt="" className={"absolute bottom-0 -left-[150px] z-40 opacity-50"}/>
            <div className={"relative container mx-auto max-w-7xl px-5 z-50"}>
                <div className={"flex flex-col md:flex-row md:gap-10 md:items-center"}>
                    <div className={"text-nowrap text-xl md:text-6xl text-fg3 " + tartuffo.className}>the french tototte</div>
                    <div className={"text-fg3 text-xs mt-3"}>
                        <div>
                            Copyright © 2024 TheFrenchTototte. Tous droits réservés
                            <span className={"text-fg2"}> — Utilisation des cookies — Mention légales. </span>
                        </div>
                        <div>
                            Sur une idée originale d’Antoine Daniel, concept art par Tera Silver, 3D par Aurélien Thomas, logo par Baloprisonnier, 3D print par Lunath, Dev web par Stéphane Wouters & Packaging par Illusion
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
