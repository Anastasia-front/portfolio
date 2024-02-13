const currentDate = new Date();

export const currentYear = currentDate.getFullYear();
export const currentMonth = new Intl.DateTimeFormat("en-US", {
  month: "long",
}).format(currentDate);
export const currentTime = currentDate.toLocaleTimeString("en-US");
