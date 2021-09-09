const useArray = () => {
  const take = (n: number, interable: [] | NodeList) => [...getTake(n, interable)];

  function* getTake(n: number, interable: [] | NodeList) {
    for (const item of interable as any) {
      if (n <= 0) return;
      n--;
      yield item;
    }
  }

  return {
    take,
  };
};

export default useArray;
