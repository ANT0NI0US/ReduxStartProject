import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../utils/useOutsideClick";
import { useTranslation } from "react-i18next";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider value={{ openId, close, open }}>
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className="flexCenter relative">{children}</div>;
}

function Toggle({ id }) {
  const { openId, close, open } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleClick}
      className="p-1 transition-all hover:bg-gray-100"
    >
      <HiEllipsisVertical className="h-6 w-6 text-gray-700" />
    </button>
  );
}

function List({ id, index, children }) {
  const { openId, close } = useContext(MenusContext);
  const { i18n } = useTranslation();
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return (
    <ul
      ref={ref}
      style={{
        [i18n.language === "ar" ? "right" : "left"]: -100,
        bottom: index === 0 ? -70 : 0,
      }}
      className="bg-info absolute z-50 shadow-md"
    >
      {children}
    </ul>
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li className="min-w-[100px]">
      <button
        onClick={handleClick}
        className="hover:bg-blue1 flex w-full items-center justify-start gap-1 p-3 text-start text-sm transition-all hover:text-white"
      >
        {icon}
        <div>{children}</div>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;

// import { useTranslation } from "react-i18next";
// import LocationsRow from "./LocationsRow";
// import Table from "@/ui/Table";
// import SortingTableHead from "@/ui/SortingTableHead";
// import Pagination from "@/ui/Pagination";
// import Filter from "@/ui/Filter";
// import { useFilter } from "@/hooks/useFilter";
// import { usePagination } from "@/hooks/usePagination";
// import { useSort } from "@/hooks/useSort";
// import Menus from "@/ui/Menus";

// export default function SchoolsLocationsTable({ data = [] }) {
//   const { t, i18n } = useTranslation();

//   const headData = [
//     {
//       text: "general.name",
//       sortName: `${i18n.language === "ar" ? "Name_A" : "Name_E"}`,
//     },
//     { text: "admin.description", sortName: "Description" },
//   ];

//   /* FILTER */
//   const filterOptions = [
//     {
//       value: `${i18n.language === "ar" ? "Name_A" : "Name_E"}`,
//       label: t("general.name"),
//     },
//     { value: "Description", label: t("admin.description") },
//   ];

//   const { filteredData, handleFilter } = useFilter(data);

//   /* SORTING */
//   const { sortedData, handleSort, sortConfig } = useSort("asc");

//   const sortedFilteredData = sortedData(filteredData);

//   /* PAGINATION */
//   const { paginatedData, count, totalPages } =
//     usePagination(sortedFilteredData);

//   return (
//     <div className="mt-[20px]">
//       <Filter options={filterOptions} onFilter={handleFilter} />
//       <Menus>
//         <Table>
//           <Table.Header>
//             <SortingTableHead
//               headData={headData}
//               handleSort={handleSort}
//               sortConfig={sortConfig}
//               action
//             />
//           </Table.Header>
//           <Table.Body
//             data={paginatedData}
//             render={(location, index) => (
//               <LocationsRow
//                 location={location}
//                 key={location?.CityId}
//                 index={index}
//               />
//             )}
//           />
//         </Table>
//       </Menus>
//       <Pagination count={count} pageCount={totalPages} />
//     </div>
//   );
// }

// import { useTranslation } from "react-i18next";
// import { RiEdit2Fill } from "react-icons/ri";
// import Table from "@/ui/Table";
// import LocationForm from "./LocationForm";
// import Modal from "@/ui/Modal";
// import Menus from "@/ui/Menus";

// export default function LocationsRow({ location, index }) {
//   const { t, i18n } = useTranslation();
//   return (
//     <Table.Row key={location?.CityId}>
//       <Table.Cell>
//         {i18n.language === "ar" ? location?.Name_A : location?.Name_E}
//       </Table.Cell>
//       <Table.Cell>{location?.Description}</Table.Cell>
//       <Table.Cell>
//         {/* <div className="flex gap-[10px]"> */}
//         <Modal>
//           <Menus.Menu>
//             <Menus.Toggle id={location?.CityId} />
//             <Menus.List id={location?.CityId} index={index}>
//               <Modal.Open opens="locationForm">
//                 <Menus.Button icon={<RiEdit2Fill />}>تعديل</Menus.Button>
//               </Modal.Open>
//               <Modal.Open opens="locationFormTwo">
//                 <Menus.Button icon={<RiEdit2Fill />}>حذف</Menus.Button>
//               </Modal.Open>
//               <Modal.Open opens="locationFormThree">
//                 <Menus.Button icon={<RiEdit2Fill />}>إضافة</Menus.Button>
//               </Modal.Open>
//             </Menus.List>

//             <Modal.Window name="locationForm">
//               <LocationForm locationToEdit={location} />
//             </Modal.Window>
//             <Modal.Window name="locationFormTwo">
//               <LocationForm locationToEdit={location} />
//             </Modal.Window>
//             <Modal.Window name="locationFormThree">
//               <LocationForm locationToEdit={location} />
//             </Modal.Window>
//           </Menus.Menu>
//         </Modal>
//       </Table.Cell>
//     </Table.Row>
//   );
// }
