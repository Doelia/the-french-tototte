import {tartuffo} from "@/fonts/fonts";

export default function Bento() {

    const padding = 6;
    const animated = " transition-translate duration-500 ";

    const classTitle = "lowercase text-2xl md:text-3xl text-fg2 mb-2 " + tartuffo.className;
    const classText = "text-sm text-fg3";

    return (
        <div className="container max-w-[900px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                <div className={"group md:row-span-2 rounded bg-gradient-to-b from-white to-bgblue min-h-[400px] md:min-h-[450px] relative flex items-end" + animated}>
                    <img src={"/bento/TransCote1.png"} width={230}  alt={""}
                         className={"absolute top-10 origin-left group-hover:translate-y-2 group-hover:scale-110" + animated}
                    />
                    <div className={"p-"+padding+" relative"}>
                        <h3 className={classTitle}>Élégante et sophistiquée</h3>
                        <p className={classText}>Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et élégante.</p>
                    </div>
                </div>

                <div className="group md:col-span-2 rounded bg-white min-h-[250px] flex items-center justify-between" style={{background: '#EEEEEE'}}>
                    <div className={"w-5/12"}>
                        <img src={"/bento/image14.png"} width={150} alt={""}
                             className={"me-10 origin-left group-hover:scale-110" + animated}
                        />
                    </div>
                    <div className={"w-7/12 px-" + padding}>
                        <h3 className={classTitle}>Personnalisable</h3>
                        <p className={classText}>Ornements et accessoires premium pour créer une vapoteuse unique qui reflète votre style personnel.</p>
                    </div>
                </div>

                <div className={"group rounded bg-gradient-to-r from-bgblue via-white to-bgred min-h-[250px] relative flex items-end"}>
                    <div className={"rounded absolute inset-0 bg-gradient-to-r from-blue-500 via-white to-red-500 opacity-0 group-hover:opacity-25" + animated} />
                    <div className={"rounded absolute inset-0 bg-gradient-to-t from-white to-gray-300 from-50% opacity-0 group-hover:opacity-50" + animated} />
                    <img src={"/bento/moustache.png"} width={200} alt={""}
                         className={"absolute my-10 m-auto left-0 right-0 top-0 group-hover:-rotate-6 group-hover:scale-110" + animated}
                    />
                    <div className={"p-" + padding + " relative text-left"}>
                        <h3 className={classTitle}>Made in france</h3>
                        <p className={classText}>Savoir-faire francais pour une expérience de suçotage authentique et exceptionnelle.</p>
                    </div>
                </div>

                <div className={"group rounded bg-gradient-to-b from-white from-50% to-bg3 min-h-[200px] w:min-h-[250px] relative overflow-hidden"}>
                    <img src={"/bento/0115.png?v=2"} width={300} alt={""}
                         className={"absolute -bottom-12 -right-5 group-hover:-translate-y-6" + animated}
                    />
                    <div className={"relative flex flex-col h-full justify-start p-" + padding}>
                        <h3 className={classTitle}>Innovante</h3>
                        <p className={classText}>
                            Technologies de pointe offrant une expérience de suçotage révolutionnaire et inégalée.
                        </p>
                    </div>
                </div>

                <div className={"group md:col-span-2 bg-bgblue rounded relative overflow-hidden"}>
                    <img src={"/bento/ampoules.png"} width={450}  alt={""}
                         className={"absolute bottom-0 right-0 group-hover:translate-x-0 translate-x-20" + animated}
                    />
                    <div className={"relative w-6/12 p-" + padding}>
                        <h3 className={classTitle}>Savoureuse</h3>
                        <p className={classText}>Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et immersive.</p>
                    </div>
                </div>

                <div className={"group bg-bg3 hover:bg-white rounded md:min-h-[280px]" + animated}>
                    <div className={"h-full p-"+padding}>
                        <div className={"relative h-full flex items-end"}>
                            <img  src={"/france.svg"} alt={"France"}
                                  className={"absolute top-0 left-0 w-[25px] h-[10px] md:group-hover:h-[80px]" + animated}
                            />
                            <div className={"hidden md:block absolute transition-[opacity] duration-500 top-0 left-0 w-[25px] h-[80px] bg-gradient-to-b from-transparent to-white opacity-0 group-hover:opacity-100"}></div>
                            <div className={"mt-5 md:mt-0 relative"}>
                                <h3 className={classTitle}>Hébergement 100% français</h3>
                                <p className={classText}>Notre site web est hébergé en france grâce à notre partenaire o2switch.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
