import { useState } from "react";
import { useTranslation } from "react-i18next";
import Choose from "./Choose";
import Input from "./Input";

export default function Filter({ options, onFilter }) {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(options[0] || null);
  const [inputValue, setInputValue] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(() => {
      if (selectedOption && e.target.value !== "") {
        onFilter(selectedOption.value, e.target.value);
      } else {
        onFilter(null, "");
      }
    }, 500);

    setDebounceTimeout(newTimeout);
  };

  return (
    <div className="mb-[10px] flex flex-col items-start justify-between gap-[10px] rounded-md bg-[#f2f9fd] p-[10px] sm:flex-row sm:items-center">
      <Choose
        data={options}
        onChange={handleSelectChange}
        defaultValue={options[0]}
      />
      <Input
        placeholder={t("general.search")}
        value={inputValue}
        showLabel={false}
        onChange={handleInputChange}
      />
    </div>
  );
}
