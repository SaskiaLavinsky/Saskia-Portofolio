import { motion } from "framer-motion";


function SplashScreen(){

    const panels = [
        "left",
        "right",
        "left",
        "right",
        "left"
    ];

    return (
        <motion.section
            id="splash-screen"
            initial={{
                y:0
            }}

            animate={{
                y:"-100%"
            }}

            transition={{
                duration:0.5,
                delay:1.8,
                ease:"easeInOut"
            }}

            className=" fixed inset-0 z-9999 overflow-hidden ">

            {/* BACKGROUND */}

            <div className=" absolute inset-0 bg-linear-to-br from-[#053242] via-[#9edfdf] to-white "></div>

            {/* PANEL OPENING */}

            {
                panels.map((direction,index)=>(
                    <motion.div
                        key={index}
                        initial={{
                            x:0
                        }}

                        animate={{
                            x:
                            direction==="left"
                            ?
                            "-100%"
                            :
                            "100%"
                        }}

                        transition={{
                            duration:1,
                            delay:index*0.08,
                            ease:"easeInOut"
                        }}

                        className=" absolute left-0 w-full h-[20vh] bg-white z-20 "
                        style={{
                            top:`${index*20}%`
                        }}
                    >
                    </motion.div>
                ))
            }
            {/* TEXT */}
            <motion.div
                initial={{
                    opacity:0,
                    y:40
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:0.8,
                    delay:0.6,
                    ease:"easeOut"
                }}

                className=" absolute inset-0 z-30 flex flex-col items-center justify-center text-white ">
                <h1 className=" text-5xl md:text-7xl font-black tracking-[10px] drop-shadow-xl "> WELCOME </h1>             
                <h2 className=" mt-4 text-sm md:text-xl tracking-[6px] " > TO MY PORTFOLIO </h2>
            </motion.div>
        </motion.section>
    )
}
export default SplashScreen;