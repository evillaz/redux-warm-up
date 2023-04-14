import { useSelector } from 'react-redux';

const UsersContainer = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <ul>
      {users.map((user) => {
        <li key={user.userId}>
          {user}
        </li>
      })

      }
    </ul>
  );
};