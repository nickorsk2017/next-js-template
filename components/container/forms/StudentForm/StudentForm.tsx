import {TextInput} from "@ui";
import { useForm } from "react-hook-form";
import styles from './StudentForm.module.css';

export function StudentForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    //console.log(watch());
    console.log('render');
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h3>New student</h3>
            <TextInput
                errors={errors}
                label={"First name"}
                name="first_name"
                register={register({ required: "First name is required", maxLength: {value: 20, message: "Maximum of length is 20 "} })}
            />
            <TextInput
                errors={errors}
                label={"Last name"}
                name="last_name"
                register={register(
                    {
                        pattern: {value: /^[A-Za-z]+$/i, message: "Is not valid"}, 
                        required: "Last name is required"
                    }
                )}
            />
             <TextInput
                errors={errors}
                label={"Address"}
                name="address"
                register={register()}
            />

            <button type="submit">Submit</button>
        </form>
    )
}