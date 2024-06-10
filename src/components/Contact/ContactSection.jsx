import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section className="sm:md-16 py-12 lg:py-20">
      <div className="container">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:gap-8 lg:items-start">
          <div>
            <h2 className="mb-8 text-3xl font-bold text-[#151515] md:text-[32px] lg:mb-12 lg:text-4xl">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
