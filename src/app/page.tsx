'use client'

import Bento from "@/app/parts/Bento";
import Intro from "@/app/parts/Intro";
import Header from "@/app/parts/Header";
import Link from "next/link";
import {useRef, useState} from "react";
import {useIsReached} from "@/app/useIsReached";
import Footer from "@/app/parts/Footer";
import Techno from "@/app/parts/Techno";
import Pods from "@/app/parts/Pods";

export default function Home() {

    const refFirstScreenTrigger = useRef();
    const fullHeaderMode = useIsReached(refFirstScreenTrigger);

  return (
    <main className="relative">
        <div className={"absolute h-screen w-full z-10"}>
            <video src="https://framerusercontent.com/assets/OyaZIWy09WQG65KyxheDyjLJw.mp4"
                   className={"absolute object-cover h-full w-full opacity-70"}
                   loop={true} autoPlay={true} muted={true} controls={false} playsInline={true}

            ></video>
        </div>
        <Header fullHeaderMode={fullHeaderMode}></Header>
        <Intro refFirstScreenTrigger={refFirstScreenTrigger}></Intro>
        <div className={"h-[200px]"}></div>
        <Bento></Bento>
        <div className={"h-[200px]"}></div>
        <Techno></Techno>
        <Pods></Pods>
        <div className={"h-[200px]"}></div>
        <Footer />
    </main>
  );
}

