import { motion } from "framer-motion";
import bgWork from "../img/work_experience.png";


function WorkExperience() {
    const experiences = [

    {
    title:"Fullstack Developer Intern",

    company:
    "Secretariat General of the House of Representatives of the Republic of Indonesia (DPR RI)",

    period:
    "February 2025 – August 2025",

    description:[
    "Developed web features for DigitAll and E-Wisma systems using Laravel MVC architecture.",
    "Developed and maintained CRUD functionality with Laravel while managing MySQL databases using DBeaver.",
    "Performed manual testing (QA/QC), identified bugs, and verified system functionality for the DPR RI Website and PARSA Chatbot.",
    "Developed responsive web interfaces using Laravel Blade, Bootstrap, JavaScript, HTML, and CSS."
    ],

    skills: [
    "Laravel",
    "PHP",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "Git",
    "DBeaver",
    "SDLC",
    "Manual Testing"
    ],

    certificate:
    "/documents/signed-202639-SERTIFIKAT_MAGANG_SASKIA_LAVINSKY.pdf"

    },


    {
    title:"Research Assistant",

    company:
    "Faculty of Information Technology - Tarumanagara University",

    period:
    "September 2024 – November 2025",

    description: [
    "Conducted research activities, including data collection and dataset preparation, to support educational AI projects.",
    "Led technical workshops for over 70 university students on RapidMiner and 50 elementary school teachers on Perplexity AI.",
    "Supported community service and research projects through budgeting, documentation, and project coordination.",
    "Contributed to research publications and AI-based educational initiatives in collaboration with faculty members."
    ],

    skills: [
    "Research",
    "Educational AI",
    "RapidMiner",
    "Perplexity AI",
    "Workshop Facilitation",
    "Project Coordination"
    ],

    certificate:null

    },


    {
    title:"Assistant Lecturer",

    company:
    "Faculty of Information Technology - Tarumanagara University",

    period:
    "August 2024 – December 2024",

    description:[

    "Delivered technical instruction and learning support for 190+ students in Front-End Development and Operating Systems courses.",
    "Assisted students through course discussions, technical troubleshooting, and practical assignments.",
    "Delivered hands-on instruction on Social Media Analysis using RapidMiner and Gephi for data processing and visualization."

    ],

    skills:[
    "Teaching",
    "Front-End Development",
    "Operating Systems",
    "RapidMiner",
    "Gephi",
    "Communication"
    ],

    certificate:
    "/documents/asdos.pdf"

    },


    {
    title:"Part-time Barista",

    company:
    "Flash Coffee Indonesia",

    period:
    "September 2025 – June 2026",

    description:[
    "Handled daily store operations, beverage preparation, and customer service while maintaining service quality in a fast-paced environment.",
    "Collaborated with team members to ensure efficient workflow, accurate order processing, and customer satisfaction.",
    "Developed communication, time management, and problem-solving skills through direct interaction with diverse customers."
    ],

    skills:[
    "Communication",
    "Customer Service",
    "Teamwork",
    "Time Management",
    "Problem Solving"
    ],

},

    ];
    return (
        <section id="experience" className=" relative min-h-screen overflow-hidden scroll-mt-20 pb-24 ">
            {/* BACKGROUND IMAGE */}
            <div className=" absolute inset-0 bg-cover bg-center bg-fixed z-0 "
                style={{
                backgroundImage:`url(${bgWork})`
                }}>
            </div>

            {/* WHITE WAVE */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className=" absolute top-0 left-0 w-full h-80 z-20 ">
                <path fill="#ffffff" d=" M0,0 H1440 V150 C1200,230 1000,250 800,180 C600,100 400,260 200,180 C100,140 50,130 0,160 Z "/>
            </svg>

            {/* CONTENT */}
            <div className=" relative z-30 ">
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
                        once:false
                    }}

                    className="absolute top-16 left-1/2 -translate-x-1/2 w-full z-50 text-center">

                    <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                        Work Experience
                    </h2>

                    <div className="w-24 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>

                </motion.div>

                {/* EXPERIENCE CARD */}
                <div className=" max-w-5xl mx-auto px-6 pt-64 space-y-8 ">
                    {
                        experiences.map((item,index)=>(
                            <motion.div
                                key={index}

                                initial={{
                                    opacity:0,
                                    y:60
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                transition={{
                                    duration:0.8,
                                    delay:index*0.15
                                }}

                                viewport={{
                                    once:false
                                }}

                                className=" bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-xl relative z-30 ">

                                <h3 className=" text-3xl font-bold text-gray-800 " > {item.title} </h3>
                                <p className=" mt-3 text-teal-600 font-semibold " > {item.company} </p>
                                <p className=" text-gray-500 mt-1 ">
                                    {item.period}
                                </p>
                                <ul className=" mt-6 space-y-3 text-gray-700 leading-7 list-disc pl-5 ">
                                    {
                                        item.description.map((desc,i)=>(
                                            <li key={i}>
                                            {desc}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className=" flex flex-wrap gap-3 mt-8 ">
                                    {
                                        item.skills.map((skill,i)=>(
                                            <span key={i} className=" bg-teal-600 text-white px-4 py-2 rounded-full text-sm " >
                                                {skill}
                                            </span>
                                        ))
                                    }
                                </div>
                                {
                                    item.certificate && (
                                        <a href={item.certificate} target="_blank" rel="noreferrer"
                                            className=" inline-flex mt-8 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition ">
                                            View Certificate
                                        </a>
                                    )
                                }
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default WorkExperience;