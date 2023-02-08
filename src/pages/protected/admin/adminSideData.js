import { GoDashboard } from "react-icons/go";
import { AiOutlineHistory } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
export const adminSideData = [
  {
    id: 0,
    name: "Dashboard",
    icon: <GoDashboard className="icon0" />,
    link: "/admin/dashboard",
  },
  {
    id: 1,
    name: "History",
    icon: <AiOutlineHistory className="icon2" />,
    link: "/admin/history",
  },
  {
    id: 2,
    name: "Settings",
    icon: <FiSettings className="icon3" />,
    link: "/admin/settings",
  },
];
