import korelu from "../img/korelu.png";
function Projects() {
    const projects = [
        {
            title:"PeriksAksara Website",
            type:"Group Project",
            description:
            "A web-based Indonesian spell checker developed for the Natural Language Processing course to identify and correct spelling and punctuation errors.",
            skills:[
                "Python",
                "NLP",
                "Jaro-Winkler",
                "KBBI",
                "HTML",
                "CSS",
                "JavaScript"
            ],
            demo:"https://youtu.be/om-oTFkjD0M",
            thumbnail:"https://img.youtube.com/vi/om-oTFkjD0M/maxresdefault.jpg"
        },

        {
            title:"Jeunk Ula Website",
            type:"Group Project",
            description:
            "A web-based cake ordering platform featuring product browsing, product details, shopping cart, order management, user profiles, and an admin dashboard for managing products and transactions. The project also involved database management and system design documentation using UML diagrams.",
            skills:[
                "HTML",
                "CSS",
                "JavaScript",
                "PostgreSQL",
                "pgAdmin",
                "UML",
                "Jira"
            ],
            demo:"https://youtu.be/LfftPRig2x0",
            thumbnail:"https://img.youtube.com/vi/LfftPRig2x0/maxresdefault.jpg?updated=true"
        },

        {
            title:"Sehat Santai Website",
            type:"Collaboration Project",
            description:
            "A health information platform developed to support independent study participants by providing diabetes education and lifestyle management information.",
            skills:[
                "HTML",
                "CSS",
                "JavaScript",
                "UI Implementation"
            ],
            demo:"https://youtu.be/mGrr6aSolOs",
            thumbnail:"https://img.youtube.com/vi/mGrr6aSolOs/maxresdefault.jpg"
        },

        {
            title:"Raja Ampat Website",
            type:"Group Project",
            description:
            "A tourism information website providing destination details, travel information, activities, and visitor reviews.",
            skills:[
                "HTML",
                "CSS",
                "JavaScript"
            ],
            demo:"https://youtu.be/WORqDOMPF88",
            thumbnail: "https://img.youtube.com/vi/WORqDOMPF88/maxresdefault.jpg"
        },

        {
            title:"BLACKPINK Website",
            type:"Individual Project",
            description:
            "A fan-based website developed as an introduction to frontend development, featuring member profiles, discography, online shop, and reviews.",
            skills:[
                "HTML",
                "CSS",
                "JavaScript"
            ],
            demo:"https://youtu.be/yY_VMAB2LxA",
            thumbnail:"https://img.youtube.com/vi/yY_VMAB2LxA/maxresdefault.jpg"
        }

        ]

    return (

        <section id="projects" className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6 ">
                {/* TITLE */}

                <h2 className=" text-5xl font-bold text-center text-gray-800 " >
                    Projects
                </h2>

                <div className=" w-24 h-1 bg-teal-600 mx-auto mt-4 rounded-full " ></div>

                <p className=" text-center text-gray-500 mt-6 mb-16 " > Projects that reflect my learning journey, technical skills, and passion for building practical software solutions. </p>

                {/* FEATURED PROJECT */}

                <div
                    className=" bg-white rounded-3xl shadow-xl overflow-hidden " > <div className=" grid lg:grid-cols-2 " > 
                    {/*IMAGE */}
                    <div className="overflow-hidden">
                        <img
                            src={korelu}
                            alt="KoReLu Project"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 "></div>
                    </div>

                    {/* CONTENT */}

                    <div className=" p-10 flex flex-col justify-center ">
                        <span className=" w-fit bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold ">
                            Featured Project
                        </span>
                        <h3 className=" text-4xl font-bold mt-6 text-gray-800 ">
                            KORELU
                        </h3>
                        <p className=" mt-5  text-gray-600  leading-8  ">
                            Indonesian spell checker using SymSpell,  Jaro-Winkler Distance and IndoBERT with  context-aware correction.
                        </p>

                        <div className=" flex flex-wrap gap-3 mt-8 ">
                            { [
                                "Python",
                                "React",
                                "IndoBERT",
                                "SymSpell",
                                "Jaro-Winkler",
                                "Hugging Face",
                                "Vite",
                                "Vercel"
                                ].map((skill,index)=>(
                            <span key={index} className=" bg-gray-200 text-teal-600 px-4 py-2 rounded-full text-sm ">
                                {skill}
                            </span>
                            )) }
                        </div>

                        <div className="flex gap-4 mt-10">
                            <a
                                href="https://huggingface.co/spaces/slavinskiaa/Korelu-Backend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition cursor-pointer"
                            >
                                Hugging Face Space
                            </a>

                            <a
                                href="https://korelu-fe.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition cursor-pointer"
                            >
                                Live Demo
                            </a>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            Please ensure the{" "}
                            <span className="font-semibold text-teal-600">
                                Hugging Face Space
                            </span>{" "}
                            is running before accessing the demo. The{" "}
                            <span className="font-semibold text-teal-600">
                                backend
                            </span>{" "}
                            may require a few moments to initialize.
                        </p>
                    </div>
                </div>

                </div>

                {/* ACADEMIC PROJECT */}

                <h3 className="text-3xl font-bold text-center mt-28 text-gray-800">
                    Academic Projects
                </h3>

                <p className="text-center text-gray-500 mt-3 mb-12">
                    Academic projects developed through coursework, collaborations, and technical assignments to strengthen my web development and software engineering skills.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((item,index)=>(

                            <div key={index} className=" bg-white  rounded-2xl  shadow-lg  overflow-hidden  hover:-translate-y-2  transition " >

                                {/* VIDEO PREVIEW */}
                                <div className="h-48 bg-gray-100 relative overflow-hidden">

                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        {item.demo && (
                                            <a
                                                href={item.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                bg-white/90
                                                text-teal-700
                                                px-5
                                                py-2.5
                                                rounded-full
                                                font-semibold
                                                text-sm
                                                shadow-lg
                                                hover:bg-white
                                                hover:scale-105
                                                transition
                                                flex
                                                items-center
                                                gap-2
                                                "
                                            >
                                                Watch Demo
                                            </a>
                                        )}
                                    </div>

                                </div>

                                {/* CONTENT */}

                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-800">
                                        {item.title}
                                    </h4>

                                    <p className="text-teal-600 text-sm font-semibold mt-2">
                                        {item.type}
                                    </p>

                                    <p className="text-gray-500 text-sm mt-3 leading-6">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {
                                            item.skills.map((skill,i)=>(
                                                <span key={i} className=" bg-gray-200  text-gray-700  px-3  py-1  rounded-full  text-sm " >
                                                    {skill}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>

        </section>

    );
}

export default Projects;