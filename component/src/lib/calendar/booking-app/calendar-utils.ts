export function getCalendarGrid(year: number, month: number): Date[][] {
  // month: 0 = January … 11 = December
  const firstOfMonth = new Date(year, month, 1);
  const startDay     = firstOfMonth.getDay();   // 0 = Sunday…6 = Saturday
  const daysInMonth  = new Date(year, month+1, 0).getDate();

  const grid: Date[][] = [];
  let week: Date[] = [];

  // fill initial blanks
  for (let i = 0; i < startDay; i++) {
    week.push(null!);
  }

  // fill days
  for (let day = 1; day <= daysInMonth; day++) {
    week.push(new Date(year, month, day));
    if (week.length === 7) {
      grid.push(week);
      week = [];
    }
  }
  // pad last week
  while (week.length < 7) week.push(null!);
  grid.push(week);

  return grid;
}