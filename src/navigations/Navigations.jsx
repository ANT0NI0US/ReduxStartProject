import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Test from "../features/Test.jsx";
import Spinner from "../ui/spinner/Spinner.jsx";

export default function Navigations() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
