// import React from "react";

// export default function Contact() {
//   const YOUR_EMAIL = "mtbsolutions3@gmail.com";
//   const YOUR_FONE = "+9191919919191";
//   const description = "Feel free to reach out to us for any inquiries.";

//   return (
//     <div id="contact" className="container mx-auto p-5 rounded-lg">
//       <div className="mb-5 mt-3">
//         <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
//         <hr className="border-t-2 border-gray-300 my-4" />
//       </div>
//       <div className="lg:flex lg:justify-between">
//         <div className="lg:w-5/12 mb-5">
//           <h3 className="text-2xl text-blue-400 font-semibold py-4">Get in touch</h3>
//           <address className="text-blue-100 font-bold">
//             <p>
//               <strong>Email:</strong> <a href={`mailto:${YOUR_EMAIL}`} className="#7AE6EB">{YOUR_EMAIL}</a>
//             </p>
//             <p className="mt-2">
//               <strong>Phone:</strong> {YOUR_FONE}
//             </p>
//           </address>
//           <p className="mt-4 text-white">{description}</p>
//         </div>
//         <div className="lg:w-7/12 flex items-center">
//           <form className="w-full">
//             <div className="lg:flex lg:space-x-4">
//               <div className="w-full lg:w-1/2 mb-4">
//                 <input
//                   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   id="name"
//                   name="name"
//                   placeholder="Name"
//                   type="text"
//                   required
//                 />
//               </div>
//               <div className="w-full lg:w-1/2 mb-4">
//                 <input
//                   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   type="email"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <textarea
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 className="w-full py-3 bg-[#7AE6EB] text-black font-bold rounded hover:bg-blue-700 transition duration-300"
//                 type="submit"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function Contact() {
  const YOUR_EMAIL = "mtbsolutions3@gmail.com";
  const YOUR_FONE = "+919529743220";
  const description = "Feel free to reach out to us for any inquiries.";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const sheetBestURL = "https://api.sheetbest.com/sheets/cab99aa1-eadb-4897-84fe-8c5355ed8951"; // Replace with your Sheet.best API URL

    try {
      const response = await fetch(sheetBestURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("Failed to send message , Try again");
    }
  };

  return (
    <div id="contact" className="container mx-auto p-5 rounded-lg">
      <div className="mb-5 mt-3">
        <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
        <hr className="border-t-2 border-gray-300 my-4" />
      </div>
      <div className="lg:flex lg:justify-between">
        <div className="lg:w-5/12 mb-5">
          <h3 className="text-2xl text-blue-400 font-semibold py-4">Get in touch</h3>
          <address className="text-blue-100 font-bold">
            <p>
              <strong>Email:</strong> <a href={`mailto:${YOUR_EMAIL}`} className="#7AE6EB">{YOUR_EMAIL}</a>
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> {YOUR_FONE}
            </p>
          </address>
          <p className="mt-4 text-white">{description}</p>
        </div>
        <div className="lg:w-7/12 flex items-center">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2 mb-4">
                <input
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full lg:w-1/2 mb-4">
                <input
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <button
                className="w-full py-3 bg-[#7AE6EB] text-black font-bold rounded hover:bg-blue-700 transition duration-300"
                type="submit"
              >
                Send
              </button>
              {status && <p className="mt-2 text-white font-semibold">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
