// Constants for time calculations
const MS_PER_YEAR = 31536000000; // milliseconds in a year

// Helper function to calculate years of difference
const calculateYearsDifference = (startDate, endDate) => {
  const diffInMs = endDate.getTime() - startDate.getTime();
  return Math.floor(diffInMs / MS_PER_YEAR);
}

// Dates for calculations
const today = new Date();
const birthday = new Date(1990, 5, 10); // Note: Months in JavaScript's Date are 0-indexed, so 5 means June.
const start = new Date(2015, 4, 13); // May is represented as 4

// Exported constants
export const age = calculateYearsDifference(birthday, today);
export const experience = calculateYearsDifference(start, today);