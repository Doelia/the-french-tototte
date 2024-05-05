import Link from "next/link";

export default function Footer() {

    return (
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
    )
}
