import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
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
    </main>
  );
};

export default Contact;
