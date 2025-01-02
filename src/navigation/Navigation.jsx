import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Test from "../features/Test.jsx";
import Spinner from "../ui/spinner/Spinner.jsx";
import TestTwo from "@/features/TestTwo";
import TestThree from "@/features/TestThree";
import TabsLayout from "@/features/TabsLayout";

export default function Navigation() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="tabsTest" element={<TabsLayout />}>
          <Route index element={<Navigate replace to="testTwo" />} />
          <Route path="testTwo" element={<TestTwo />} />
          <Route path="testThree" element={<TestThree />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
