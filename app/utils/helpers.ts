export function getDateLimits(selectedDate: Date): [Date, Date] {
  const startDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
    0,
    0,
    0
  );

  const endDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
    23,
    59,
    59
  );
  return [startDate, endDate];
}
