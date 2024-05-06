import {tartuffo} from "@/fonts/fonts";
import React from "react";
import Button from "@/app/components/Button";

export default function Cart({pack}) {

    const totottePrice = 99;

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

    return (
        <div className={"relative bg-fg1 text-white"}>
            <div className="container mx-auto max-w-7xl px-5 flex flex-col md:flex-row justify-end">
                <div className={"md:w-1/2 xl:w-4/12 ps-5 pt-10"}>
                    <div className={"lowercase mb-3 text-4xl " + tartuffo.className}>
                        Votre pannier est pret
                    </div>
                    <p className={"text-sm text-fg3 mb-5"}>
                        Récapitulatif de votre commande
                    </p>
                    <div className={"flex flex-col gap-3"}>
                        <div className={"flex justify-between text-bg3"}>
                            <div>
                                <div>1 x thefrenchtototte</div>
                                <div className={"ms-2"}>+ Finition argent</div>
                                <div className={"ms-2"}>+ Ornement obsidiennes</div>
                            </div>
                            <div>
                                { totottePrice.toFixed(2) } €
                            </div>
                        </div>
                        <div className={"flex justify-between text-bg3"}>
                            <div>1 x {packName}</div>
                            <div> {packPrice.toFixed(2)} € </div>
                        </div>
                        <div className={"flex justify-between text-bg3"}>
                            <div>Livraison</div>
                            <div>Offerte</div>
                        </div>
                        <div className={"flex justify-between text-bg3"}>
                            <div>Prix</div>
                            <div>{totalPrice.toFixed(2)} €</div>
                        </div>
                    </div>

                    <div className={"mt-8 mb-10"}>
                        <div className={"flex justify-between text-bg3"}>
                            <div>Retrait en magasin</div>
                            <div></div>
                        </div>
                    </div>

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
