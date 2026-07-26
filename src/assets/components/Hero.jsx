import photo from "../img/MRT01528.JPG";

function Hero() {
  return (
    <section id="hero" className=" relative h-[75vh] bg-cover bg-center bg-fixed "
      style={{
        backgroundImage: `url(${photo})`,
        backgroundPosition: "center 100%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative  z-10  flex  items-start  h-full  px-24  pt-36">
         <div className="max-w-3xl text-white">

          <h1 className="text-7xl font-bold leading-tight">
            Saskia <br />

            <span className="text-teal-400">
              Lavinsky
            </span>

          </h1>


          <h3 className="mt-8 text-2xl font-semibold">
            Faculty of Information Technology
          </h3>


          <p className="text-lg">
            Informatics Engineering
          </p>

        </div>

      </div>


      {/* Wave */}
      <div className=" absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="block  w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L10.4,224C20.9,224,42,224,63,234.7C83.5,245,104,267,125,245.3C146.1,224,167,160,188,160C208.7,160,230,224,250,256C271.3,288,292,288,313,266.7C333.9,245,355,203,376,176C396.5,149,417,139,438,138.7C459.1,139,480,149,501,154.7C521.7,160,543,160,563,170.7C584.3,181,605,203,626,224C647,245,668,267,689,277.3C709.6,288,730,288,751,282.7C772.2,277,793,267,814,245.3C834.8,224,856,192,877,154.7C897.4,117,918,75,939,64C960,53,981,75,1002,90.7C1022.6,107,1043,117,1064,138.7C1085.2,160,1106,192,1127,181.3C1147.8,171,1169,117,1190,106.7C1210.4,96,1231,128,1252,138.7C1273,149,1294,139,1315,144C1335.7,149,1357,171,1377,165.3C1398.3,160,1419,128,1430,112L1440,96L1440,320L0,320Z"
          />

        </svg>

      </div>


    </section>
  );
}

export default Hero;