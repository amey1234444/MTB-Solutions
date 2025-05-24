// import { features } from "../constants";
// import styles, { layout } from "../style";
// import Button from "./Button";

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div className={`flex flex-col md:flex-row w-full md:w-[45%] lg:w-[30%] p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
//     {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-blue-400 sm:flex sm:center`}>
//       <img src={icon} alt
//       ="star" className="w-[50%] h-[50%] object-contain" />
//     </div> */}
//     <div className="flex justify-center items-center">
//     <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-blue-400">
//   <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" /> 
//    </div>

//     </div>
    

//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );

// const Business = () =>  (
//   <section id="features" className={`${layout.section}`}>
//     {/* <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         You do the business, <br className="sm:block hidden" /> we’ll handle
//         the money.
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         With the right credit card, you can improve your financial life by
//         building credit, earning rewards and saving money. But with hundreds
//         of credit cards on the market.
//       </p>

//       <Button styles={`mt-10`} />
//     </div> */}

//     <div className={`${layout.sectionImg} flex flex-row flex-wrap`}>
//       {features.map((feature, index) => (
//         <FeatureCard key={feature.id} {...feature} index={index} />
//       ))}
//     </div>
//   </section>
// );

// export default Business;

// import { features } from "../constants";
// import styles, { layout } from "../style";
// import Button from "./Button";
// import { motion } from "framer-motion";

// // Motion variant for staggered card animation
// const cardVariants = {
//   hover: {
//     scale: 1.05, // Scale slightly when hovered
//     transition: {
//       duration: 0.3,
//       type: "spring",
//     },
//   },
// };

// const iconVariants = {
//   hover: {
//     rotate: 360, // Rotate the icon when hovered
//     scale: 1.2,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut",
//     },
//   },
// };

// const staggerContainer = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.2, // Stagger animation by 0.2 seconds
//     },
//   },
// };

// const FeatureCard = ({ icon, title, content, index }) => (
//   <motion.div
//     className={`flex flex-col md:flex-row w-full md:w-[45%] lg:w-[30%] p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
//     variants={cardVariants}
//     whileHover="hover"
//   >
//     <motion.div className="flex justify-center items-center">
//       <motion.div
//         className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-blue-400"
//         variants={iconVariants}
//       >
//         <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//       </motion.div>
//     </motion.div>

//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </motion.div>
// );

// const Business = () => (
//   <motion.section
//     id="features"
//     className={`${layout.section}`}
//     variants={staggerContainer}
//     initial="initial"
//     animate="animate"
//   >
//     <div className={`${layout.sectionImg} flex flex-row flex-wrap`}>
//       {features.map((feature, index) => (
//         <FeatureCard key={feature.id} {...feature} index={index} />
//       ))}
//     </div>
//   </motion.section>
// );

// export default Business;


import { useEffect, useRef } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon, title, content, index }) => {
  const cardRef = useRef(null); // Reference to the card element

  // GSAP animation to trigger when scrolling
  useEffect(() => {
    const element = cardRef.current;
    gsap.fromTo(
      element,
      {
        opacity: 0, // Initial state
        y: 50, // Move slightly down
      },
      {
        opacity: 1, // Final state
        y: 0, // Move to original position
        duration: 1.2, // Duration of animation
        scrollTrigger: {
          trigger: element, // Trigger animation when this element is in view
          start: "top 80%", // Start animation when the top of the element is 90% from the top of the viewport
          end: "top 60%", // End animation when the element is 70% from the top
          scrub:"true",
          toggleActions: "play none none reverse", // Play the animation on scroll and reverse when scrolling back
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef} // Reference the card for GSAP animations
      className={`flex flex-col md:flex-row w-full md:w-[45%] lg:w-[30%] p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-blue-400">
          <img
            src={icon}
            alt="star"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionImg} flex flex-row flex-wrap`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;

