const Users_Table = ({ items }) => {
  return (
    <table>
       <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{JSON.stringify(item.address)}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{JSON.stringify(item.company)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Users_Table
