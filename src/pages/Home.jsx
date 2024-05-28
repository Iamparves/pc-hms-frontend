import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useStore } from "../store";

const Home = () => {
  const user = useStore((state) => state);

  return (
    <div className="bg-[url(/hospital-beds.jpg)]">
      <div className="flex min-h-screen flex-col justify-center bg-black/60 p-5 text-center text-white">
        <h1 className="mb-5 text-7xl font-bold">Posh Code</h1>
        <h3 className="text-4xl">Hospital Management System</h3>
        <div className="mx-auto mt-7 flex items-center justify-center gap-2">
          <Link
            className={buttonVariants({
              size: "lg",
            })}
            to="/signup"
          >
            Signup
          </Link>
          <Link
            className={cn(
              "text-black",
              buttonVariants({
                size: "lg",
                variant: "outline",
              }),
            )}
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
