import classes from "./card.module.scss";

interface ICardProps {
  babyName: string;
  isGirl: boolean;
}

function Card({ babyName, isGirl }: ICardProps) {
  const compliments = ["beautiful", "pretty", "lovely", "cute", "wonderful"];
  const { length } = compliments;
  const randomCompliments =
    compliments[Math.floor(Math.random() * length)].toUpperCase();

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
