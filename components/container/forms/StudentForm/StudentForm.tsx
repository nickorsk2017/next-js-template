import {TextInput} from "@ui";
import { useForm } from "react-hook-form";
import styles from './StudentForm.module.css';

export function StudentForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("first_name")); 

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input name="first_name" defaultValue="" ref={register} />
            <input name="last_name" defaultValue="" ref={register} />

            <button type="submit">Submit</button>
        </form>
    )
}