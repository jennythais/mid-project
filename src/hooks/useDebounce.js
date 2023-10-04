import { useEffect, useState } from "react";

const useDebounce = (changedValue, delayTime) => {
  const [debounceValue, setDebounceValue] = useState(changedValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(changedValue);
    }, delayTime);

    return () => clearTimeout(timeoutId);
  }, [changedValue,delayTime]);

  return debounceValue;
};

export default useDebounce;
