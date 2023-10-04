import { useEffect } from "react";
import { useState } from "react";

const useQuery = (promise, dependencies = []) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true); //moi bat dau start = true, trong qua trinh true => false thi van la true
  const [error, setError] = useState();

  const fetchData = async (query) => {
    setLoading(true);
    try {
      const res = await promise(query);
      setData(res?.data?.data);
    } catch (error) {
      setError(error);
    } finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    data,
    error,
    loading,
    refetch: fetchData,
  };
};

export default useQuery;
