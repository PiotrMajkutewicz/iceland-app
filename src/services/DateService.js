export const parseTimestamp = (dateString) => {
  const d = new Date(dateString);

  if (isNaN(d.getTime())) {
    return dateString;
  }
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
};
