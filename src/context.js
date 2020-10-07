import React, { Component } from 'react';
import items from './data';

const TourContext = React.createContext();


class TourProvider extends Component {
    
    state = {
        tours: [],
        sortedTours: [],
        featuredTours: [],
        loading: true,
        continent: "tất cả",
        hanoi: false,
        saigon: false,
        minPrice: 0,
        maxPrice: 0,
        duration: "không chọn" 
    }

    componentDidMount() {
        let tours = this.formatData(items);
        let featuredTours = tours.filter(tour => tour.featured === true);
        let maxPrice = Math.max(...tours.map(item => item.price));
        let minPrice = Math.min(...tours.map(item => item.price));
       
        this.setState({
            tours,
            featuredTours,
            sortedTours: tours,
            loading: false,
            price: maxPrice,
            maxPrice,
            minPrice,
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

    getTour = (slug) => {
        let tempTours = [...this.state.tours];
        const tour = tempTours.find(tour => {
            return tour.slug === slug;
        })
        return tour;
    }

    handleChange = event => {
        const value = event.target.type === "checkbox" ? 
        event.target.checked : event.target.value;    

        this.setState (
            {
                [event.target.name]: value
            },
            this.filterTours
        )
    }

    filterTours = () => {
        let {
            tours,
            continent,
            hanoi,
            saigon,
            price,
        } = this.state;
        
        //all tours
        let tempTours = [...tours];

        //transform value
        price = parseInt(price)
        
        //filter by continent
        if(continent !== "tất cả") {
         tempTours =  tempTours.filter(tour => tour.continent === continent);
        }

        //filter by Hanoi and SaiGon
        if(hanoi) {
            tempTours = tempTours.filter(tour => tour.hanoi === true);
        }
        
        if(saigon) {
            tempTours = tempTours.filter(tour => tour.saigon === true);
        }
        //filter by price

        tempTours = tempTours.filter(tour => tour.price <= price);
        console.log(tempTours)

        
        //change state
        this.setState (
            {
                sortedTours : tempTours
            }
        )
        
    }

    render() {
        return (
            <TourContext.Provider value={{
                ...this.state,
                getTour: this.getTour,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </TourContext.Provider>
        )
    }
}

const TourConsumer = TourContext.Consumer;

export {TourContext, TourProvider, TourConsumer};