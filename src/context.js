import React, { Component } from 'react';
import items from './data';

const TourContext = React.createContext();


class TourProvider extends Component {
    
    state = {
        tours: [],
        sortedTours: [],
        featuredTours: [],
        loading: true
    }

    componentDidMount() {
        let tours = this.formatData(items);
        let featuredTours = tours.filter(tour => tour.featured === true);
        this.setState({
            tours,
            featuredTours,
            sortedTours: tours,
            loading: false
        })
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let tour = {...item.fields, id, images};
            return tour;
        })
        return tempItems;
    }
    render() {
        return (
            <TourContext.Provider value={{...this.state}}>
                {this.props.children}
            </TourContext.Provider>
        )
    }
}

const TourConsumer = TourContext.Consumer;

export {TourContext, TourProvider, TourConsumer};