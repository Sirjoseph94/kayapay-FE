import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.error("The fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch data");
          console.error(error.message);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [data]);

  return { data, isPending, error };
};

export default useFetch;
