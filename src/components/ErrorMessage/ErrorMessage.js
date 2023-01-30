import Button from "../UI/Button";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ messageText, errorTypeHandler }) => {
  return (
    <div className={styles["message-overlay"]}>
      <div className={styles["message-card"]}>
        <h3>Invalid Input</h3>
        <p>{messageText}</p>
        <Button type={"button"} text={"Okay"} closeFn={errorTypeHandler} />
      </div>
    </div>
  );
};

export default ErrorMessage;
