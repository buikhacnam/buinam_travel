import React, { Component } from 'react';
import {TourContext} from '../context';
import {Link} from "react-router-dom";

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
        const {name, continent, departure, price, duration, description, destinations, images} = tour;

        const heroStyle = {
            minHeight: "70vh",
            background: `url(${images[1]}) center/cover no-repeat`
        }
        
        return (
            <>
                <div style={heroStyle}>
                
                </div>
            </>
        )
    }
}
