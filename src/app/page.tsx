import Bento from "@/app/parts/Bento";
import Intro from "@/app/parts/Intro";
import Header from "@/app/parts/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
        <div className={"absolute h-screen w-full z-10"}>
            <video src="https://framerusercontent.com/assets/OyaZIWy09WQG65KyxheDyjLJw.mp4" className={"absolute object-cover h-full w-full opacity-70"} loop={true} autoPlay={true} muted={true}></video>
        </div>
        <Header></Header>
        <Intro></Intro>
        <div className={"h-[200px]"}></div>
        <Bento></Bento>
        <div className={"h-[200px]"}></div>
        <div className={"bg-fg1 p-5"}>
            <div className={"flex gap-5 justify-center text-fg3"}>
                <div className={"text-fg3 italic"}>
                    Projet original par <Link href="https://www.youtube.com/watch?v=FVEqE47pOLw&ab_channel=BastiUi">BastiUi</Link>
                </div>
                <span>|</span>
                <div className={"text-fg3 italic"}>
                    Dev. par  <Link href="https://stephanewouters.fr">Stéphane Wouters</Link>
                </div>
                <span>|</span>
                <div className={"text-fg3 italic"}>
                    <Link href="https://github.com/Doelia/the-french-tototte">Github</Link>
                </div>
            </div>
        </div>
    </main>
  );
}

