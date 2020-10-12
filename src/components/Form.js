import React from 'react';
import {useState} from 'react';
import FormSignUp from './FormSignup';
import FormSuccess from './FormSuccess';

export default function Form({children}) {
    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
    return (
      <>
            {!isSubmitted ? 
              <div>
                <FormSignUp submitForm={submitForm} />
                {children}
              </div>
             :<div> 
                <FormSignUp submitForm={submitForm}/> 
                <FormSuccess />
                {children}
               </div>
            }
      
      </>
        
       
    )
}
