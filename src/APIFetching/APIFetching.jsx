import { useEffect, useState } from 'react';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';
import styles from './APIFetching.module.css';

const APIFetching = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com';

  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [currentData, setCurrentData] = useState([]);
  const [activeButton, setActiveButton] = useState('users');

  useEffect(() => {
    fetchData(`${API_URL}/users`, setIsLoading, setFetchError, setCurrentData);

    setTimeout(() => {
      fetchData(`${API_URL}/users`, setIsLoading, setFetchError, setCurrentData);
    }, 2000)

  }, [])

  const fetchData = async (URL, setIsLoading, setFetchError, setCurrentData) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) throw Error('Did not received data');
      const data = await response.json();

      setCurrentData(data);

    } catch (err) {

      setFetchError(err.message);

    } finally {

      setIsLoading(false);

    }
  };

  return (
    <div className={styles.apiFetchingContainer}>

      {isLoading && <h2>Loading...</h2>}
      {fetchError && <p>{fetchError}</p>}

      <div className={styles.buttonRow}>
        <Users
          API_URL={API_URL}
          fetchData={fetchData}
          setIsLoading={setIsLoading}
          setFetchError={setFetchError}
          setCurrentData={setCurrentData}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <Posts
          API_URL={API_URL}
          fetchData={fetchData}
          setIsLoading={setIsLoading}
          setFetchError={setFetchError}
          setCurrentData={setCurrentData}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <Comments
          API_URL={API_URL}
          fetchData={fetchData}
          setIsLoading={setIsLoading}
          setFetchError={setFetchError}
          setCurrentData={setCurrentData}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>

      <ul>
        {!isLoading && !fetchError && currentData && currentData.map((data) => (
          <li key={data.id}>{JSON.stringify(data)}</li>
        ))}
      </ul>
    </div>
  )
}

export default APIFetching
