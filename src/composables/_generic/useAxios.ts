import axios from 'axios';

const useAxios = () => {
  const get = async (endpoint: string, headers?: Object) => {
    try {
      const response = await axios.get(endpoint, headers);
      const data = response?.data;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  // RETURN
  return {
    get,
  };
};

export default useAxios;
