'use client'

import Bento from "@/app/parts/Bento";
import Intro from "@/app/parts/Intro";
import Header from "@/app/parts/Header";
import Link from "next/link";
import React, {useRef, useState} from "react";
import {useIsReached} from "@/app/useIsReached";
import Footer from "@/app/parts/Footer";
import Techno from "@/app/parts/Techno";
import Pods from "@/app/parts/Pods";
import Bluetooth from "@/app/parts/Bluetooth";
import Spotify from "@/app/parts/Spotify";
import Mynthos from "@/app/parts/Mynthos";
import Clients from "@/app/parts/Clients";
import Shop from "@/app/parts/Shop";
import {Carousel} from "flowbite-react";
import {tartuffo} from "@/fonts/fonts";
import Cart from "@/app/parts/Cart";

export default function Home() {

    const refFirstScreenTrigger = useRef();
    const fullHeaderMode = useIsReached(refFirstScreenTrigger);

    const [finition, setFinition] = useState('2')
    const [ornement, setOrnement] = useState('1')
    const [pack, setPack] = useState('1');

    const shopRef = useRef();
    const bentoRef = useRef();
    const podsRef = useRef();

  return (
    <main className="relative">

        <div className={"absolute h-screen w-full z-10"}>
            <video src="https://framerusercontent.com/assets/OyaZIWy09WQG65KyxheDyjLJw.mp4"
                   className={"absolute object-cover h-full w-full opacity-70"}
                   loop={true} autoPlay={true} muted={true} controls={false} playsInline={true}

            ></video>
        </div>

        <Header fullHeaderMode={fullHeaderMode} shopRef={shopRef}></Header>

        <Intro refFirstScreenTrigger={refFirstScreenTrigger} bentoRef={bentoRef}></Intro>

        <div className={"relative z-40"}>

            <div className={"h-[200px]"} ref={bentoRef}></div>
            <Bento></Bento>

            <div className={"h-[300px]"}></div>
            <div className={"mx-auto relative container max-w-3xl h-3"}>
                <img src={"/technology.gif"} className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"} width={500} />
            </div>

            <Techno podsRef={podsRef}></Techno>

            <div ref={podsRef}></div>
            <Pods></Pods>
            <div className={"h-[200px]"}></div>

            <Bluetooth></Bluetooth>
            <div className={"h-[200px]"}></div>

            <Spotify />
            <div className={"h-[200px]"}></div>

            <Mynthos />
            <div className={"h-[200px]"}></div>

            <Clients></Clients>
            <div className={"h-[100px] bg-bg4"}></div>

            <div className={"relative bg-bg4"} ref={shopRef}>
                <div className="container mx-auto max-w-7xl pt-20 px-5 z-50 flex flex-col md:flex-row justify-end gap-12">
                    <div className={"grow z-40"}>
                        <div className={"sticky top-32"}>
                            <div className="w-100 aspect-video">
                                <Carousel draggable={false}>
                                    <img src={"/carousel/1-" + finition + '-' + ornement + '.png'} alt="..." />
                                    <img src={"/carousel/2-" + finition + '-' + ornement + '.png'} alt="..." />
                                    <img src={"/carousel/3-" + finition + '-' + ornement + '.png'} alt="..." />
                                </Carousel>
                            </div>
                        </div>
                        <div className={"grow"}></div>
                    </div>
                    <div className={"md:w-1/2 xl:w-4/12 z-30"}>
                        <Shop
                            finition={finition} setFinition={setFinition}
                            ornement={ornement} setOrnement={setOrnement}
                            pack={pack} setPack={setPack}
                        ></Shop>
                    </div>
                </div>
            </div>

            <div className={"h-[50px] bg-bg4"}></div>

            <Cart pack={pack} />

        </div>

        <Footer />
    </main>
  );
}

