// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import software from "../assets/software.jpg";
// import styles, { layout } from "../style";

// gsap.registerPlugin(ScrollTrigger);

// const Billing = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const el = imageRef.current;

//     gsap.fromTo(
//       el,
//       { x: -500, opacity: 0 }, // Start off-screen to the left
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1.5,
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%", // When top of image hits 80% of the viewport
//           end: "top 20%",
//           toggleActions: "play reverse play reverse", // Smooth out when scrolling up/down
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section id="about" className={layout.sectionReverse}>
//       <div className={`${layout.sectionImgReverse} relative`} ref={imageRef}>
//         <img
//           src={software}
//           alt="software"
//           className="w-[100%] h-[100%] relative z-[5] rounded-md"
//         />

//         {/* gradient start */}
//         <div className="absolute z-[0] w-[50%] h-[50%] left-20 top-0 blue__gradient" />
//         <div className="absolute z-[0] w-[50%] h-[50%] left-4 bottom-0 blue__gradient" />
//         {/* gradient end */}
//       </div>

//       <div className={layout.sectionInfo}>
//         <h2 className={`${styles.heading2} max-w-md relative group`}>
//           About us
//           <span className="absolute bottom-0 left-0 right-0 bg-blue-500 h-1 transition-transform duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
//         </h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           At MTB Solutions, we are a passionate team of tech enthusiasts and problem solvers. Our mission is to empower businesses and individuals with state-of-the-art technology solutions that drive growth, enhance efficiency, and foster a connected world. We believe in harnessing the power of technology to create meaningful impact and deliver results that exceed expectations.
//         </p>

//         <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
//           {/* Add buttons or links here */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Billing;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import software from "../assets/software.jpg";
import styles, { layout } from "../style";

gsap.registerPlugin(ScrollTrigger);

const Billing = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null); // Reference for the content section

  useEffect(() => {
    const imageEl = imageRef.current;
    const contentEl = contentRef.current;

    // Animation for the image
    gsap.fromTo(
      imageEl,
      { x: -500, opacity: 0 }, // Start off-screen to the left
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageEl,
          start: "top 80%", // When top of image hits 80% of the viewport
          end: "top 20%",
          toggleActions: "play reverse play reverse", // Smooth out when scrolling up/down
          scrub: true,
        },
      }
    );

    // Animation for the content
    gsap.fromTo(
      contentEl,
      { x: 500, opacity: 0 }, // Start off-screen to the right
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: contentEl,
          start: "top 80%", // When top of content hits 80% of the viewport
          end: "top 20%",
          toggleActions: "play reverse play reverse", // Smooth out when scrolling up/down
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="about" className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} relative`} ref={imageRef}>
        {/* <img
          src={software}
          alt="software"
          className="w-[100%] h-[100%] relative z-[5] rounded-md"
        /> */}
        <img
          src={software}
          alt="software"
          className="w-[100%] h-[100%] relative z-[5] rounded-md border-none shadow-lg" // Ensure no border and subtle shadow
          // Optional: Apply clip path if needed
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[50%] h-[50%] left-20 top-0 blue__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] left-4 bottom-0 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo} ref={contentRef}>
        <h2 className={`${styles.heading2} max-w-md relative group`}>
          About us
          <span className="absolute bottom-0 left-0 right-0 bg-blue-500 h-1 transition-transform duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At MTB Solutions, we are a passionate team of tech enthusiasts and problem solvers. Our mission is to empower businesses and individuals with state-of-the-art technology solutions that drive growth, enhance efficiency, and foster a connected world. We believe in harnessing the power of technology to create meaningful impact and deliver results that exceed expectations.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          {/* Add buttons or links here */}
        </div>
        
      </div>
      <div className="absolute z-[0] w-[50%] h-[50%] left-20 top-0 blue__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] left-4 bottom-0 blue__gradient" />
    </section>
  );
};

export default Billing;
