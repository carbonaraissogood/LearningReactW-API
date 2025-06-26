const Comments_Table = ({ items }) => {
  return (
    <table>
       <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.postId}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Comments_Table
