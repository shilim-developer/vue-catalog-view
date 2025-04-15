export const scrollToPromise = (
  element: Window | HTMLElement,
  options?: ScrollToOptions
) => {
  return new Promise((resolve) => {
    let scrollEvent;
    const scrollEnd = () => {
      element.removeEventListener("scrollend", scrollEnd);
      resolve(true);
    };
    scrollEvent = element.addEventListener("scrollend", scrollEnd);
    element.scrollTo(options);
  });
};

export const sleep = (millionSeconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, millionSeconds));
};
