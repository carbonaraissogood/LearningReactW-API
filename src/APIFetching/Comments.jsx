const Comments = ({ API_URL, fetchData, setIsLoading, setFetchError, setCurrentData, activeButton, setActiveButton }) => {
  const handleUserClick = async () => {
    setActiveButton('comments');
    fetchData(`${API_URL}/comments`, setIsLoading, setFetchError, setCurrentData);
  } 
  
  return (
    <button
    style={activeButton === 'comments'
        ? { background: 'black', color: 'white' }
        : { background: 'white', color: 'black' }
      }
      onClick={handleUserClick}>
        Comments
  </button>
  )
}

export default Comments
