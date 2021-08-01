import { useState, useEffect } from "react";

// Custom hook is also a function
// The function name of a custom hook must start with "use" otherwise it cannot be used
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Because the function inside useEffect is asynchronous, it may take some time to finish
  // When the function finishes execution, if the Home component is already unmounted from the DOM, an error will occur as there is no where to return to
  useEffect(() => {
    // We use the AbortController associating with a fetch request and possibly stop that request when we need to
    const abortCont = new AbortController();

    setTimeout(() => {
      // Attach the AbortController to the fetch request
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // Not trying to update the state if the error is of AbortError type
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort(); // Abort whatever fetch associating with this controller
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
