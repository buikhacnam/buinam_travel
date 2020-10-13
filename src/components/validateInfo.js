export default function validateInfo(values) {
   let errors = {};
   if (!values.username.trim()) {
       errors.username = "tên không thể bỏ trống"
   }
   /*
   if (!values.email) {
    errors.email = 'Email không thể bỏ trống';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email không hợp lệ';
  }
  */
  if (!values.phone) {
    errors.phone = 'số điện thoại không thể bỏ trống';
  } else if (!/((09|03|07|08|05)+([0-9]{8})\b)/g.test(values.phone)) {
    errors.phone = 'Số điện thoại không hợp lệ';
  }
  
    return errors;

    
}
