import { useState, useCallback } from "react";
import Button from "../foundation/button/Button";
import Card from "../common/card/Card";
import classes from "./content.module.scss";
import useBabyNames from "../hooks/useBabyNames";
import getOrdinal from "../../utils/getOrdinal";

function Content() {
  const { babyGirls, babyBoys } = useBabyNames();
  const [babyChoosen, setBabyChoosen] = useState<string[] | null>(null);
  const [isGirl, setIsGirl] = useState(true);

  const randomBaby = (arr: string[][]) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const onClickGirl = useCallback(() => {
    if (!babyGirls) return;
    const randomBabyGirl = randomBaby(babyGirls);
    setBabyChoosen(randomBabyGirl);
    setIsGirl(true);
  }, [babyGirls]);

  const onClickBoy = useCallback(() => {
    if (!babyBoys) return;
    const randomBabyGirl = randomBaby(babyBoys);
    setBabyChoosen(randomBabyGirl);
    setIsGirl(false);
  }, [babyBoys]);

  if (!babyBoys || !babyGirls) {
    return null;
  }

  const nameMessage = (baby: string[]) => {
    const rankNumber = Number(baby[5]) > 1 ? getOrdinal(baby[5]) : "";
    return `${baby[3]} is the ${rankNumber} most used name among ${baby[2]} babies`;
  };

  return (
    <div className={classes.cmpNameGenerator}>
      <h2 className={classes.cmpNameGeneratorTitle}>
        CHOOSE THE GENDER AND FIND OUT WHAT NAME IS EXPECTING FOR YOUR BABY
      </h2>
      <div className={classes.cmpNameGeneratorButtonGroup}>
        <Button onClick={onClickBoy}>BOY</Button>
        <Button onClick={onClickGirl}>GIRL</Button>
      </div>
      {babyChoosen && (
        <>
          <Card isGirl={isGirl} babyName={babyChoosen[3]} />
          <p>{nameMessage(babyChoosen).toUpperCase()}</p>
        </>
      )}
    </div>
  );
}

export default Content;
