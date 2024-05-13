import {tartuffo} from "@/fonts/fonts";

export default function Bluetooth() {
    return (
        <div className="group relative container mx-auto max-w-4xl pt-20 px-5">

            <div className={"md:w-2/6 mb-20"}>
                <div className={"text-6xl text-fg1 mb-5 " + tartuffo.className}>suçotez sans soucis</div>
                <div className={"text-fg3"}>
                    La tototte offre une <strong className={"font-bold text-fg1"}>autonomie impressionnante</strong> de 50 heures de suçotage grâce à sa batterie au lithium,
                    assurant ainsi des <strong className={"font-bold text-fg1"}>heures de plaisir</strong> ininterrompu pour encore plus de confort et de tranquillité.
                </div>
            </div>

            <div>
                <img src="/bluetooth.webp" width={600} alt="" className={"mx-auto duration-1000 transition -rotate-45 group-hover:-rotate-12 scale-50 md:scale-100"}/>
            </div>

            <div className={"flex justify-end mt-10"}>
                <div className={"md:w-3/12"}>
                    <div className={"text-6xl text-fg1 mb-5 font-bold"}>50h</div>
                    <div className="text-fg3 mb-10">
                        de suçotage Bluetooth sans interruption
                    </div>
                    <div className={"text-fg3"}>
                        Grâce aux  <strong className={"font-bold text-fg1"}>technologies sans contact</strong> profitez d’une recharge rapide sur son socle à induction.
                    </div>
                </div>
            </div>

        </div>
    )
}
