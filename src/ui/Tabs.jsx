import { NavLink } from "react-router-dom";

export default function Tabs({ tabs }) {
  return (
    <div className="bg-info w-full overflow-x-hidden rounded-md p-3 shadow-md sm:p-5">
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
                  : "bg-light-primary hover:bg-secondary hover:text-white"
              } border-dark-primary rounded-md border px-2 py-1 break-words transition-all duration-300 ease-in-out`
            }
          >
            {tab.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
