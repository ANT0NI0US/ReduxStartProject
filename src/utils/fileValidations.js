const allowedTypes = {
  images: ["jpg", "jpeg", "png", "webp"],
  pdf: ["pdf"],
  excel: ["xls", "xlsx"],
  csv: ["csv"],
};

export const validateFileType = (file, allowedFileGroups) => {
  if (!file) {
    return "fieldRequired";
  }

  if (typeof file === "string" && file.trim() !== "") {
    return true;
  }

  if (file?.[0] instanceof File) {
    const allowedExtensions = allowedFileGroups
      .map((group) => allowedTypes[group])
      .flat();

    const fileExtension = file[0].name.split(".").pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      const errorMessage = `Allowed file types: ${allowedExtensions.join(", ")}`;
      return errorMessage;
    }

    return true;
  }

  return "Invalid file input.";
};

// validate: (value) => {
//     const validationResult = validateFileType(value, ["pdf"]);
//     return validationResult;
//   },
