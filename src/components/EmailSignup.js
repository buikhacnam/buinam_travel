import React from 'react';
import validateEmail from './validateEmail';
import useEmail from './useEmail';


export default function EmailSignup({submitForm}) {

    const {handleChange, handleSubmit, error, email} = useEmail(submitForm, validateEmail)
    return (
    <div className="email-container" >
        <h2 className="form-header">Nhận thông tin khuyến mại hot nhất!</h2>
       <form className="form" onSubmit={handleSubmit}>
       
        <div className={!error ? "form-control" : "form-control-error" } >
                
                <input type='text'
                        id="email"
                        name='email'
                        placeholder="nhập email"
                        value={email}
                        onChange={handleChange}
                        style={{padding: '1.2rem'}}
                    
                />
                {error && <small>{error}</small>}
            </div>
            <button type="submit" style={{display: "inline-block"}} className="btn-primary">Đăng Kí</button>
        </form>
    </div>
    )
}
