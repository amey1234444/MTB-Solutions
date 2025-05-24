

// import React from 'react';
// import messageIcon from '../assets/message.png'; // Ensure this path points to your message icon

// const MessageSticky = () => {
//   return (
//     <div className="fixed bottom-6 right-6 z-50 cursor-pointer hover:xl">
//       {/* Added a link tag with href */}
//       <a
//         href="https://your-link-here.com" // Change this to the desired link or a chat modal trigger
//         target="_blank" // Opens link in a new tab
//         rel="noopener noreferrer" // Improves security when opening in new tab
//         className="bg-white p-2 rounded-full block"
//       >
//         <img
//           src={messageIcon}
//           alt="Message Icon"
//           className="w-12 h-12 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl hover:border-4  hover:border-opacity-75"
//         />
//       </a>
//     </div>
//   );
// };

// export default MessageSticky;

import React from 'react';
import messageIcon from '../assets/message.png'; // Ensure this path points to your message icon

const MessageSticky = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 cursor-pointer hover:xl">
      {/* Gmail compose link */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mtbsolutions3@gmail.com&su=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." // Replace with your Gmail address and optional subject/body
        target="_blank" // Opens Gmail in a new tab
        rel="noopener noreferrer" // Improves security when opening in new tab
        className="bg-white p-2 rounded-full block"
      >
        <img
          src={messageIcon}
          alt="Message Icon"
          className="w-12 h-12 rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl hover:border-4 hover:border-opacity-75"
        />
      </a>
    </div>
  );
};

export default MessageSticky;




