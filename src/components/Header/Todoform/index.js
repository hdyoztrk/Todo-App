import React from 'react'
import { Formik, Field, Form } from 'formik';
import Validations from './validations';
import {useTodo} from '../../../contexts/TodoContext'

function TodoForm() {
    const {addTodo}= useTodo();
    return (
        <Formik
            initialValues={{
                text: '',
            }}
            onSubmit={(values,bag) => {
                console.log((values));
                addTodo(values.text);
                bag.resetForm();
            }}
            Validations={Validations}
        >
            <Form>
                <Field className="new-todo"
                    placeholder="What needs to be done?"
                    id="text"
                    name="text"
                    autoFocus />
            </Form>

        </Formik>
    )
}

export default TodoForm