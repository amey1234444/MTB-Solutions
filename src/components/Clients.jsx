import React from "react";
import { clients } from "../constants";
import styles from "../style";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} overflow-hidden w-full`}>
        <Marquee speed={50} pauseOnHover={true}>
          {/* Render client names for continuous loop effect */}
          {clients.map((client, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                fontSize: "32px",
                fontWeight: "bold",
                fontFamily: "'Pacifico', cursive", // Using Pacifico font
                color: "#FFFFFF", // Text color set to white
                margin: "0 100px", // Adjust gap between names
              }}
            >
              {client.name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;

// import { useEffect, useRef } from "react";
// import { clients } from "../constants";
// import styles from "../style";
// import { gsap } from "gsap";

// const Clients = () => {
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const totalWidth = container.scrollWidth; // Total width of the content
//     const duration = totalWidth / 50; // Adjust duration based on width for consistent speed

//     // GSAP animation: Moving the container horizontally
//     animationRef.current = gsap.to(container, {
//       x: -totalWidth, // Move left by the total width
//       duration: duration,
//       ease: "none", // Use "none" for linear movement
//       repeat: -1, // Infinite repeat for a loop
//       modifiers: {
//         x: gsap.utils.unitize((x) => {
//           // Loop back to the start when the end is reached
//           return parseFloat(x) % totalWidth;
//         }),
//       },
//     });

//     return () => {
//       // Cleanup GSAP animation when the component unmounts
//       animationRef.current.kill();
//     };
//   }, []);

//   const handleMouseEnter = () => {
//     // Pause animation when hovered
//     animationRef.current.pause();
//   };

//   const handleMouseLeave = () => {
//     // Resume animation when the mouse leaves
//     animationRef.current.resume();
//   };

//   return (
//     <section className={`${styles.flexCenter} my-4`}>
//       <div
//         className={`${styles.flexCenter} overflow-hidden w-full`} // Hide overflow for sliding
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         style={{ backgroundColor: "#000", padding: "10px" }} // Optional styling for the marquee background
//       >
//         <div
//           ref={containerRef}
//           style={{
//             display: "flex",
//             gap: "50px", // Adjust gap between names
//             whiteSpace: "nowrap",
//           }}
//         >
//           {/* Render client names twice for continuous loop effect */}
//           {[...clients, ...clients].map((client, index) => (
//             <div
//               key={index}
//               style={{
//                 flexShrink: 0,
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 fontFamily: "'Pacifico', cursive", // Using Pacifico font
//                 color: "#FFFFFF", // Text color set to white
//               }}
//             >
//               {client.name}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import { useEffect, useRef } from "react";
// import { clients } from "../constants";
// import styles from "../style";
// import { gsap } from "gsap";

// const Clients = () => {
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const totalWidth = container.scrollWidth / 2; // Half the width because we render the names twice
//     const duration = totalWidth / 50; // Adjust duration based on width for consistent speed

//     // GSAP animation: Moving the container horizontally
//     animationRef.current = gsap.to(container, {
//       x: -totalWidth, // Move left by the total width
//       duration: duration,
//       ease: "none", // Use "none" for linear movement
//       repeat: -1, // Infinite repeat for a loop
//       modifiers: {
//         x: gsap.utils.unitize((x) => {
//           // Loop back to the start when the end is reached
//           return parseFloat(x) % totalWidth;
//         }),
//       },
//     });

//     return () => {
//       // Cleanup GSAP animation when the component unmounts
//       animationRef.current.kill();
//     };
//   }, []);

//   const handleMouseEnter = () => {
//     // Pause animation when hovered
//     animationRef.current.pause();
//   };

//   const handleMouseLeave = () => {
//     // Resume animation when the mouse leaves
//     animationRef.current.resume();
//   };

//   return (
//     <section className={`${styles.flexCenter} my-4`}>
//       <div
//         className={`${styles.flexCenter} overflow-hidden w-full`} // Hide overflow for sliding
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div
//           ref={containerRef}
//           style={{
//             display: "flex",
//             gap: "50px", // Adjust gap between names
//             whiteSpace: "nowrap",
//           }}
//         >
//           {/* Render client names twice for continuous loop effect */}
//           {[...clients, ...clients].map((client, index) => (
//             <div
//               key={index}
//               style={{
//                 flexShrink: 0,
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 fontFamily: "'Pacifico', cursive", // Using Pacifico font
//                 color: "#FFFFFF", // Text color set to white
//               }}
//             >
//               {client.name}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;



// import { useEffect, useRef } from "react";
// import { clients } from "../constants";
// import styles from "../style";
// import { gsap } from "gsap";

// const Clients = () => {
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     // Setting up the animation using GSAP
//     const container = containerRef.current;
//     const totalWidth = container.scrollWidth / 2; // Half the width because we render the names twice
//     const duration = 20; // Adjust duration for the speed of the scroll

//     // GSAP animation: Moving the container horizontally
//     animationRef.current = gsap.to(container, {
//       x: -totalWidth, // Move left by the total width
//       duration: duration,
//       ease: "linear",
//       repeat: -1, // Infinite repeat for a loop
//     });

//     return () => {
//       // Cleanup GSAP animation when the component unmounts
//       animationRef.current.kill();
//     };
//   }, []);

//   const handleMouseEnter = () => {
//     // Pause animation when hovered
//     animationRef.current.pause();
//   };

//   const handleMouseLeave = () => {
//     // Resume animation when the mouse leaves
//     animationRef.current.resume();
//   };

//   return (
//     <section className={`${styles.flexCenter} my-4`}>
//       <div
//         className={`${styles.flexCenter} overflow-hidden w-full`} // Hide overflow for sliding
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div
//           ref={containerRef}
//           style={{
//             display: "flex",
//             gap: "50px", // Adjust gap between names
//             whiteSpace: "nowrap",
//           }}
//         >
//           {/* Render client names twice for continuous loop effect */}
//           {[...clients, ...clients].map((client, index) => (
//             <div
//               key={index}
//               style={{
//                 flexShrink: 0,
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 fontFamily: "'Pacifico', cursive", // Using Pacifico font
//                 color: "#FFFFFF", // Text color set to white
//               }}
//             >
//               {client.name}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;


