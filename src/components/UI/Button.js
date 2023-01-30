import styles from "./Button.module.css";

const Button = ({ type, text, closeFn }) => {
  return (
    <>
      {type === "button" && (
        <button
          className={styles["button-message"]}
          type={type}
          onClick={() => closeFn("none")}
        >
          {text}
        </button>
      )}
      {type === "submit" && (
        <button className={styles.button} type={type}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
