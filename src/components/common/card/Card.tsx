import classes from "./card.module.scss";

interface ICardProps {
  babyName: string;
  isGirl: boolean;
}

function Card({ babyName, isGirl }: ICardProps) {
  const complimentsSynonyms = [
    "beautiful",
    "pretty",
    "lovely",
    "cute",
    "wonderful"
  ];
  const randomCompliments =
    complimentsSynonyms[
      Math.floor(Math.random() * complimentsSynonyms.length)
    ].toUpperCase();

  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={isGirl ? "baby-girl.png" : "baby-boy.png"}
        alt="baby"
      />
      <p className={classes.cardBabyName}>{babyName.toUpperCase()}</p>
      <p className={classes.cardComplement}>WHAT A {randomCompliments} NAME!</p>
    </div>
  );
}

export default Card;
