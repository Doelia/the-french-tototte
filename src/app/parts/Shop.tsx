import {tartuffo} from "@/fonts/fonts";
import {useState} from "react";
import {Tooltip} from "flowbite-react";

export default function Shop({finition, setFinition, ornement, setOrnement, pack, setPack}) {

    if (finition === '1') {
        setOrnement('1');
    }

    return (
        <div>
            <div className={"mb-20"}>
                <div className={"lowercase mb-3 text-6xl text-fg1  " + tartuffo.className}>
                    Personnalisez votre tototte
                </div>
                <p className={"text-sm mb-20 text-fg3"}>
                    Vous allez créer la tototte idéale pour vous.
                    À chacun son expérience, à chacun sa tototte.
                </p>
            </div>

            <div className={"mb-20"}>
                <div className={"lowercase mb-2 text-4xl text-fg1  " + tartuffo.className}>
                    Finition
                </div>
                <p className={"text-sm text-fg3 mb-5"}>
                    Choisissez votre favorite
                </p>
                <div className={"flex gap-2"}>
                    <Checkbox disabled={false} currentValue={finition} value={"2"} setValue={setFinition} classNameBg={"bg-gradient-to-b from-[#DBF2FF] to-[#BFC7EE]"} id={"finition"} />
                    <Checkbox currentValue={finition} value={"1"} setValue={setFinition} classNameBg={"bg-gradient-to-b from-[#FFE7DB] to-[#EECDBF]"} id={"finition"} />
                    <Checkbox disabled={true} currentValue={finition} value={"3"} setValue={setFinition} classNameBg={"bg-gradient-to-b from-[#99969F] to-[#484848]"} id={"finition"} />
                    <Checkbox disabled={true} currentValue={finition} value={"4"} setValue={setFinition} classNameBg={"bg-gradient-to-b from-[#F6F6F6] to-[#D8D8D8]"} id={"finition"} />
                </div>
            </div>

            <div className={"mb-20"}>
                <div className={"lowercase mb-2 text-4xl text-fg1  " + tartuffo.className}>
                    ornement
                </div>
                <p className={"text-sm text-fg3 mb-5"}>
                    Choisissez votre pierre précieuse
                </p>
                <div className={"flex gap-2"}>
                    <Checkbox disabled={false} currentValue={ornement} value={"1"} setValue={setOrnement} classNameBg={"bg-[#017AD7]"} id={"ornement"}  />
                    <Checkbox disabled={finition !== '2'} currentValue={ornement} value={"2"} setValue={setOrnement} classNameBg={"bg-[#2C3C3A]"} id={"ornement"}  />
                    <Checkbox disabled={true} currentValue={ornement} value={"3"} setValue={setOrnement} classNameBg={"bg-[#35E1C2]"} id={"ornement"}  />
                    <Checkbox disabled={true} currentValue={ornement} value={"4"} setValue={setOrnement} classNameBg={"bg-[#FF5EAB]"} id={"ornement"}  />
                </div>
            </div>

            <div className={"mb-0"}>
                <div className={"lowercase mb-3 text-4xl text-fg1  " + tartuffo.className}>
                    pack saveur
                </div>
                <p className={"text-sm text-fg3 mb-5"}>
                    Choisissez votre pack de saveurs
                </p>
                <div className={"flex flex-col gap-1"}>
                    <PackDecouverte currentValue={pack} value={"1"} setValue={setPack} id={"pack"}>
                        <div className={"border peer-checked:border-fg1 border-transparent p-4 flex justify-between items-center"}>
                            <div>
                                <div className="text-md text-fg1 font-bold">Pack starter</div>
                                <div className="text-sm text-fg1">3 saveurs découvertes</div>
                            </div>
                            <div className={"text-sm text-fg2"}>Offert</div>
                        </div>
                    </PackDecouverte>
                    <PackDecouverte currentValue={pack} value={"2"} setValue={setPack} id={"pack"}>
                        <div className={"border peer-checked:border-fg1 border-transparent p-4 flex justify-between items-center"}>
                            <div>
                                <div className="text-md text-fg1 font-bold">Pack Suçoteur</div>
                                <div className="text-sm text-fg1">6 saveurs</div>
                            </div>
                            <div className={"text-sm text-fg2"}>29€</div>
                        </div>
                    </PackDecouverte>
                    <PackDecouverte currentValue={pack} value={"3"} setValue={setPack} id={"pack"}>
                        <div className={"border peer-checked:border-fg1 border-transparent p-4 flex justify-between items-center"}>
                            <div>
                                <div className="text-md text-fg1 font-bold">Pack Suçoteur Pro</div>
                                <div className="text-sm text-fg1">12 saveurs + 1 jus de Mynthos</div>
                            </div>
                            <div className={"text-sm text-fg2"}>
                                <span className="line-through me-2 opacity-75">60€</span>
                                <span>49€</span>
                            </div>
                        </div>
                    </PackDecouverte>

                </div>
            </div>


        </div>
    )
}

function Checkbox({classNameBg, id, value, currentValue, setValue, disabled = false}) {


    const content = (
        <div className={"shadow-inner border peer-checked:outline outline-fg1 outline-offset-2 p-3 rounded-full aspect-square h-[40px] " + classNameBg + (disabled ? ' opacity-25' : ' cursor-pointer')}></div>
    )

    return (
        <label className={""}>
            <input type="radio" name={id} className="peer hidden" checked={value === currentValue} onChange={() => !disabled && setValue(value)} />
            { disabled ?
                <Tooltip content={disabled ? 'Bientôt disponible' : null} >{content}</Tooltip>
                : content
            }
        </label>
    )
}

function PackDecouverte({children, id, value, currentValue, setValue}) {
    return (
        <label className={"group cursor-pointer hover:bg-white/50 transition duration-500"}>
            <input type="radio" name={id} className="peer hidden" checked={value === currentValue} onChange={() => setValue(value)} />
            { children }
        </label>
    )
}
