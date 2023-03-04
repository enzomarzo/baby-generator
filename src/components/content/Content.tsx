import "./content.scss";
import Button from "../foundation/button/Button";

function Content() {
  return (
    <div className="cmp-name-generator">
      <div className="cmp-name-generator_button-group">
        <Button>MALE</Button>
        <Button>FEMALE</Button>
      </div>
    </div>
  );
}

export default Content;
