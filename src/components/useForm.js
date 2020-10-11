import {useState, useEffect} from 'react';

export default function useForm(callback, validate) {
    const [values, setValues] = useState({
        username: '',
        email: '',
        phone: ''
    })
    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
       

    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [errors]
      );
    return { handleChange, values, handleSubmit, errors};
}
