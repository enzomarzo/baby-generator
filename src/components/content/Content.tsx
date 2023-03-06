import Button from "../foundation/button/Button";
import Card from "../common/card/Card";
import classes from "./content.module.scss";

function Content() {
  return (
    <div className={classes.cmpNameGenerator}>
      <div className={classes.cmpNameGeneratorButtonGroup}>
        <Button>MALE</Button>
        <Button>FEMALE</Button>
      </div>
      <Card />
    </div>
  );
}

export default Content;
