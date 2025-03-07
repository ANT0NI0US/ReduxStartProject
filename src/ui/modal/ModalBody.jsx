import { useTranslation } from "react-i18next";
import Button from "../buttons/Button";

export default function ModalBody({ onSubmit, children, type = "form" }) {
  return type === "form" ? (
    <form onSubmit={onSubmit}>{children}</form>
  ) : (
    <div>{children}</div>
  );
}

function FormHeader({ title }) {
  return (
    <h1 className="rtl:font-alexandria! rounded-tl-lg rounded-tr-lg border-b bg-[#00c6cf] py-6 ps-4 text-xl font-bold uppercase tracking-wider text-white sm:text-[26px] ltr:font-protest!">
      {title}
    </h1>
  );
}

function FormBody({ children }) {
  return (
    <div className="flex max-h-[calc(80vh-150px)] min-h-[26vh] flex-col gap-[15px] overflow-auto p-[15px] pb-[20px] md:gap-[20px] md:p-[20px] md:pb-[30px]">
      {children}
    </div>
  );
}

function FormFooter({
  isLoading = false,
  onCancel,
  canSubmit = false,
  SubmitTitle,
  AriaLabel,
}) {
  const { t } = useTranslation();
  return (
    <div className="rounded-bl-lg rounded-br-lg border-t bg-info px-4 py-6">
      <div
        className={`ms-auto flex w-full gap-[10px] ${
          onCancel ? "sm:w-[60%]" : "sm:w-[30%]"
        } `}
      >
        <Button
          AriaLabel={AriaLabel}
          type="submit"
          loading={isLoading}
          disabled={canSubmit}
        >
          {SubmitTitle}
        </Button>
        {onCancel && (
          <Button
            AriaLabel={t("general.cancel")}
            variation="danger"
            onClick={onCancel}
            loading={isLoading}
          >
            {t("general.cancel")}
          </Button>
        )}
      </div>
    </div>
  );
}

ModalBody.Header = FormHeader;
ModalBody.Body = FormBody;
ModalBody.Footer = FormFooter;
