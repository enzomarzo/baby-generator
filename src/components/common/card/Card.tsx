import classes from "./card.module.scss";

function Button() {
  return (
    <div className={classes.card}>
      <img className={classes.image} src="baby-girl.png" alt="baby" />
      <p>baby name</p>
    </div>
  );
}

export default Button;
