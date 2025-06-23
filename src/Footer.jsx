const Footer = ({ length }) => {
  
  return (
    <footer className="footer">
      {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
      <p>{length} List {length === 1 ? 'item' : 'items'}</p>
    </footer>
  )
}

export default Footer
