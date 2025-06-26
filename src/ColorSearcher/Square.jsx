import styles from './ColorSearcher.module.css';

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className={styles.squareContainer}
      style={
        {
          backgroundColor: colorValue,
          color: isDarkText ? '#000' : '#FFF'
        }
      }
    >

      <p>{colorValue ? colorValue : 'Empty Value'}</p>

      <p>{hexValue ? hexValue : null}</p>

    </section>
  )
}

export default Square
