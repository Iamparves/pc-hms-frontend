import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <header className="bg-white py-5">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-blue text-xl font-semibold">
          <span className="bg-blue px-2 py-0.5 text-white">Posh</span> Coder
        </Link>
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to="/"
                activeclassname="active"
                className="[&.active]:text-blue"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                activeclassname="active"
                className="[&.active]:text-blue"
              >
                Login
              </NavLink>
            </li>
            <li>
              <Link
                className={cn(buttonVariants({ variant: "outline" }))}
                to="/doctors"
                variant="outline"
              >
                Find Doctor
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
