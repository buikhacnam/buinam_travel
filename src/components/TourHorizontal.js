import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
//import PropTypes from 'prop-types';


export default function TourHorizontal({tour, target}) {

    
   
    const {name, slug, images, price, duration, continent} = tour;
    
    useEffect(()=> {
        window.scrollTo(0,0);
        
    }, [])
   

    
    
    
  
    return (
        <Link  to={`/tours/${slug}`}  target={target}>
        
        <article className="tour" >
            <div className="img-container-container-horizontal">
                <div className="img-container">
                    <img src={images[0]} alt="tour" />
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>{duration} N {duration-1} Đ</p>
                    </div>
                    <div className="bar" />
                </div>

                <div className="script-container">
                    <p className="tour-info">{name}</p>
                    <div className="tour-info-container-horizontal">
                        <p style={{color: "black"}}><span><i className="fas fa-map-marker-alt"></i></span>{" "}{continent}</p>
                    
                    </div>
                </div>
            </div>
            
        </article>
        
        </Link>
    )
}
