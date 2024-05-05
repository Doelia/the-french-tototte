import {tartuffo} from "@/fonts/fonts";

export default function Spotify() {

    return (
        <div className={"bg-gradient-to-b from-bg2 via-bg3 to-bg2"}>
            <div className="group relative container mx-auto max-w-2xl pt-20 px-5">

                <video src="https://framerusercontent.com/assets/1qe4OgqDKLaqjOgmqdYzP91V6c.mp4"
                       className={"rounded border border-fg1 mx-auto mb-10"}
                       loop={true} muted={true} playsInline={true} autoPlay={true}></video>

                <div className={"flex flex-col md:flex-row gap-10"}>
                    <div className={"md:w-1/2 text-6xl text-fg1  " + tartuffo.className}>sucotez vos titres preferes</div>
                    <div className={"md:w-1/2 text-fg3 text-sm"}>
                        <button className={"border border-fg2 p-3 text-fg2 mb-2"}>Spotify Connect</button>
                        <div className={"mb-5 text-xs"}>En partenariat exclusif avec Spotify</div>
                        <div>En connectant votre tototte à votre smartphone par la technologie bluetooth,
                        <strong className={"text-fg1"}> dégustez vos morceaux</strong> et vos vidéos préférées directement dans votre bouche</div>
                    </div>
                </div>
            </div>
        </div>
    )

}
