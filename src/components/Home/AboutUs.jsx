import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const AboutUs = ({ isHome = false }) => {
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`border-t border-gray-200/50 bg-white py-12 md:py-16 lg:py-20 ${isHome ? "xl:py-24" : ""}`}
    >
      <div className="container">
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-10 lg:max-w-none lg:grid-cols-2">
          <div className="">
            <img src="hospital-beds.jpg" />
          </div>
          <div className="relative text-center lg:text-left">
            <span className="absolute -left-2 -top-16 block size-20 rounded-full bg-blue blur-[90px]"></span>
            <h4 className=" mb-1 font-medium uppercase text-blue">About Us</h4>
            <h2 className="mx-auto mb-4 max-w-sm text-2xl font-semibold leading-tight text-gray-800 sm:text-3xl lg:mx-0">
              Partnering with You for Optimal Health
            </h2>
            <p className="max-w-xl text-sm text-gray-500 sm:text-base">
              We believe that quality care is the foundation of a healthier
              life. Our dedicated team provides comprehensive and compassionate
              care tailored to your needs, leveraging the latest medical
              advancements to empower you to take control of your health.
            </p>

            <Button
              className="mt-8 rounded-full bg-blue px-8 py-[26px] text-[15px] hover:bg-blue/90"
              onClick={() =>
                isHome ? navigate("/about") : handleScrollTo("whatWeOffer")
              }
            >
              {isHome ? "Learn More" : "What We Offer"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
