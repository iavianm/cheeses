export const normalizePhone = (phone) => {
  let filteredValue = phone.replace(/\D/g, "");

  if (filteredValue.startsWith("7")) {
    filteredValue = filteredValue.slice(1);
  }

  filteredValue = filteredValue
    .slice(0, 10)
    .split("")
    .reduce((acc, digit, idx) => {
      if (idx === 0) return "(" + digit;
      if (idx === 3) return acc + ")-" + digit;
      if (idx === 6) return acc + "-" + digit;
      if (idx === 8) return acc + "-" + digit;
      return acc + digit;
    }, "");

  return `7 ${filteredValue}`;
};
