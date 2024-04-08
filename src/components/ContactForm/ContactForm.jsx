import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css"
const ContactForm = ({ onAdd }) => {

    const nameFieldId = useId();
    const numberFieldId = useId();

const initialValues = {
                name: '',
                number: ''
        }

    const handleSubmit = (values, action) => {

        onAdd({
            name: values.name,
            number: values.number,
            id: Date.now()
        })
        action.resetForm();
    }

    
    return (
        <>
            <Formik  initialValues={initialValues} onSubmit={handleSubmit} >
            <Form className={css.addForm}>

            <div className={css.addFormChildren}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field id={nameFieldId} name="name" type="text" required />
                <ErrorMessage name="name" component="div" className="error" />
            </div>
                    
            <div className={css.addFormChildren}>
                <label htmlFor={numberFieldId}>Number</label>
                <Field id={numberFieldId} name="number" type="text" required />
                <ErrorMessage name="number" component="div" className="error" />
            </div>
                <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </>
    )


    
}


export default ContactForm;




