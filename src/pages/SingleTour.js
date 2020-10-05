import React, { Component } from 'react';
import {TourContext} from '../context';
import {Link} from "react-router-dom";
import Slider from "react-slick";

export default class SingleTour extends Component {
   
   constructor(props) {
       super(props);
       //console.log(props);
       this.state = {
           slug: this.props.match.params.slug
       }
   }

   static contextType = TourContext;
   
    render() {

        const { getTour } = this.context;
        const tour = getTour(this.state.slug);

        if(!tour) {
            return (
                <div className="error">
                    <h3>Không Tìm Thấy Tour :( </h3>
                        <Link to="/tours" className="btn-primary">Quay lại Tours</Link>
                </div>
            )
        }
        const {images} = tour;
        
        const heroStyle = {
            height: "70vh",
            background: `url(${images[1]}) center/cover no-repeat`
        }
        

        const setting = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slideToScroll: 1
            
        }
        
        return (
            <>
                
                    <Slider {...setting}>
                    
                        
                            <div style={heroStyle}>
                                <img src={images[0]} alt="" width="100%" />
                            </div>
                        
                            <div style={heroStyle}>
                            <img src={images[1]} alt="" width="100%" />
                            </div>
                    
                    
                    </Slider>
               
            </>
        )
    }
}
