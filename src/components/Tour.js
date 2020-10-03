import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';


export default function Tour({tour}) {
   
    const {name, slug, images, price, duration, continent, departure} = tour;
  
    return (
        <Link to={`/tours/${slug}`}>
        
        <article className="tour">
            <div className="img-container-container">
                <div className="img-container">
                    <img src={images[0]} alt="tour" />
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>{duration} N {duration-1} Đ</p>
                    </div>
                </div>

                <p className="tour-info">{name}</p>
                <div className="tour-info-container">
                  
                   <p><span><i className="fas fa-clock span"></i></span>{" "}{" "}<span className="span">Lịch trình:</span>{" "}{duration} ngày {duration-1} đêm</p>
                   <p><span><i className="fab fa-telegram-plane span"></i></span>{" "}{" "}<span className="span">Khởi hành từ:</span> {" "}{departure}</p>
                   <p><span><i className="fas fa-map-marker-alt"></i></span>{" "}{" "}<span className="span">Khu vực đến:</span> {continent}</p>
                  
                </div>
            </div>
            
        </article>
        
        </Link>
    )
}
