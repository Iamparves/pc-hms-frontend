import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <section className="bg-[url(/laboratory.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/75 py-16 sm:py-20 xl:py-[100px]">
        <div className="container flex flex-col items-center text-center">
          <h3 className="mb-2 text-xl font-semibold text-white sm:mb-4 sm:text-2xl lg:text-4xl">
            Ready to get started?
          </h3>
          <p className="mb-5 max-w-sm text-[15px] leading-5 text-gray-200 sm:text-base lg:max-w-lg lg:text-lg">
            Sign up today and take the first step towards better health
          </p>
          <Button
            className="rounded-full bg-blue px-7 py-[22px] hover:bg-blue/90 lg:px-10 lg:py-[25px] lg:text-base"
            asChild
          >
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
