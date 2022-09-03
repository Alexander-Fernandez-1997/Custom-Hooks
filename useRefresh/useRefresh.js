export const useRefresh = () => {
  const [refresh, setRefresh] = useState(false);
  const refreshPage = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 0);
  };
  return [refresh, refreshPage];
};
