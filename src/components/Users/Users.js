import UsersList from "./UsersList";
import styles from "./Users.module.css";

const Users = ({ allUsers }) => {
  return (
    <div className={styles.users}>
      <UsersList list={allUsers} />
    </div>
  );
};

export default Users;
