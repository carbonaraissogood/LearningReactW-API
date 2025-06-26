const Posts_Table = ({ items }) => {
  return (
    <table>
       <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Posts_Table
