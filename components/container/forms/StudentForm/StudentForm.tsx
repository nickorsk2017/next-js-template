import {TextInput} from "@ui";
import { useMutation } from '@apollo/client';
import {CREATE_STUDENT} from "../../../../graphQL/schemes";
import { useForm } from "react-hook-form";
import styles from './StudentForm.module.css';

export function StudentForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [createStudent, { data }] = useMutation(CREATE_STUDENT);
    const onSubmit = data => {
        console.log(data);
        createStudent({
            variables: {studentInput: data}
        })
    };
    //console.log(watch());
    console.log('render');

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <h3>New student</h3>
            <TextInput
                errors={errors}
                label={"First name"}
                name="firstName"
                register={register({ required: "First name is required", maxLength: {value: 20, message: "Maximum of length is 20 "} })}
            />
            <TextInput
                errors={errors}
                label={"Last name"}
                name="lastName"
                register={register(
                    {
                        pattern: {value: /^[A-Za-z]+$/i, message: "Is not valid"}, 
                        required: "Last name is required"
                    }
                )}
            />
            <TextInput
                errors={errors}
                label={"Email"}
                name="email"
                register={register({pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "is not email"}})}
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