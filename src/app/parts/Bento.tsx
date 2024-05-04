import {tartuffo} from "@/fonts/fonts";

export default function Bento() {

    const padding = 5;

    const classTitle = "lowercase text-2xl md:text-3xl text-fg2 mb-2 " + tartuffo.className;
    const classText = "text-sm text-fg3";

    return (
        <div className="container max-w-[900px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                <div className={"md:row-span-2 rounded bg-gradient-to-b from-white to-bgblue min-h-[400px] md:min-h-[450px] relative"}>
                    <img src={"/bento/TransCote1.png"} width={230} height={285}  alt={""} className={"absolute top-10"}/>
                    <div className={"p-"+padding+" flex flex-col justify-end h-full relative"}>
                        <h3 className={classTitle}>Elegante et sophistiquee</h3>
                        <p className={classText}>Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et élégante.</p>
                    </div>
                </div>

                <div className="md:col-span-2 rounded bg-white min-h-[250px] flex items-center justify-between" style={{background: '#EEEEEE'}}>
                    <div className={"w-6/12"}>
                        <img src={"/bento/image14.png"} width={150} height={150}  alt={""} className={"me-10"}/>
                    </div>
                    <div className={"w-6/12 pe-" + padding}>
                        <h3 className={classTitle}>Personnalisable</h3>
                        <p className={classText}>Ornements et accessoires premium pour créer une vapoteuse unique qui reflète votre style personnel.</p>
                    </div>
                </div>

                <div className={"rounded bg-gradient-to-r from-bgblue via-white to-bgred min-h-[250px] relative"}>
                    <img src={"/bento/moustache.png"} width={200} height={52}  alt={""} className={"absolute my-10 m-auto left-0 right-0"}/>
                    <div className={"flex flex-col h-full justify-end p-" + padding + " relative text-center"}>
                        <h3 className={classTitle}>Made in france</h3>
                        <p className={classText}>Savoir-faire français pour une expérience de suçotage authentique et exceptionnelle.</p>
                    </div>
                </div>

                <div className={"rounded bg-gradient-to-b from-white from-50% to-bg3 min-h-[200px] w:min-h-[250px] relative"}>
                    <img src={"/bento/0115.png"} width={200} height={200}  alt={""} className={"absolute bottom-0 right-0"}/>
                    <div className={"relative flex flex-col h-full justify-start p-" + padding}>
                        <h3 className={classTitle}>Innovante</h3>
                        <p className={classText}>
                            Technologies de pointe offrant une expérience de suçotage révolutionnaire et inégalée.
                        </p>
                    </div>
                </div>

                <div className={"md:col-span-2 bg-bgblue rounded relative"}>
                    <img src={"/bento/ampoules.png"} width={400} height={200}  alt={""} className={"absolute bottom-0 right-0"}/>
                    <div className={"relative w-6/12 p-" + padding}>
                        <h3 className={classTitle}>Savoureuse</h3>
                        <p className={classText}>Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et immersive.</p>
                    </div>
                </div>

                <div className={"bg-bg3 rounded md:min-h-[250px]"}>
                    <div className={"h-full flex flex-col p-" + padding}>
                        <div className={"grow mb-5"}>
                            <img className={""} src={"/france.svg"} width={24} height={6} alt={"France"} />
                        </div>
                        <div>
                            <h3 className={classTitle}>Hebergement 100% français</h3>
                            <p className={classText}>Notre site web est hébergé en france grâce à notre partenaire o2switch.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
