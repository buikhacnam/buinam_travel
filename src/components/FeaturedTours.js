import React, { Component } from 'react';
import {TourContext} from '../context';
import Loading from './Loading';
import TitleTwo from './TitleTwo';
import Tour from './Tour';

export default class FeaturedTours extends Component {
    static contextType = TourContext;
  
    render() {
        let {loading, featuredTours: tours} = this.context;
        tours = tours.map(tour => {
            return <Tour key={tour.id} tour={tour} />
        })

        return (
            <section className="featured-tours">
                <TitleTwo title="Tours đặc biệt" />
                <div className="featured-tours-center">
                    {loading ? <Loading /> : tours}
                </div>
            </section>
        )
    }
}
