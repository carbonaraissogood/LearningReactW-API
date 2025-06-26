import styles from './ColorSearcher.module.css';
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form className={styles.inputForm} onSubmit={(event) => event.preventDefault()}>

      <label htmlFor="addColorValue">Add Color</label>

      <input
        className={styles.inputColorValue}
        autoFocus
        id='addColorValue'
        type="text"
        placeholder='Add Color Name'
        required
        value={colorValue}
        onChange={(event) => 
          {
            setColorValue(event.target.value);
            setHexValue(colorNames(event.target.value));
          }}
      />

      <br />

      <button
        type='button'
        style={
          {backgroundColor: colorValue}
        }
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>

    </form>
  )
}

export default Input
