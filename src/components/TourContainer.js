import React, { Component } from 'react';
import {TourContext} from '../context';
import Loading from "./Loading";
import TourFilter from "./TourFilter";
import TourList from './TourList';

export default class TourContainer extends Component {
    static contextType = TourContext;

    render() {
        const {loading, sortedTours, tours} = this.context;
     
        if (loading) {
            return <Loading />
        }
        
        return (
            <>
                <TourFilter tours={sortedTours} />
                <TourList tours ={tours} />
            </>
        )
    }
}
