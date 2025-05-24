// import styles from "../style";
// import Button from "./Button";

// const CTA = () => (
//   <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
//     <div className="flex-1 flex flex-col">
//       <h2 className={styles.heading2}>Let’s visit our Associates!</h2>
//       <p className={`${styles.paragraph} max-w-[400px] mt-5`}>
        
//       </p>
//     </div>

//     <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 mr-2`}>
//       <Button />
//     </div>
//   </section>
// );

// export default CTA;

import styles from "../style";
import Button from "./Button";
import logoImage from "../assets/CIRCUIT_CENTRAL_LOGO.png"; // Import your logo image here


const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start">
      {/* Text Section */}
    <div className="h-[20%] w-[20%] sm:mr-8 mb-5 sm:mb-0">
      <img src={logoImage} alt="Startup Logo" className="rounded-l-[20px] rounded-r-[20px]" />
    </div>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s visit our Associates!</h2>
        <p className={`${styles.paragraph} max-w-[400px] mt-5`}>
          Discover collaborations that make a difference!
        </p>
      </div>

      {/* Button Section */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </div>
  </section>
);

export default CTA;
