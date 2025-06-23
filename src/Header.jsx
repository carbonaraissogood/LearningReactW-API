const Header = ({ title = "Default Title"}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  )
}

export default Header;