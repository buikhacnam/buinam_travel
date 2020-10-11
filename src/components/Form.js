import React from 'react';
import {useState} from 'react';
import FormSignUp from './FormSignup';
import FormSuccess from './FormSuccess';

export default function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
    return (
        <div>
            {!isSubmitted ? <FormSignUp submitForm={submitForm} />
        : <FormSuccess />}
        </div>
    )
}
