import { NavLink } from "react-router-dom";

export default function Tabs({ tabs }) {
  return (
    <div className="w-full overflow-x-hidden rounded-md bg-info p-3 shadow-md sm:p-5">
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {tabs?.map((tab) => (
          <NavLink
            key={tab.path}
            to={`/${tab.path}`}
            replace
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "bg-secondary font-bold text-white"
                  : "bg-lightPrimary hover:bg-secondary hover:text-white"
              } break-words rounded-md border border-darkPrimary px-2 py-1 transition-all duration-300 ease-in-out`
            }
          >
            {tab.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
