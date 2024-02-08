import React, { useState } from "react";

const useApi = (fun) => {
  const [apiData, setApiData] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const { loading, error, data } = apiData;

  const handleDealApi = async (formData) => {
    setApiData((pre) => ({ ...pre, loading: true }));
    const res = await fun(formData);
    if (res.error) {
      setApiData((pre) => ({ ...pre, loading: false, error: res.msg }));
    } else {
      setApiData((pre) => ({ ...pre, loading: false, data: res.data }));
    }
  };
  return {handleDealApi, loading, error, data};
};

export default useApi;
