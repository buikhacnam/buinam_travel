import React from 'react';
import {useState, useEffect} from 'react';
import FormSignUp from './FormSignup';


export default function Form({price, submitForm, updatePrice,updatePeople, children}) {
   // const [isSubmitted, setIsSubmitted] = useState(false);
   const recent = price; 
   const [recentPrice, setRecentPrice] = useState(recent);
   const [person, setPerson] = useState(1);


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

  
  useEffect(
    () => {
      updatePrice(recentPrice);
      updatePeople(person)
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [recentPrice, person]
  )
  

  
    return (
      
    //  <>
    //        {!isSubmitted ? 
              <div>
                <FormSignUp submitForm={submitForm} recentPrice={recentPrice} increasedPrice={increasedPrice} decreasedPrice={decreasedPrice} person={person}/>
                {children}
              </div>
     //        :<div> 
      //          <FormSignUp submitForm={submitForm} recentPrice={recentPrice} increasedPrice={increasedPrice} decreasedPrice={decreasedPrice} person={person}/> 
     //           <FormSuccess />
       //         {children}
      //         </div>
       //     }
      
    //  </>
        
       
    )
}
