import { useEffect } from "react";
import ContactBanner from "../components/Contact/ContactBanner";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      {/* <ContactBanner /> */}
      <ContactForm/>
    </>
  );
};

export default Contact;
