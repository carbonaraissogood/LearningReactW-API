import Button from "./Button"
import styles from './API_Displaying.module.css';

const Form = ({ reqType, setReqType}) => {
  return (
    <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>

      <div className={styles.buttonContainer}>
        <Button
          buttonText="users"
          reqType={reqType}
          setReqType={setReqType}>
        </Button>

        <Button
          buttonText="posts"
          reqType={reqType}
          setReqType={setReqType}>
        </Button>

        <Button
          buttonText="comments"
          reqType={reqType}
          setReqType={setReqType}>
        </Button>
      </div>
      
    </form>
  )
}

export default Form
