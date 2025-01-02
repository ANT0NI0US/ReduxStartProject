import { useTranslation } from "react-i18next";
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
      <p className="p-[15px] text-lg font-medium capitalize md:p-[20px]">
        {message}
      </p>

      <div className="bg-info rounded-bl-lg rounded-br-lg border-t px-4 py-6">
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
