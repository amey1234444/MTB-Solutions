import { GitHub, Twitter, Facebook, Instagram, Youtube,Linkedin} from "react-feather";
import IconButton from "./IconButton"; // Assuming IconButton is in the same folder
import { socialMedia } from "../constants"; // You can add platform names and URLs to this array

const Footer = () => (
  <section className="flex flex-col items-center py-6">
    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <div className="flex flex-row md:mt-0 mt-6 gap-4">
        {/* Social Media Buttons */}
        {socialMedia.map((social) => (
          <IconButton
            key={social.id}
            text={social.name}
            color={social.color} // You can add specific colors in your socialMedia constant
            onClick={() => window.open(social.link)}
          >
            {getIcon(social.id)} {/* Function to dynamically render icons */}
          </IconButton>
        ))}
      </div>
    </div>
  </section>

);

export default Footer;

// Helper function to return the correct icon
const getIcon = (id) => {
  switch (id) {
    case "linkedin":
      return <Linkedin size={20} />;
    case "facebook":
      return <Facebook size={20} />;
    case "twitter":
      return <Twitter size={20} />;
    case "instagram":
      return <Instagram size={20} />;
    case "youtube":
      return <Youtube size={20} />;
    default:
      return null;
  }
};
