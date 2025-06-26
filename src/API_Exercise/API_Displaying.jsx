import { useEffect, useState } from 'react'
import Form from './Form';
import ItemList from './ItemList';
import Users_Table from './Users_Table';
import Posts_Table from './Posts_Table';
import Comments_Table from './Comments_Table';

const API_Displaying = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);

        if (!response.ok) throw Error('Did not received data');

        const data = await response.json();

        setIsLoading(true);

        setItems(data);

      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();

  }, [reqType])

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {fetchError && <p>{fetchError}</p>}

      {!isLoading && !fetchError &&
      ( 
        <>
          <Form
          reqType={reqType}
          setReqType={setReqType}
        >
        </Form>

        {/* <ItemList
          items={items}>
        </ItemList> */}

        {reqType==='users' && <Users_Table
          items={items}>
        </Users_Table>}

        {reqType==='posts' && <Posts_Table
          items={items}>
        </Posts_Table>}

        {reqType==='comments' && <Comments_Table
          items={items}>
        </Comments_Table>}

        </>
      )}

    </div>
  )
}

export default API_Displaying
