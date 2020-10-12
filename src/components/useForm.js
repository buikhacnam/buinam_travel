import {useState, useEffect} from 'react';


export default function useForm(callback, validate) {
  //callback = submitForm = submitForm();
  //validate = validate = validateInfo(values)
    const [values, setValues] = useState({
        username: '',
        email: '',
        phone: ''
    })
    const [errors, setErrors] = useState({});

    const [date, setDate] = useState(new Date());


    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
       

    }

    function handleDateChange(date) {
      setDate(date)
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
            setValues({
              username: '',
              email: '',
              phone: ''
            });
          }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [errors]
      );
    return { handleChange, values, handleSubmit, errors, date, handleDateChange};
}

