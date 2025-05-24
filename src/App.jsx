import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Contact from "./components/Contact.jsx";
import MessageSticky from "./components/MessageSticky.jsx";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <MessageSticky></MessageSticky>
        <Stats />
        <Business />
        <Billing />
        {/* <CardDeal /> */}
        <Testimonials />
        
        <CTA/>
        <Contact/>
        <div className="font-poppins font-semibold flex justify-center text-white text-[30px] py-6">We are Supported By</div>
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
