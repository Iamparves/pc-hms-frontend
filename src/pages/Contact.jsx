import ContactSection from "@/components/Contact/ContactSection";
import ScrollToTop from "@/components/shared/ScrollToTop";

const Contact = () => {
  return (
    <main>
      <ScrollToTop />
      <div className="bg-[url(/contact.jpg)] bg-cover bg-center">
        <div className="bg-black/60 py-20">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
            Contact Us
          </h1>
        </div>
      </div>
      <ContactSection />
    </main>
  );
};

export default Contact;
