import styles from "./Button.module.css";

const Button = ({ type, text }) => {
  return (
    <button
      className={type === "button" ? styles["button-message"] : styles.button}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
