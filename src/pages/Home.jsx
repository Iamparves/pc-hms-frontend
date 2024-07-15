import AboutUs from "@/components/Home/AboutUs";
import CallToAction from "@/components/Home/CallToAction";
import FindDoctor from "@/components/Home/FindDoctor";
import Hero from "@/components/Home/Hero";
import HomeBlogs from "@/components/Home/HomeBlogs";
import HowItWorks from "@/components/Home/HowItWorks";
import ScrollToTop from "@/components/shared/ScrollToTop";

const Home = () => {
  return (
    <main>
      <ScrollToTop />
      <Hero />
      <FindDoctor />
      <AboutUs isHome />
      <HowItWorks />
      <CallToAction />
      <HomeBlogs />
    </main>
  );
};

export default Home;
