const Posts = ({ API_URL, fetchData, setIsLoading, setFetchError, setCurrentData, activeButton, setActiveButton }) => {
  const handleUserClick = async () => {
    setActiveButton('posts');
    fetchData(`${API_URL}/posts`, setIsLoading, setFetchError, setCurrentData);
  } 
  
  return (
    <button
      style={activeButton === 'posts'
        ? { background: 'black', color: 'white' }
        : { background: 'white', color: 'black' }
      }
      onClick={handleUserClick}>
        Posts
  </button>
  )
}

export default Posts
