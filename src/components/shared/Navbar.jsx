import useAuth from "@/hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DesktopNavItems from "./DesktopNavItems";
import MobileNavItems from "./MobileNavItems";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blogs" },
  { title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { isLoading, user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <div className="h-16 md:h-[76px] lg:h-20">
      <header
        ref={navbarRef}
        className="fixed left-0 top-0 z-50 w-full bg-white py-4 shadow-[0_1px_5px_rgba(0,0,0,0.1)] md:py-5"
      >
        <div className="container flex items-center justify-between">
          <Link to="/">
            <img className="h-8 md:h-9" src="/logo.png" alt="Patientoo" />
          </Link>
          <DesktopNavItems items={navItems} user={user} isLoading={isLoading} />
          <MobileNavItems
            user={user}
            items={navItems}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            isLoading={isLoading}
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
