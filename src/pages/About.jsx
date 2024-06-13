import WhatWeOffer from "@/components/About/WhatWeOffer";
import AboutUs from "@/components/Home/AboutUs";
import ScrollToTop from "@/components/shared/ScrollToTop";

const About = () => {
  return (
    <main>
      <ScrollToTop />
      <div className="bg-[url(/about.jpg)] bg-cover bg-center">
        <div className="bg-black/50 py-20">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
            About Us
          </h1>
        </div>
      </div>
      <AboutUs />
      <WhatWeOffer />
    </main>
  );
};

export default About;
