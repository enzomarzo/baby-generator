interface IButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

function Button(props: IButtonProps) {
  const { children, type } = props;
  return <button type={type || "button"}>{children}</button>;
}

export default Button;
