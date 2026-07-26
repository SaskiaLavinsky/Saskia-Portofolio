import { motion } from "framer-motion";


function Skills(){
    const skillData = [

    {
    title:"Web Development",
    skills:[
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Tailwind CSS"
    ]
    },


    {
    title:"Backend Development",
    skills:[
    "Laravel",
    "PHP",
    "MVC Architecture"
    ]
    },


    {
    title:"Programming Languages",
    skills:[
    "Python",
    "JavaScript",
    "Dart",
    "C++"
    ]
    },


    {
    title:"Database",
    skills:[
    "MySQL",
    "MongoDB",
    "Firebase",
    "Database Design"
    ]
    },


    {
    title:"AI & Data Processing",
    skills:[
    "Natural Language Processing",
    "IndoBERT",
    "SymSpell",
    "Jaro-Winkler Distance",
    "RapidMiner"
    ]
    },


    {
    title:"Development Tools",
    skills:[
    "Visual Studio Code",
    "GitHub",
    "DBeaver",
    "Laragon",
    "Google Colab"
    ]
    },


    {
    title:"UI/UX Design",
    skills:[
    "Figma",
    "Responsive Design"
    ]
    },


    {
    title:"Software Testing",
    skills:[
    "Manual Testing",
    "Quality Assurance",
    "Test Case Design",
    "Bug Reporting"
    ]
    },


    {
    title:"Soft Skills",
    skills:[
    "Communication",
    "Public Speaking",
    "Team Collaboration",
    "Problem Solving"
    ]
    },


    {
    title:"Languages",
    skills:[
    "Indonesian (Native)",
    "English (Intermediate)"
    ]
    }


    ];

    return(
        <section id="skills" className="py-32 bg-linear-to-b from-gray-50 via-gray-50  to-teal-800">
            <div className=" max-w-7xl mx-auto px-6 " >
                {/* TITLE */}
                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:0.8
                    }}

                    viewport={{
                        once:true
                    }}
                    >
                    <h2 className=" text-5xl md:text-6xl font-black text-center uppercase text-gray-800 "> Skills </h2>
                    <div className=" w-24 h-1 bg-teal-600 mt-4 rounded-full mx-auto" ></div>
                </motion.div>

                {/* SKILL GRID */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
                    {
                    skillData.map((category,index)=>(

                    <motion.div

                        key={index}

                        initial={{
                            opacity:0,
                            y:40
                        }}

                        whileInView={{
                            opacity:1,
                            y:0
                        }}

                        transition={{
                            duration:0.5,
                            delay:index*0.1
                        }}

                        viewport={{
                            once:true
                        }}

                        className=" group bg-linear-to-br from-teal-50 to-white rounded-3xl border border-teal-100 shadow-md hover:shadow-xl hover:border-teal-300 transition-all duration-300 p-7 hover:-translate-y-1 ">


                        {/* CATEGORY TITLE */}

                        <div className="flex items-center gap-4 mb-6">
                        <div  className=" w-11 h-11 rounded-2xl bg-teal-600 flex items-center justify-center text-white font-bold shadow-md group-hover:bg-teal-700 transition " > {index+1} </div>
                            <h3  className=" text-xl font-bold text-gray-800 group-hover:text-teal-700 transition " >     
                                {category.title} 
                            </h3>
                        </div>


                        {/* SKILL TAGS */}
                        <div className="flex flex-wrap gap-3">
                            { category.skills.map((skill,i)=>(
                                <span
                                    key={i}
                                    className=" px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:border-teal-300 hover:text-teal-700 transition duration-300 "
                                    > {skill}
                                </span>
                                ))
                            }
                        </div>
                        </motion.div>

                        ))
                        }

                    </div>
            </div>
        </section>
    );
}
export default Skills;