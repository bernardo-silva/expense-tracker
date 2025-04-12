// ISO Date Formatter
export const formatDate = (
  isoDateString: string,
  locale: string = "pt-PT",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string => {
  const date = new Date(isoDateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toLocaleDateString(locale, options);
};

export const formatMoney = (amount: number) =>
  (amount / 100).toLocaleString(
    "pt-PT",
    { style: "currency", currency: "EUR" },
  );
