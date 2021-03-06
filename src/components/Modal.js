import React from 'react';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";
import {FaTimes} from 'react-icons/fa';




const btnStyle = {
    position: "absolute",
    top: 0,
    right: 0   
}

export default function Modal({open, children, onClose}) {
    
    
    if(!open) {
        return null;
    }
    
    
    
    return ReactDom.createPortal(
       <>
            <div className="overlay" />
            
            <div className="modal">
                
                <button style={btnStyle} className="btn-primary-2" onClick={onClose}><FaTimes /></button>
                <h1><i className="fas fa-check-circle"></i></h1>
                <h3>Gửi yêu cầu thành công!</h3>
                <h5>Chúng tôi sẽ liên hệ tới quý khách trong vài phút</h5>
                {children}
                <Link to="#" style={{marginTop: "10px"}} className="btn-primary">Thanh toán ngay</Link>

                
            </div>
        </>, document.getElementById('portal')
    )
}


