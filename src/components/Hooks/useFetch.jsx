import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, initialState, deps = "") => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://restcountries.com/v2/${url}`);
      const json = res.data;
      setData(json);
      setIsLoading(false);
    };
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [deps]);

  return [isLoading, data];
};

export default useFetch;
