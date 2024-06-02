import {tartuffo} from "@/fonts/fonts";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

export default function Pods() {

    //  show 8 pods
    return (
        <>
            <div className="relative container mx-auto max-w-3xl pt-20 px-5 z-50">
                <div className={"grid grid-cols-4 md:grid-cols-8 gap-3"}>
                    <Pod num={0} title={"Fraise"} description={"Une fraise française cueilli dans nos chers régions dg"} direction={"left"}></Pod>
                    <Pod num={1} title={"Menthe"} description={"Pour une haleine fraiche avant vos réunions"} direction={"left"}></Pod>
                    <Pod num={2} title={"Bubble Gomme"} description={"Un goût sucré pour retourner en enfance"} direction={"right"}></Pod>
                    <Pod num={3} title={"Spicy"} description={"Pour ceux qui aiment vivre des nouvelles chose tout les jours"} direction={"right"}></Pod>
                    <Pod num={4} title={"Bacon"} description={"Un goût de porc pour honorer nos élevages made in france"} direction={"left"}></Pod>
                    <Pod num={5} title={"France"} description={"Suçotez la République avec cet étendar bleu blanc rouge"} direction={"left"}></Pod>
                    <Pod num={6} title={"Jus de Mynthos"} description={"Pofitez du gout concentré de la premiere traite du matin"} direction={"right"}></Pod>
                    <Pod num={7} title={"Montaza et Torez"} description={"Pour retrouver le goût d'un vin unique"} direction={"right"}></Pod>
                </div>
            </div>
            <div className={"relative container mx-auto max-w-4xl"}>
                <div className="absolute -translate-y-6 z-40 w-full">
                    <div className={"bg-gradient-to-b from-bg3 to-bg2 h-[50px] relative"}>
                        <div className={"absolute bg-gradient-to-r from-bg2 via-transparent to-bg2 inset-0"}></div>
                    </div>
                </div>
                <div className="block md:hidden absolute -translate-y-[170px] z-40 w-full">
                    <div className={"bg-gradient-to-b from-bg3 to-bg2 h-[50px] relative"}>
                        <div className={"absolute bg-gradient-to-r from-bg2 via-transparent to-bg2 inset-0"}></div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-xl pt-20 px-5 z-50">
                <div className={"flex gap-10 md:flex-row flex-col"}>
                    <div className={"flex gap-10"}>
                        <div>
                            <div className={"text-5xl font-bold mb-5 text-fg1"}>30</div>
                            <div className={"text-fg3 text-sm font-medium"}>Saveurs disponibles</div>
                        </div>
                        <div>
                            <div className={"text-5xl font-bold mb-5 text-fg1"}>11</div>
                            <div className={"text-fg3 text-sm font-medium"}>Vertues medicinales</div>
                        </div>
                    </div>
                    <div className={"text-fg3"}>
                        Laissez-vous tenter par les saveurs des différents plugs et <strong className={"text-fg1"}>decouvrez un monde de delices</strong> pour chaque envie.
                    </div>
                </div>
            </div>
        </>
    )
}

function Pod({num, title, description, direction}) {

    let classTooltip = "";
    let classArrow = "";

    if (num % 4 === 0) {
        classTooltip = " left-[30px] bottom-[200px]"
        classArrow = "left-[7px]"
    }

    if (num % 4 === 1)  {
        classTooltip = " left-[-60px] bottom-[200px]"
        classArrow = "left-[90px]"
    }

    if (num % 4 === 2) {
        classTooltip = " left-[-175px] bottom-[200px]"
        classArrow = "left-[185px] scale-x-[-1]"
    }

    if (num % 4 === 3) {
        classTooltip = " left-[-235px] bottom-[200px]"
        classArrow = "left-[240px] scale-x-[-1]"
    }


    return (
        <div className={"group relative"}>
            <img src={"/pods/Ombre.png"} width={60} className={"transition duration-300 scale-x-50 group-hover:scale-x-75 absolute bottom-[2px] blur-[2px]"}  alt={""}/>
            <img src={"/pods/IMAGE-" + num + ".png"} width={60} className={"relative transition duration-300 group-hover:-translate-y-14"}  alt={""}/>
            <div className={classTooltip + " absolute w-[300px] px-5 py-5  opacity-0 transition duration-300 group-hover:opacity-100 scale-0 group-hover:scale-100 bg-white border border-fg1 translate-y-48 group-hover:translate-y-0"}>
                <img src={"/pods/arrow.png"} width={22} className={"absolute bottom-[-34px] " + classArrow}  alt={""}/>
                <div className={"text-fg1 text-xl " + tartuffo.className}>{title}</div>
                <div className={"text-fg3"}>{description}</div>
            </div>
        </div>
    )
}
