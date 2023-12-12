import { useCallback, useMemo, useState } from 'react';

// const test = {
//   selectedDate: new Date()
// };
const today = new Date();
export const useHomeScreen = () => {
  const [selectedDate, setSelectedDate] = useState(today);
  const filter = useMemo(() => ({ selectedDate }), [selectedDate]);

  const updateSelectedDay = useCallback((day: Date) => {
    setSelectedDate(day);
  }, []);

  return { filter, updateSelectedDay, selectedDate };
};
