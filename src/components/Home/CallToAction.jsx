import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <section className="bg-[url(/laboratory.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/75 py-16 sm:py-20 xl:py-[100px]">
        <div className="container flex flex-col items-center text-center">
          <h3 className="mb-3 text-2xl font-semibold text-white sm:mb-4 sm:text-3xl lg:mb-8 lg:text-[42px]">
            Ready to get started?
          </h3>
          <p className="mb-5 max-w-sm leading-5 text-gray-100 sm:text-base lg:mb-8 lg:max-w-none lg:text-[22px]">
            Sign up today and take the first step towards better health
          </p>
          <Button
            className="rounded-none border-2 border-blue bg-blue px-7 py-[22px] text-white hover:bg-transparent lg:px-10 lg:py-[25px] lg:text-base"
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
