import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import StoreProvider from "./StoreProvider";
import RoutesProvider from "./RoutesProvider";
import Navigation from "../navigation/Navigation";

import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppProvider() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <StoreProvider>
      <RoutesProvider>
        <Navigation />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </RoutesProvider>
    </StoreProvider>
  );
}
