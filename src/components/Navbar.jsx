// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { close, menu } from "../assets";
// import { navLinks } from "../constants";
// import logo from "../assets/MTBNEWLOGO.png";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);
//   const [cursorVariant, setCursorVariant] = useState("default");
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [magneticPosition, setMagneticPosition] = useState(null);

//   // Cursor movement handler
//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   // Add event listener for mouse move
//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Spotlight effect variants
//   const variants = {
//     default: {
//       x: mousePosition.x - 10,
//       y: mousePosition.y - 10,
//       height: 20,
//       width: 20,
//       backgroundColor: "white",
//       borderRadius: "50%",
//       // position: "absolute",
//       mixBlendMode: "difference",
//     },
//     linkHover: {
//       height: 70, // Make it a circle
//       width: 70,  // Adjust size of the spotlight circle
//       x: magneticPosition ? magneticPosition.x - 50 : mousePosition.x - 50, // Adjust to center the spotlight
//       y: magneticPosition ? magneticPosition.y - 30 : mousePosition.y - 50,
//       backgroundColor: "white",
//       borderRadius: "50%", // Ensure the spotlight remains circular
//       // position: "absolute",
//       mixBlendMode: "difference",
//     },
//   };

//   // Magnetic effect on hover
//   const applyMagneticEffect = (e) => {
//     const linkRect = e.target.getBoundingClientRect();
//     const linkCenterX = linkRect.left + linkRect.width / 2;
//     const linkCenterY = linkRect.top + linkRect.height / 2;

//     // Set magnetic position to center of the link
//     setMagneticPosition({ x: linkCenterX, y: linkCenterY });
//     setCursorVariant("linkHover");
//   };

//   // Remove magnetic effect on hover out
//   const removeMagneticEffect = () => {
//     setMagneticPosition(null);
//     setCursorVariant("default");
//   };

//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 py-2 bg-gradient-to-r from-slate-900 to-gray-800 flex justify-between items-center px-5">
//       {/* Spotlight Effect Cursor */}
//       <motion.div
//         className="fixed pointer-events-none" // Make sure pointer-events-none is used so it doesn't interfere with other elements
//         variants={variants}
//         animate={cursorVariant}
//         transition={{ type: "spring", stiffness: 500, damping: 30 }}
//       />

//       {/* Logo */}
//       <img src={logo} alt="MTB Solutions" className="w-[120px] h-[55px]" />

//       {/* Desktop Navigation */}
//       <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-10 mr-4">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-lg ${
//               active === nav.title ? "text-white" : "text-gray-400"
//             } transition-all duration-300 hover:text-white`}
//             onClick={() => setActive(nav.title)}
//             onMouseEnter={applyMagneticEffect}
//             onMouseLeave={removeMagneticEffect}
//           >
//             <a href={`#${nav.id}`}>
//               <span className="relative inline-block hover:scale-110 transform transition duration-300">
//                 {nav.title}
//               </span>
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation */}
//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-7 h-7 object-contain cursor-pointer"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-gradient-to-r from-black to-gray-900 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
//         >
//           <ul className="list-none flex flex-col justify-end items-start flex-1">
//             {navLinks.map((nav) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-lg ${
//                   active === nav.title ? "text-white" : "text-gray-400"
//                 } mb-4 transition-all duration-300 hover:text-white`}
//                 onClick={() => setActive(nav.title)}
//                 onMouseEnter={applyMagneticEffect}
//                 onMouseLeave={removeMagneticEffect}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import logo from "../assets/MTBNEWLOGO.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 py-2 bg-gradient-to-r from-slate-900 to-gray-800 flex justify-between items-center px-5">
      {/* Logo */}
      <img src={logo} alt="MTB Solutions" className="w-[120px] h-[55px]" />

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-10 mr-4">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-lg ${
              active === nav.title ? "text-white" : "text-gray-400"
            } transition-all duration-300 hover:text-white`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`} className="relative group">
              <span className="inline-block">{nav.title}</span>
              {/* Span Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7 object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-black to-gray-900 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-lg ${
                  active === nav.title ? "text-white" : "text-gray-400"
                } mb-4 transition-all duration-300 hover:text-white`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="relative group">
                  <span className="inline-block">{nav.title}</span>
                  {/* Span Underline Animation for Mobile */}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


