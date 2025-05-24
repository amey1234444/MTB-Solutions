import React from "react";

const Button = ({ styles }) => (
  <a type="button" href="https://www.circuitcentral.in" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Visit 
  </a>
);

export default Button;


// import React from "react";

// const Button = ({ styles, href }) => (
//   <a 
//     href={href} 
//     className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
//     target="_blank" // Optional: Open in a new tab
//     rel="noopener noreferrer" // Optional: Security best practice for external links
//   >
//     Visit 
//   </a>
// );

// export default Button;
