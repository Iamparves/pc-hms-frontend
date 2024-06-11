import { useStore } from "@/store";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LogoutButton = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");

    toast.success("Logout successful", {
      description: "You have been logged out successfully",
    });

    setUser(null);
    return navigate("/");
  };

  return (
    <button
      className="flex items-center gap-3 px-8 py-3 text-[#808080] duration-300 hover:text-blue"
      onClick={handleLogout}
    >
      <span className="text-xl">
        <TbLogout2 />
      </span>
      <span className="text-sm duration-300">Logout</span>
    </button>
  );
};

export default LogoutButton;
