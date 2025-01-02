import { Outlet } from "react-router-dom";
import Tabs from "@/ui/Tabs";
import { useTranslation } from "react-i18next";

export default function TabsLayout() {
  const { t } = useTranslation();

  const tabs = [
    { path: "tabsTest/testTwo", text: t("general.arabic") },
    { path: "tabsTest/testThree", text: t("general.english") },
    { path: "tabsTest/testFour", text: t("general.backToTop") },
    { path: "tabsTest/testFive", text: t("general.noDataFound") },
    { path: "tabsTest/testSix", text: t("general.backToDashboard") },
    { path: "tabsTest/testSeven", text: t("general.pageNotFound") },
    { path: "tabsTest/testEight", text: t("general.showPassword") },
    { path: "tabsTest/testNine", text: t("general.hidePassword") },
    { path: "tabsTest/testTen", text: t("general.actions") },
  ];
  return (
    <div className="my-[30px] px-10">
      <Tabs tabs={tabs} />

      <Outlet />
    </div>
  );
}
