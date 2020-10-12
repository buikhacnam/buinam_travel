import React from 'react'
import {Link} from "react-router-dom";

export default function BannerTwo({children, subtitle}) {
    return (
        <div className="bannerTwo">
          
                 <h2>{subtitle}</h2>
             
            <Link to="/tours" className="btn-primary-2">xem tours khác</Link>
           
            {children}
            
        </div>
    )
}
