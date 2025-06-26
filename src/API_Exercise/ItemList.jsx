import LineItem from "./LineItem"

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}></LineItem>
      ))}
    </ul>
  )
}

export default ItemList
