// -- core
import { useState, useEffect } from "react";

import axios from "axios";

const useFetch = (url, config) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // -- call API by Fetch
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((resData) => {
    //     setData(resData); // response data
    //   });

    // call Api by Axios
    axios({
      ...config,
      url: url,
    }).then((response) => {
      setData(response.data);
    });
  }, [url, config]);

  return {
    data, // returnnya object
  };
};
export default useFetch;
