import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import './index.css';
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';

import ColorSearcher from './ColorSearcher/ColorSearcher';

import APIFetching from './APIFetching/APIFetching';
import API_Displaying from './API_Exercise/API_Displaying';


function App() {
  // const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchItems = async () => {
      try {

        const response = await fetch(API_URL);

        if(!response.ok) {
          throw Error('Did not received expected data');
        }

        const listItems = await response.json();

        setItems(listItems);
        setFetchError(null);

      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      fetchItems();
    }, 2000)

  }, [])

  const addItem = async (itemName) => {
    console.log(itemName);
    const myNewItem = { checked: false, itemName };
    const listItems = [...items, myNewItem];

    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);

    if(result) {
      setFetchError(result);
    }
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);

    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }

    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL, updateOptions);

    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);

    const deleteOptions = { method: 'DELETE' };
    const reqURL = `${API_URL}/${id}`;

    const result = await apiRequest(reqURL, deleteOptions);

    if (result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!newItem) {
      return;
    }

    console.log(newItem);

    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className='App'>
      {/* <Header title = "Grocery List"></Header>

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}>
      </AddItem>

      <SearchItem
        search={search}
        setSearch={setSearch}>
      </SearchItem>

      <main>
        {isLoading && <p>Loading Items...</p>}

        {fetchError && 
          <p
            style={{color: "red"}}>
            {`Error: ${fetchError}`}
          </p>
        }

        {!fetchError && !isLoading && <Content
          items={items.filter((item) =>
            (item.itemName).toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}>
        </Content>}

      </main>

      <Footer
        length={items.length}>
      </Footer> */}

      {/* <ColorSearcher></ColorSearcher> */}

      {/* <APIFetching></APIFetching> */}

      <API_Displaying></API_Displaying>

    </div>
  )
}

export default App;