import AboutUs from "@/components/Home/AboutUs";

const About = () => {
  return (
    <main>
      <div className="bg-[url(/about.jpg)] bg-cover bg-center">
        <div className="bg-black/50 py-20">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
            About Us
          </h1>
        </div>
      </div>
      <AboutUs />
      <div className="border-b border-gray-200/50"></div>
    </main>
  );
};

export default About;
