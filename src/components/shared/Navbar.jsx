import useAuth from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white py-5">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img className="h-9" src="/logo.png" alt="Patientoo" />
        </Link>
        <nav>
          <ul className="hidden items-center gap-x-6 text-[15px] font-medium md:flex">
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
                to="/about"
                activeclassname="active"
                className="[&.active]:text-blue"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                activeclassname="active"
                className="[&.active]:text-blue"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeclassname="active"
                className="[&.active]:text-blue"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={user ? `/dashboard/${user.role}` : "/login"}
                activeclassname="active"
                className="[&.active]:text-blue"
              >
                {user ? "Dashboard" : "Login"}
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
