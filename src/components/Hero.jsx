import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "../style";
import MTBSolutionsLOGO from "../assets/MTBNEWLOGO.png";
import companyReel from "../assets/companyReel.mp4"; // Ensure this points to your video file
import '../index.css'; // Include custom styles here

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showReel, setShowReel] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const textEnter = () => {
    setShowReel(true);
  };

  const textLeave = () => {
    setShowReel(false);
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} md:mt-8 mt-12 relative z-10`}
      style={{ overflow: "hidden" }}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
        {/* Spotlight effect */}
        {showReel && (
          <div className="absolute inset-0 z-0">
            <video
              src={companyReel}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              style={{
                clipPath: `circle(80px at ${mousePosition.x}px ${mousePosition.y}px)`, // Spotlight effect
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                mixBlendMode: "multiply", // Adjust blend mode here
              }}
            />
          </div>
        )}

        <motion.h1
  className="relative pt-9 flex-1 font-poppins font-semibold text-[52px] sm:text-[72px] text-white leading-[75px] sm:leading-[100px] mix-blend-difference"
  onMouseEnter={textEnter}
  onMouseLeave={textLeave}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <span className="text-gradient font-serif">MTB</span>{" "}
</motion.h1>

<motion.h1
  className="relative font-poppins font-semibold text-[52px] sm:text-[68px] text-white leading-[65px] sm:leading-[90px] transition-transform duration-500 ease-out transform hover:translate-x-2 mix-blend-difference"
  onMouseEnter={textEnter}
  onMouseLeave={textLeave}
  style={{ willChange: "transform" }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  Solutions
</motion.h1>


        <p className={`${styles.paragraph} max-w-[470px] mt-5 relative mix-blend-difference`}>
          Welcome to MTB Solutions, where innovation meets excellence. We are a dynamic startup dedicated to pushing the boundaries of technology and transforming ideas into reality.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={MTBSolutionsLOGO}
          alt="MTB Solutions Logo"
          className="w-[100%] h-[100%] relative z-[5] transition-transform duration-500 ease-out hover:scale-110 hover:shadow-bright-border"
        />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* Custom cursor */}
      <div
        className="cursor"
        style={{
          position: "fixed",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "2px solid white",
          pointerEvents: "none",
          mixBlendMode: "difference", // Keep this for the cursor
          transition: "transform 0.1s ease",
        }}
      />
    </section>
  );
};

export default Hero;




// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import styles from "../style";
// import MTBSolutionsLOGO from "../assets/MTBNEWLOGO.png";
// import '../index.css'; // Make sure this includes your cursor styles

// const Hero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVariant, setCursorVariant] = useState("default");

//   // Track mouse movement
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Cursor animation variants
//   const variants = {
//     default: {
//       x: mousePosition.x,
//       y: mousePosition.y,
//     },
//     text: {
//       height: 150,
//       width: 150,
//       x: mousePosition.x - 75, // center the circle
//       y: mousePosition.y - 75,
//       backgroundColor: "white",
//       mixBlendMode: "difference",
//     },
//   };

//   // Handlers for text hover effect
//   const textEnter = () => setCursorVariant("text");
//   const textLeave = () => setCursorVariant("default");

//   return (
//     <section
//       id="home"
//       className={`flex md:flex-row flex-col ${styles.paddingY} md:mt-8 mt-12 relative z-10`}
//       style={{ overflow: "hidden" }} // Corrected this line
//     >
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//         <div className="flex flex-row justify-between items-center w-full">
//           <motion.h1
//             className="pt-2 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
//             onMouseEnter={textEnter}
//             onMouseLeave={textLeave}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }} // Fades in over 1 second
//           >
//             <span className="text-gradient font-serif">MTB</span>{" "}
//           </motion.h1>
//         </div>

//         {/* Updated Solutions heading with custom cursor effect */}
//         <motion.h1
//           className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] transition-transform duration-500 ease-out transform hover:translate-x-2"
//           onMouseEnter={textEnter}
//           onMouseLeave={textLeave}
//           style={{ willChange: "transform" }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }} // Fades in after "MTB"
//         >
//           Solutions
//         </motion.h1>

//         {/* Corrected interpolation in className */}
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Welcome to MTB Solutions, where innovation meets excellence. We are a dynamic startup dedicated to pushing the boundaries of technology and transforming ideas into reality.
//         </p>
//       </div>

//       {/* Image section */}
//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img
//           src={MTBSolutionsLOGO}
//           alt="MTB Solutions Logo"
//           className="w-[100%] h-[100%] relative z-[5] transition-transform duration-500 ease-out hover:scale-110 hover:shadow-bright-border"
//         />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//       </div>

//       {/* Custom cursor with framer-motion */}
//       <motion.div
//         className="cursor"
//         variants={variants}
//         animate={cursorVariant}
//       />
//     </section>
//   );
// };

// export default Hero;





// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import styles from "../style";
// import MTBSolutionsLOGO from "../assets/MTBNEWLOGO.png";
// import '../index.css'; // Make sure this includes your cursor styles

// const Hero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x ,
//       y: mousePosition.y ,
//     },
//     text: {
//       height: 150,
//       width: 150,
//       x: mousePosition.x -100,
//       y: mousePosition.y -100,
//       backgroundColor: "white",
//       mixBlendMode: "difference",
//     },
//   };

//   const textEnter = () => setCursorVariant("text");
//   const textLeave = () => setCursorVariant("default");

//   return (
//     <section
//       id="home"
//       className={`flex md:flex-row flex-col ${styles.paddingY} md:mt-8 mt-12 relative z-10`}
//       style={{ overflow: "hidden" }}
//     >
//       <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="pt-2 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]" onMouseEnter={textEnter}
//           onMouseLeave={textLeave}>
//             <span className="text-gradient">MTB</span>{" "}
//           </h1>
//         </div>

//         {/* Updated Solutions heading with custom cursor effect */}
//         <h1
//           className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full transition-transform duration-500 ease-out transform hover:translate-x-2 will-change-transform"
//           onMouseEnter={textEnter}
//           onMouseLeave={textLeave}
//           style={{ willChange: "transform" }}
//         >
//           Solutions
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Welcome to MTB Solutions, where innovation meets excellence. We are a dynamic startup dedicated to pushing the boundaries of technology and transforming ideas into reality.
//         </p>
//       </div>

//       <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
//         <img
//           src={MTBSolutionsLOGO}
//           alt="MTB Solutions Logo"
//           className="w-[100%] h-[100%] relative z-[5] transition-transform duration-500 ease-out hover:scale-110 hover:shadow-bright-border"
//         />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//       </div>

//       <motion.div
//         className="cursor"
//         variants={variants}
//         animate={cursorVariant}
//       />
//     </section>
//   );
// };

// export default Hero;






