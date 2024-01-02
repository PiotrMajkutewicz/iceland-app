export const getLocationNameFromReadableLocation = (readableLocation = "") =>
  readableLocation.split("af ").pop();
