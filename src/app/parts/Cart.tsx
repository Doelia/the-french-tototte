import {tartuffo} from "@/fonts/fonts";
import React, {useEffect} from "react";
import Button from "@/app/components/Button";

import {useTextAnimated} from "@/app/useTextAnimated";

export default function Cart({pack, ornement, finition}) {

    const totottePrice = 99;

    let finitionName = '';
    if (finition === '1') {
        finitionName = 'Finition or';
    } else {
        finitionName = 'Finition argent';
    }

    let ornementName = '';
    if (ornement === '2') {
        ornementName = 'Ornement Obsidiennes';
    } else {
        ornementName = 'Ornement Saphir Royal';
    }

    let packPrice = 0;
    let packName = 'Pack starter';
    if (pack === '2') {
        packPrice = 29;
        packName = 'Pack Suçoteur';
    }
    if (pack === '3') {
        packPrice = 49;
        packName = 'Pack Suçoteur Pro';
    }

    const totalPrice = totottePrice + packPrice;

    const totalPriceRef = React.useRef(null);
    useTextAnimated(totalPriceRef, totalPrice.toFixed(2) + ' €');

    const finitonNameRef = React.useRef(null);
    useTextAnimated(finitonNameRef, '+ ' + finitionName);

    const ornementNameRef = React.useRef(null);
    useTextAnimated(ornementNameRef, '+ ' + ornementName);

    const packNameRef = React.useRef(null);
    useTextAnimated(packNameRef, '1x ' + packName);

    const packPriceRef = React.useRef(null);
    useTextAnimated(packPriceRef, packPrice.toFixed(2) + ' €');

    return (
        <div className={"relative bg-fg1 text-white"}>
            <div className="container mx-auto max-w-7xl px-5 flex flex-col md:flex-row justify-end">
                <div className={"md:w-1/2 xl:w-4/12 px-5 pt-10"}>
                    <div className={"lowercase mb-3 text-4xl " + tartuffo.className}>
                        Votre panier est prêt
                    </div>
                    <p className={"text-sm text-fg3 mb-5"}>
                        Récapitulatif de votre commande
                    </p>
                    <div className={"flex flex-col gap-3 mb-8"}>
                        <div className={"flex justify-between text-bg3"}>
                            <div>
                                <div>1 x thefrenchtototte</div>
                                <div className={"ms-2"} ref={finitonNameRef}></div>
                                <div className={"ms-2"} ref={ornementNameRef}></div>
                            </div>
                            <div>
                                { totottePrice.toFixed(2) } €
                            </div>
                        </div>
                        <div className={"flex justify-between text-bg3"}>
                            <div ref={packNameRef}></div>
                            <div ref={packPriceRef}></div>
                        </div>
                        <div className={"flex justify-between text-bg3"}>
                            <div>Livraison</div>
                            <div>Offerte</div>
                        </div>
                        <div className={"flex justify-between text-bg3"}>
                            <div>Prix</div>
                            <div ref={totalPriceRef}></div>
                        </div>
                    </div>

                    {/*<div className={"mt-8 mb-10"}>*/}
                    {/*    <div className={"flex justify-between text-bg3"}>*/}
                    {/*        <div>Retrait en magasin</div>*/}
                    {/*        <div></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <Button title={"Ajouter au panier"} className={"w-full mb-5"} />

                    <p className={"text-fg3 text-xs"}>
                        The French Tototte est couverte par une garantie limitée contre les défauts de fabrication pour une période de 2 mois à compter de la date d'achat. Cette garantie ne couvre pas les dommages causés par une mauvaise utilisation, une négligence ou une modification non autorisée du produit. Dans les limites permises par la loi, thefrenchtototte décline toute responsabilité pour les dommages directs, indirects, spéciaux, accidentels ou consécutifs découlant de l'utilisation ou de l'incapacité d'utiliser thefrenchtototte, même si thefrenchtototte a été informée de la possibilité de tels dommages.
                    </p>

                    <div className={"h-[150px]"}></div>
                </div>
            </div>
        </div>
    )
}
