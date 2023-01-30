import UserItem from "./UserItem";

const UsersList = ({ list }) => {
  return (
    <div>
      {list.map((el) => {
        return <UserItem name={el.name} age={el.age} key={el.id} />;
      })}
    </div>
  );
};

export default UsersList;
