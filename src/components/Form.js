import React from 'react';
import {useState} from 'react';
import FormSignUp from './FormSignup';
import FormSuccess from './FormSuccess';

export default function Form({price, children}) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [recentPrice, setRecentPrice] = useState(price);
    const [person, setPerson] = useState(1);

  function submitForm() {
    setIsSubmitted(true);
  }

  function increasedPrice() {
    setRecentPrice(recentPrice + price);
    setPerson(person + 1);
  }
  
  function decreasedPrice() {
    if (recentPrice > price) {
    setRecentPrice(recentPrice - price);
    setPerson(person - 1);
    }
  }

  
    


    return (
      
      <>
            {!isSubmitted ? 
              <div>
                <FormSignUp submitForm={submitForm} recentPrice={recentPrice} increasedPrice={increasedPrice} decreasedPrice={decreasedPrice} person={person}/>
                {children}
              </div>
             :<div> 
                <FormSignUp submitForm={submitForm} recentPrice={recentPrice} increasedPrice={increasedPrice} decreasedPrice={decreasedPrice} person={person}/> 
                <FormSuccess />
                {children}
               </div>
            }
      
      </>
        
       
    )
}
