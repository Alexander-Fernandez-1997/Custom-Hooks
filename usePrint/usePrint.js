export const usePrint = () => {
  const print = () => {
    window.print();
  };
  return { print };
};

export const usePrintFn = () => {
  window.print();
};
