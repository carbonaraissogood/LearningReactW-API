import styles from './API_Displaying.module.css';

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button 
      className={`${styles.button} ${buttonText === reqType ? styles.selected : ''}`}
      type="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
}

export default Button;
