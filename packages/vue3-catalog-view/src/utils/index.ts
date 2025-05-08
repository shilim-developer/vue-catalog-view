export const scrollToPromise = (
  element: Window | HTMLElement,
  options?: ScrollToOptions
) => {
  return new Promise((resolve) => {
    const scrollEnd = () => {
      element.removeEventListener("scrollend", scrollEnd);
      resolve(true);
    };
    element.addEventListener("scrollend", scrollEnd);
    element.scrollTo(options);
  });
};

export const sleep = (millionSeconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, millionSeconds));
};
