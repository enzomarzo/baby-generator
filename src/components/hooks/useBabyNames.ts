import { useState, useEffect } from "react";

const useBabyNames = () => {
  const [babyNames, setBabyNames] = useState<string[][]>();
  const babyGirls = babyNames?.filter((babies) => babies[1] === "FEMALE");
  const babyBoys = babyNames?.filter((babies) => babies[1] === "MALE");

  const url = "./mock.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setBabyNames(res));
  }, []);

  return {
    babyNames,
    babyGirls,
    babyBoys,
  };
};

export default useBabyNames;
