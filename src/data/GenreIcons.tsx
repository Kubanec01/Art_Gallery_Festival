import { ReactElement } from "react";
import { FaLandmark } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineAutoStories } from "react-icons/md";


type GenreIconsProps = {
  id: string;
  name: string;
  icon: ReactElement;
};

export const GenreIcons: GenreIconsProps[] = [
  {
    id: "neo-classical-realism",
    name: "Neo-Classical Realism",
    icon: <FaLandmark />,
  },
  {
    id: "symbolic-minimalism",
    name: "Symbolic Minimalism",
    icon: <FiCircle />,
  },
  {
    id: "retro-fantasy-realism",
    name: "Retro-Fantasy Realism",
    icon: <AiOutlineEye />,
  },
  {
    id: "cyber-gothic",
    name: "Cyber-Gothic",
    icon: <MdOutlineAutoStories />,
  },
];
