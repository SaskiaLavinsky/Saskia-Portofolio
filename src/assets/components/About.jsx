import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      {/* TITLE */}
      <motion.div
        className="text-center"
        initial={{
          opacity: 0,
          y: -30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
      >

        <h2 className="text-5xl font-bold text-gray-800">
          About Me
        </h2>

        {/* Line Animation */}
        <motion.div
          className="
            h-1
            bg-teal-500
            mx-auto
            mt-4
            rounded-full
          "
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 96,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
        />

      </motion.div>

      {/* CARD */}
      <motion.div
        className="
          max-w-5xl
          mx-auto
          mt-14
        "
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >

        <div className=" rounded-3xl bg-gray-200/60 backdrop-blur-md shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <p className=" text-lg leading-9 text-gray-700 text-justify ">
            I am a fresh graduate in Informatics Engineering from Tarumanagara University with a strong interest in software engineering, web development, and digital innovation. I have
            experience building web and mobile applications using technologies such as{" "}

          <span className="bg-yellow-100 px-2 py-1">
            PHP
          </span>
          ,{" "}

          <span className="bg-yellow-100 px-2 py-1">
            Laravel
          </span>
          ,{" "}

          <span className="bg-yellow-100 px-2 py-1">
            JavaScript
          </span>
          ,{" "}

          <span className="bg-yellow-100 px-2 py-1">
            Flutter
          </span>
          ,{" "}

          <span className="bg-yellow-100 px-2 py-1">
            Firebase
          </span>
          , and database management tools including {" "}

          <span className="bg-yellow-100 px-2 py-1">
            MySQL
          </span>
          and{" "}

          <span className="bg-yellow-100 px-2 py-1">
            DBeaver
          </span>
          .
            <br />
            <br />
            Beyond technical development, I have been involved in research, education, and technology-based community activities, which have strengthened my communication, collaboration, 
            and problem-solving skills. I am passionate about creating reliable, user-centered digital solutions and continuously expanding my technical expertise to contribute effectively in professional environments.
          </p>

        </div>

      </motion.div>


    </section>
  );
}


export default About;