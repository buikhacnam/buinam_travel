import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';


export default function FormSignup({submitForm, recentPrice, increasedPrice, decreasedPrice, person}) {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    
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

             <div className={!errors.email ? "form-control" : "form-control-error" } >
                <label 
                htmlFor="email">Email</label>
                    <input  id="email"
                            type='email'
                            name='email'
                            placeholder="nhập email"
                            value={values.email}
                            onChange={handleChange}
                    />
                    {errors.email && <small>{errors.email}</small>}
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
             <p>${recentPrice}</p>
             <button type="button" onClick={increasePrice}>+</button>
             <button type="button" onClick={decreasePrice}>-</button>
             <p>{person}</p>

             <button type="submit" style={{width: '100%'}} className="btn-primary">Yêu cầu đặt</button>
            

           </form>
        </div>
    )
}
