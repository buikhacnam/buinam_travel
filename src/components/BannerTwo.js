import React from 'react'
import {Link} from "react-router-dom";

export default function BannerTwo({children, subtitle}) {
    return (
        <div className="bannerTwo">
          
                 <h1>{subtitle}</h1>
             
            <Link to="/tours" className="btn-primary">xem tours khác</Link>
           
            {children}
            
        </div>
    )
}
