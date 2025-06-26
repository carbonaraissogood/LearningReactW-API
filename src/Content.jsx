import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <>
      {items.length ? (

        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}>
        </ItemList>

      ) : <p>No items on the grocery list.</p>
    }  
    </>
  )
}

export default Content
