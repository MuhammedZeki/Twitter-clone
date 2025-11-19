import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const BottomBar = () => {
  const queryClient = useQueryClient();
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  const { mutate: logoutMutation } = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Logout failed");

      return data;
    },
    onSuccess: () => {
      toast.success("Logged out successfully!");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 border-t border-gray-700 bg-black z-50 md:hidden">
      <ul className="flex items-center justify-around h-full">
        <li>
          <Link
            to="/"
            className="flex flex-col items-center gap-1 text-gray-300 hover:text-white"
          >
            <MdHomeFilled className="w-7 h-7" />
          </Link>
        </li>

        <li>
          <Link
            to="/notifications"
            className="flex flex-col items-center gap-1 text-gray-300 hover:text-white"
          >
            <IoNotifications className="w-6 h-6" />
          </Link>
        </li>

        <li>
          <Link
            to={`/profile/${authUser?.username}`}
            className="flex flex-col items-center gap-1 text-gray-300 hover:text-white"
          >
            <FaUser className="w-6 h-6" />
          </Link>
        </li>

        <li
          onClick={() => logoutMutation()}
          className="flex flex-col items-center gap-1 text-gray-300 hover:text-red-500 cursor-pointer"
        >
          <BiLogOut className="w-6 h-6" />
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;
