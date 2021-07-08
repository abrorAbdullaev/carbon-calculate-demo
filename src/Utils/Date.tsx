const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];
const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fr', 'Sat'];

// @TODO Create specialized type for number range between 0 - 12 for months
export const getMonthName: (monthInd: number) => string = (monthInd) => {
  // @todo remove if case when proper typing is created
  if (monthInd < 12 && monthInd >= 0) {
    return months[monthInd];
  }

  return '';
}

// @TODO Create specialized type for number range between 0 - 7 for days
export const getDayName: (dayInd: number) => string = (dayInd) => {
  // @todo remove if case when proper typing is created
  if (dayInd < 7 && dayInd >= 0) {
    return days[dayInd];
  }

  return '';
}