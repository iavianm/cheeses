export const normalizePhone = (phone) => {
  let filteredValue = phone.replace(/\D/g, "");

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

  return filteredValue;
};
