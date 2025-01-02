import { Link } from "react-router-dom";
import { FaIdCard, FaPlus, FaUndo } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { HiTrash } from "react-icons/hi2";
import { RiEdit2Fill } from "react-icons/ri";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { MdOutlineAssignmentInd } from "react-icons/md";

const iconComponents = {
  add: <FaPlus />,
  edit: <RiEdit2Fill />,
  delete: <HiTrash />,
  details: <TfiLayoutListThumbAlt />,
  results: <FaFilePen />,
  register: <MdOutlineAssignmentInd />,
  identity: <FaIdCard />,
  reuse: <FaUndo />,
};

const baseStyle =
  "flexCenter rounded-md border-[0.5px] border-darkPrimary bg-lightPrimary p-[5px] text-textColor transition-all hover:bg-darkPrimary hover:text-white";

export default function ActionButton({ icon, onClick, label, To }) {
  if (To)
    return (
      <Link
        to={To}
        className={`${baseStyle}`}
        aria-label={label}
        title={label}
        onClick={onClick}
      >
        {iconComponents[icon]}
      </Link>
    );

  return (
    <button
      className={`${baseStyle}`}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {iconComponents[icon]}
    </button>
  );
}
