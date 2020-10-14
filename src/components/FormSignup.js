import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function FormSignup({submitForm, recentPrice, increasedPrice, decreasedPrice, person}) {
    const {handleChange, values, handleSubmit, errors, date, handleDateChange} = useForm(submitForm, validate);
    
    function increasePrice() {
      return   increasedPrice()
    }

    function decreasePrice() {
        return   decreasedPrice()
    }

    

    return (
        
        
        <div className="form-container">
            <h3 className="form-header">Đặt tour ngay!</h3>
           <form className="form" onSubmit={handleSubmit}>
            
           <div className="form-control-date">
           <label 
        htmlFor="date">Ngày Khởi Hành</label>
               <DatePicker 
                           selected={date}
                           onChange={handleDateChange}
                           
                           className="datePicker"
               />
         </div>
           
           <div className={!errors.username ? "form-control" : "form-control-error" } >
                <label htmlFor="username">
                Họ & Tên
                </label>
                <input type='text'
                        id="username"
                        name='username'
                        placeholder="nhập tên bạn"
                        value={values.username}
                        onChange={handleChange}
                       
                />
                {errors.username && <small>{errors.username}</small>}
             </div>

          

             

             <div className={!errors.phone ? "form-control" : "form-control-error" } >
                <label 
                htmlFor="phone">Số Điện Thoại</label>
                    <input  id="phone"
                            type='tel'
                            name='phone'
                            placeholder="nhập số điện thoại"
                            value={values.phone}
                            onChange={handleChange}
                    />
                    {errors.phone && <small>{errors.phone}</small>}
             </div>

             

              <div className="form-control">
              <label 
              htmlFor="price">Tổng Chi Phí</label>
                <div className="price">
                  
                <p className="self">${recentPrice}</p>
                
                
                </div>
                <div className="people">
                    <button type="button" onClick={decreasePrice}className="btn-primary">giảm</button>
                    <div className="num"><p>{person} người</p></div>
                    <button type="button" onClick={increasePrice} className="btn-primary">thêm</button>
                </div>
              
              </div>
             
             <button type="submit" style={{width: '100%', marginTop: "20px", padding: "10px"}} className="btn-primary">Yêu cầu đặt</button>
            

           </form>
        </div>
    )
}
