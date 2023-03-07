import { useState, useEffect } from "react";

const useBabyNames = () => {
  const [babyNames, setBabyNames] = useState<string[][]>();
  const [error, setError] = useState(null);
  const babyGirls = babyNames?.filter((babies) => babies[1] === "FEMALE");
  const babyBoys = babyNames?.filter((babies) => babies[1] === "MALE");

  const url = "./mock.json";

  useEffect(() => {
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setBabyNames(res))
      .catch((error) => {
        setError(error);
        setBabyNames([]);
      });
  }, []);

  return {
    babyNames,
    babyGirls,
    babyBoys,
    error,
  };
};

export default useBabyNames;
