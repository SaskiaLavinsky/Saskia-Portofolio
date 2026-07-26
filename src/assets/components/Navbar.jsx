import { useState,useEffect  } from "react";

function Navbar(){
    const [open, setOpen] = useState(false);
    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 900) {
        setOpen(false);
        }
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);
    return (
    <header>
        <nav className="
            fixed top-0 left-0 z-50 
            w-full h-20
            flex items-center justify-center
            px-16
            bg-white/85
            backdrop-blur-xl
            shadow-md
        ">

            <ul className="hidden min-[900px]:flex gap-12 list-none">

                <li>
                    <a href="#about"
                    className="text-black hover:text-teal-700">
                    About Me
                    </a>
                </li>

                <li>
                    <a href="#education"
                    className="text-black hover:text-teal-700">
                    Education
                    </a>
                </li>

                <li>
                    <a href="#experience"
                    className="text-black hover:text-teal-700">
                    Work Experience
                    </a>
                </li>

                <li>
                    <a href="#projects"
                    className="text-black hover:text-teal-700">
                    Project
                    </a>
                </li>

                <li>
                    <a href="#skills"
                    className="text-black hover:text-teal-700">
                    Skill
                    </a>
                </li>

                <li>
                    <a href="#contact"
                    className="text-black hover:text-teal-700">
                    Contact
                    </a>
                </li>
            </ul>

            <a
            href="/documents/CV_SASKIALAVINSKY.pdf"
            target="_blank"
            className="
            hidden min-[900px]:block
            ml-auto
            px-5 py-2
            rounded-full
            bg-teal-700
            text-white
            font-semibold
            hover:bg-teal-600
            "
            >
            Resume
            </a>

            <button
            onClick={()=>setOpen(!open)}
            className="min-[900px]:hidden ml-auto text-2xl"
            >
            {open ? "✕" : "☰"}
            </button>
        </nav>

        {
        open && (

        <div
        className="
        fixed
        top-20
        right-5
        z-60

        w-72
        bg-white/90
        backdrop-blur-xl
        rounded-xl
        shadow-lg
        p-5
        in-[900px]:hidden
        "
        >

        <ul className="space-y-4 text-center">

            <li>
            <a href="#about"
            onClick={() => setOpen(false)}>
            About Me
            </a>
            </li>

            <li>
            <a href="#education"
            onClick={() => setOpen(false)}>
            Education
            </a>
            </li>

            <li>
            <a href="#projects"
            onClick={() => setOpen(false)}>
            Projects
            </a>
            </li>

            <li>
            <a href="#contact"
            onClick={() => setOpen(false)}>
            Contact
            </a>
            </li>

            <li>
            <a 
            href="/documents/CV_SASKIALAVINSKY.pdf"
            target="_blank"
            className="
            block
            bg-teal-700
            text-white
            py-2
            rounded-full
            "
            >
            Resume
            </a>
            </li>


        </ul>

        </div>

        )
        }

    </header>

    )

}


export default Navbar;