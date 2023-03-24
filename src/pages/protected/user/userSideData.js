import { RiBookReadFill } from "react-icons/ri";
import { BiTransferAlt } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsPinMapFill } from "react-icons/bs";
export const userSideData = [
  {
    id: 0,
    name: "Booking",
    icon: <RiBookReadFill className="icon0" />,
    link: "/user/booking",
  },
  {
    id: 1,
    name: "Transaction",
    icon: <BiTransferAlt className="icon1" />,
    link: "/user/transaction",
  },
  {
    id: 2,
    name: "History",
    icon: <AiOutlineHistory className="icon2" />,
    link: "/user/history",
  },
  {
    id: 3,
    name: "Map",
    icon: <BsPinMapFill className="icon3" />,
    link: "/user/map",
  },
  {
    id: 4,
    name: "Settings",
    icon: <FiSettings className="icon4" />,
    link: "/user/settings",
  },
];
