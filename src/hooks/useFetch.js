import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log("Error");
            throw Error("Could not fetch data");
          }
        })
        .then((json) => {
          setData(json);
          setError(null);
          setLoading(false);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Not updating");
          } else {
            console.log("ERROR124", error.message);
            setError(error.message);
            setLoading(false);
          }
        });
    }, 1000);

    return () => {
      console.log("Clean Up");
      abortCont.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
