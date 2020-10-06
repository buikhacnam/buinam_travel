import React, { Component } from 'react';
import {TourContext} from '../context';
import {Link} from "react-router-dom";
import Slider from "react-slick";
//import Banner2 from "../components/Banner2";


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
        const {images, name} = tour;
        // eslint-disable-next-line no-unused-vars
        let [mainImg, ...defaultImg] = images;
        
        const setting = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slideToScroll: 1,
            className: "slides"   
        }
        
        return (
            <>
                 <div className="slide-img-container">
                        <Slider {...setting}>
                            {defaultImg.map(image => {
                                return (
                                    <div className="slide-img">
                                        <div style={
                                            {
                                                height: "70vh",
                                                background: `url(${image}) center/cover no-repeat`
                                            }}
                                        >
                                        </div>
                                    </div>
                                )
                            })}   
                        </Slider>
                 </div>
                
            </>
        )
    }
}
