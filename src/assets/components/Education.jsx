import { motion } from "framer-motion";
function Education() {
    const publications = [
        {
        year:"2024",

        title:
        "PeriksAksara: Web-based Indonesian Spelling and Punctuation Correction Using Jaro-Winkler Distance Algorithm Based on KBBI",

        published:
        "2024 9th International Conference on Information Technology and Digital Applications (ICITDA)",

        link:
        "https://ieeexplore.ieee.org/abstract/document/10809924"

        },

        {
        year:"2024",

        title:
        "Efikasi Diri Siswa SDN Caringin Nunggal: Meningkatkan Kesiapan Menghadapi ANBK Melalui Pelatihan Berbasis Komputer",

        published:
        "Jurnal Bakti Masyarakat Indonesia 7(3), 2024, pp. 587-595",

        link:
        "https://journal.untar.ac.id/index.php/baktimas/article/download/32690/19567"

        },
    ];

    return (
        <section id="education" className=" bg-white py-24 px-6 " >
            {/* TITLE */}
            <motion.div
                initial={{
                    opacity:0,
                    y:-40
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:0.7
                }}

                viewport={{
                    once:false,
                    amount:0.3
                }}

                className=" text-center mb-14 "
                >

                <h2 className=" text-5xl font-bold text-gray-800 " > Education </h2>
                <div className=" w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full " ></div>
            </motion.div>

            <div className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 " >

                {/* ================= EDUCATION ================= */}

                <motion.div

                    initial={{
                        opacity:0,
                        x:-80
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.8
                    }}

                    viewport={{
                        once:false,
                        amount:0.3
                    }}
                >
                    <h3 className=" text-3xl font-bold text-gray-800 mb-6 " > Education </h3>
                    <div className=" bg-gray-200/60 backdrop-blur-md rounded-3xl shadow-xl p-10 ">
                        <h4 className=" text-2xl font-bold text-gray-800 " > Tarumanagara University</h4>
                        <p className=" mt-3 text-gray-600 " > Faculty of Information Technology </p>
                        <p className=" text-gray-600 " > Informatics Engineering </p>

                        <div className=" mt-6 space-y-2 text-gray-700 " >
                            <p>
                                <span className="font-semibold">
                                    Period:
                                </span>
                                {" "}
                                2022 - 2026
                            </p>
                            <p> 
                                <span className="font-semibold"> Degree: </span>
                                {" "}
                                Bachelor of Informatics Engineering
                            </p>
                            <p>
                                <span className="font-semibold"> GPA:</span>
                                {" "}
                                3.78 / 4.00
                            </p>
                        </div>
                        <a href="/documents/TranskripEng_535220176.pdf"
                            target="_blank"
                            className=" inline-block mt-8 px-6 py-3 rounded-full bg-teal-700 text-white font-semibold hover:bg-teal-600 transition ">
                            View Transcript
                        </a>
                    </div>
                </motion.div>

                {/* ================= PUBLICATION ================= */}

                <motion.div
                    initial={{
                        opacity:0,
                        x:80
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.8
                    }}

                    viewport={{
                        once:false,
                        amount:0.3
                    }}
                    >

                    <h3 className=" text-3xl font-bold text-gray-800 mb-6 "> Publications </h3>
                    <div className=" relative " >

                    {/* Timeline */}

                    <div className=" absolute left-3 top-0 h-full w-1 bg-teal-500 "></div>
                        {
                            publications.map((item,index)=>(
                                <motion.div

                                    key={index}

                                    initial={{
                                        opacity:0,
                                        y:30
                                    }}

                                    whileInView={{
                                        opacity:1,
                                        y:0
                                    }}

                                    transition={{
                                        duration:0.5,
                                        delay:index*0.15
                                    }}

                                    viewport={{
                                        once:false,
                                        amount:0.2
                                    }}

                                    className=" relative pl-10 mb-5 "
                                >
                                    {/* DOT */}

                                    <div className=" absolute left-0 top-3 w-6 h-6 rounded-full bg-teal-600 border-4 border-white shadow "></div>
                                    <div className=" bg-gray-100 rounded-2xl shadow-md p-4 ">
                                        <p className=" text-teal-700 font-bold text-lg ">
                                            {item.year}
                                        </p>

                                        <h4 className=" mt-2 text-sm font-semibold text-gray-800 leading-snug ">
                                            {item.title}
                                        </h4>

                                        <p className=" mt-2 text-xs text-gray-600 leading-relaxed ">
                                            <span className="font-semibold"> Published in: </span> <br/>
                                            {item.published}
                                        </p>

                                        <a href={item.link} target="_blank" className=" inline-block mt-3 text-sm text-teal-700 font-semibold hover:underline ">
                                            Read Publication 
                                        </a>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Education;