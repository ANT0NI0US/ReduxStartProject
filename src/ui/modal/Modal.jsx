import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
// import { useOutsideClick } from "@/hooks/useOutsideClick";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (windowName) => setOpenName(windowName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens: opensWindowName, children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { t, i18n } = useTranslation();
  const { openName, close } = useContext(ModalContext);
  // const ref = useOutsideClick(close);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (name === openName) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [name, openName, close]);

  if (name !== openName) return null;

  return createPortal(
    <div>
      <div
        className={`fixed left-0 top-0 z-[110] h-full w-full bg-[#00000050] backdrop-blur-sm`}
      ></div>

      <div className="fixed left-0 top-0 z-[10000000] h-full w-full">
        <div className="fixed left-[50%] top-[50%] z-50 max-h-[80vh] w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-md md:w-[750px]">
          <button
            aria-label={t("general.close")}
            title={t("general.close")}
            onClick={close}
            className={`absolute ${i18n.language === "ar" ? "left-[10px]" : "right-[10px]"} top-[10px] text-error`}
          >
            <FaTimes />
          </button>
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
