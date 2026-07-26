import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaWhatsapp,
    FaLinkedin
} from "react-icons/fa";

function Contact() {

    const contacts = [

        {
            name: "Email",
            icon: <FaEnvelope />,
            link: "mailto:saskialvnsky14@gmail.com",
            color: "group-hover:bg-red-500",
            iconColor: "text-red-500"
        },

        {
            name: "GitHub",
            icon: <FaGithub />,
            link: "https://github.com/SaskiaLavinsky",
            color: "group-hover:bg-black",
            iconColor: "text-gray-800"
        },

        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/saskialavinsky",
            color: "group-hover:bg-blue-600",
            iconColor: "text-blue-600"
        },

        {
            name: "WhatsApp",
            icon: <FaWhatsapp />,
            link: "https://wa.me/6285765024922",
            color: "group-hover:bg-green-500",
            iconColor: "text-green-500"
        },

        {
            name: "Instagram",
            icon: <FaInstagram />,
            link: "https://www.instagram.com/slavinskiaa/",
            color: "group-hover:bg-pink-500",
            iconColor: "text-pink-500"
        }

    ];

    return (

        <section id="contact" className="py-32 bg-teal-800">

            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    viewport={{
                        once: true
                    }}

                    className="text-center"

                >

                    <h2 className="text-5xl md:text-6xl font-black uppercase text-white">
                        Contact
                    </h2>

                    <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>

                    <p className="mt-6 text-teal-100 max-w-2xl mx-auto leading-8">
                        Feel free to connect with me through any of the platforms below.
                        I'm always open to discussing opportunities, collaborations,
                        or simply having a conversation about technology.
                    </p>

                </motion.div>



                {/* CONTACT CARD */}

                <div className="flex justify-center flex-wrap gap-8 mt-16">

                    {

                        contacts.map((item, index) => (

                            <motion.a

                                key={index}

                                href={item.link}

                                target="_blank"

                                rel="noopener noreferrer"

                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}

                                viewport={{
                                    once: true
                                }}

                                className="
                                group
                                w-40
                                h-40
                                bg-white
                                rounded-3xl
                                shadow-xl
                                border
                                border-white/20
                                flex
                                flex-col
                                items-center
                                justify-center
                                transition-all
                                duration-300
                                hover:-translate-y-3
                                hover:scale-105
                                hover:shadow-2xl
                                "

                            >

                                <div

                                    className={`
                                    w-20
                                    h-20
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    bg-gray-100
                                    shadow-md
                                    transition-all
                                    duration-300
                                    group-hover:scale-110
                                    ${item.color}
                                    `}

                                >

                                    <span

                                        className={`
                                        text-4xl
                                        transition-all
                                        duration-300
                                        ${item.iconColor}
                                        group-hover:text-white
                                        `}

                                    >

                                        {item.icon}

                                    </span>

                                </div>

                                <p className="mt-5 font-semibold text-gray-700 group-hover:text-teal-700 transition">
                                    {item.name}
                                </p>

                            </motion.a>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Contact;