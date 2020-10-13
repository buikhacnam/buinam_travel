export default function validateEmail(email) {
    let error="";
    
    if (!email) {
     error = 'Email không hợp lệ';
   } else if (!/\S+@\S+\.\S+/.test(email)) {
     error = 'Email không hợp lệ';
   }
   console.log(error)
  
    return error;
 
     
}
 