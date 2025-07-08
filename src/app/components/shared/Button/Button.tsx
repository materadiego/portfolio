import styles from "./Button.module.scss";

type ButtonProps = {
  color: string;
  font: string;
  margin: string;
  action: () => void;
  children: React.ReactNode;
};

const Button = ({ color, font, margin, children, action }: ButtonProps) => {
  return (
    <button
      onClick={action}
      style={{ margin: margin || "0" }}
      className={`${styles.Button} ${styles[`Button__${color}`]} ${
        styles[`Button__${font}`]
      }`}
    >
      {" "}
      {children}
    </button>
  );
};

export { Button };
