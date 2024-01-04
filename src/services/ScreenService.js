const getCurrentWindowSize = () => {
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;

  return { currentWidth, currentHeight }
}
export const activeOnResize = (cb = () => {}) => {
  
  window.addEventListener("resize", () => cb(getCurrentWindowSize()));
};

export const deactiveOnResize = (cb = () => {}) => {
  window.removeEventListener("resize", () => cb(getCurrentWindowSize()));
};