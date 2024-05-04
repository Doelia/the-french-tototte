import Button from "@/app/components/Button";
import Link from "next/link";

export default function Header() {

    return (
        <header className={"fixed w-full z-50"}>
            <div className="container mx-auto">
                <div className={"flex justify-between p-5"}>
                    <Link href="/">
                        <img src="/logo.svg" width={32} height={32} alt="Logo" />
                    </Link>
                    <Button title="Acheter"></Button>
                </div>
            </div>
        </header>
    )
}
