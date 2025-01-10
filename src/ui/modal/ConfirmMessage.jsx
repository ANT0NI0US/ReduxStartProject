import { useTranslation } from "react-i18next";
import { MdErrorOutline } from "react-icons/md";
import Button from "../buttons/Button";

export default function ConfirmMessage({
  onConfirm,
  message,
  disabled,
  onCloseModal,
}) {
  const { t } = useTranslation();

  const handleConfirm = async () => {
    await onConfirm();
    onCloseModal();
  };

  return (
    <>
      <div className=" p-[15px] md:p-[20px]">
        <MdErrorOutline className="mx-auto text-8xl text-error" />

        <p className=" text-center text-lg font-medium capitalize ">
          {message}
        </p>
      </div>

      <div className="rounded-bl-lg rounded-br-lg border-t bg-info px-4 py-6">
        <div className="ms-auto flex w-full gap-[10px]">
          <Button
            AriaLabel={t("general.yes")}
            loading={disabled}
            onClick={handleConfirm}
          >
            {t("general.yes")}
          </Button>
          <Button
            AriaLabel={t("general.cancel")}
            loading={disabled}
            variation="danger"
            onClick={onCloseModal}
          >
            {t("general.cancel")}
          </Button>
        </div>
      </div>
    </>
  );
}
