import { buttonStyles } from "../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "xyz" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
  return (
    <button className={buttonStyles({ variant, size })} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
