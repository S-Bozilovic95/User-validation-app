import Button from "../UI/Button";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ messageText, errorTypeHandler }) => {
  return (
    <div
      className={styles["message-overlay"]}
      onClick={() => errorTypeHandler("none")}
    >
      <div className={styles["message-card"]}>
        <h3>Invalid Input</h3>
        <p>{messageText}</p>
        <Button
          type={"button"}
          text={"Okay"}
          onClick={() => errorTypeHandler("none")}
        />
      </div>
    </div>
  );
};

export default ErrorMessage;
