import {useState, useEffect} from 'react'

export default function useEmail(callback, validateEmail) {
    const[email, setEmail] = useState("");
    const [error, setError] =useState(null);

    const handleChange = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setError(validateEmail(email));
        setIsSubmitting(true);
    }

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(
        () => {
          if (!error && isSubmitting) {
            callback();
          }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [error]
      );
    
    return {email, handleChange, handleSubmit,error};
}
