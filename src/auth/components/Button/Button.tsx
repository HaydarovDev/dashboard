import "./Button.css";
const Button = ({ title, aria }: { title: string; aria: string }) => {
  return <button aria-label={aria}>{title}</button>;
};

export default Button;
