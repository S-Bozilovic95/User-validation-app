import styles from "./UserItem.module.css";

const UserItem = ({ name, age }) => {
  return (
    <div className={styles["user-item"]}>
      <p>{name}</p>
      <p>({age} years old)</p>
    </div>
  );
};

export default UserItem;
