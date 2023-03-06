import classes from "./button.module.scss";

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

function Button(props: IButtonProps) {
  const { children, type, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={classes.cmpButton}
      type={type || "button"}
    >
      {children}
    </button>
  );
}

export default Button;
