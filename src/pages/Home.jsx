import AboutUs from "@/components/Home/AboutUs";
import CallToAction from "@/components/Home/CallToAction";
import Hero from "@/components/Home/Hero";
import HomeBlogs from "@/components/Home/HomeBlogs";
import HowItWorks from "@/components/Home/HowItWorks";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <HowItWorks />
      <CallToAction />
      <HomeBlogs />
    </main>
  );
};

export default Home;
