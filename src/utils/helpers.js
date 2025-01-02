export const isOnlySpaces = (value) => {
  return typeof value === "string" && value.trim().length === 0;
};

export const isPasswordValid = (value) => {
  // Add your custom password validation logic here
  const containsCharacters = /[a-zA-Z]/.test(value);
  const containsSpecialCases = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const containsNumbers = /\d/.test(value);
  const containsUpperCaseLetter = /[A-Z]/.test(value);

  return (
    containsCharacters &&
    containsSpecialCases &&
    containsNumbers &&
    containsUpperCaseLetter
  );
};
