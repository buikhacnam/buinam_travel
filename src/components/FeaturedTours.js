import React, { Component } from 'react';
import {TourContext} from '../context';
import Loading from './Loading';
import TitleTwo from './TitleTwo';
import Tour from './Tour';
import {Link} from 'react-router-dom';


export default class FeaturedTours extends Component {
    static contextType = TourContext;
  
    render() {
        let {loading, featuredTours: tours} = this.context;
      
      /*  let tourFirst = tours.slice(0, 3);
        tourFirst = tourFirst.map(tour => {
            return <Tour key={tour.id} tour={tour} />
        })

        let tourSecond = tours.slice(3, 5);
        tourSecond = tourSecond.map(tour => {
            return <Tour key={tour.id} tour={tour} />
        })
        */

        tours = tours.map(tour => {
            return <Tour key={tour.id} tour={tour} />
        })


        return (
            <section className="featured-tours">
                <TitleTwo title="Tours nổi bật" />
                <div className="featured-tours-center">
                    {loading ? <Loading /> : tours}
                </div>
                <div style={{textAlign: "center"}}>
                <Link style={{marginTop: "2rem", textAlign:"center"}} to="/tours" className="btn-second">xem tất cả tour</Link>
                </div>
            </section>
        )
    }
}
