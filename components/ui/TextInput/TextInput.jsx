import {useRef} from "react";
import { ErrorMessage } from '@hookform/error-message';
import styles from './TextInput.module.css';

export function TextInput(props) {
    const {name, register, label, defaultValue, errors} = props;
    return (
      <div className={styles.textInput}>
        {label && <label className={styles.label}>{label}</label>}
        <input className={styles.input} name={name} defaultValue={defaultValue} ref={register} />
        <ErrorMessage
          render={({message}) => <p className={styles.error}>{message}</p>} 
          errors={errors} 
          name={name}
        />
      </div>
    )
}
  