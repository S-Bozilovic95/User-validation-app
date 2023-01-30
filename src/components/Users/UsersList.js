import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

const UsersList = ({ allUsers }) => {
  return (
    <div className={styles["users-list-box"]}>
      {allUsers.map((el) => {
        return <UserItem name={el.name} age={el.age} key={el.id} />;
      })}
    </div>
  );
};

export default UsersList;
