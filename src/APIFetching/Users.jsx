const Users = ({
  API_URL, fetchData, setIsLoading, setFetchError, setCurrentData,
  activeButton, setActiveButton
}) => {
  const handleUserClick = () => {
    setActiveButton('users');
    fetchData(`${API_URL}/users`, setIsLoading, setFetchError, setCurrentData);
  };

  return (
    <button
      style={activeButton === 'users'
        ? { background: 'black', color: 'white' }
        : { background: 'white', color: 'black' }
      }
      onClick={handleUserClick}
    >
      Users
    </button>
  );
};

export default Users;
