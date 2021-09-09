const useLocalStorage = () => {
  const get = (name: string) => {
    const data = localStorage.getItem(name);
    if (!data) return data;
    return JSON.parse(data);
  };

  const set = (name: string, val: any) => {
    return localStorage.setItem(name, JSON.stringify(val));
  };

  const add = (name: string, addVal: any) => {
    const oVal = get(name);
    const nVal = oVal.concat(addVal);
    set(name, nVal);
  };

  // RETURN
  return {
    get,
    set,
    add,
  };
};

export default useLocalStorage;
