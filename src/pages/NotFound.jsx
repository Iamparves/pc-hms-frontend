import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[100dvh]">
      <Navbar />
      <div className="flex min-h-[calc(100vh-140px)] items-center justify-center py-12 md:py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-md bg-white p-5 shadow-sm sm:p-10">
          <img src="/404.svg" alt="404" />
          <h2 className="mt-5 text-center text-2xl font-semibold text-[#FFAC59] lg:text-3xl">
            Page Not Found
          </h2>
          <Link
            to="/"
            className="mt-5 block rounded-full bg-blue px-4 py-3.5 text-sm font-medium text-white sm:text-base"
          >
            Go back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
