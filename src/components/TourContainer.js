import React from 'react';
import {TourContext} from '../context';
import {useContext} from 'react';
import Loading from "./Loading";
import TourFilter from "./TourFilter";
import TourList from './TourList';

export default function TourContainer() {
    const context = useContext(TourContext);
    const {loading, sortedTours, tours} = context;

   
        
     
        if (loading) {
            return <Loading />
        }
        
        return (
            <>
                <TourFilter tours={tours} />
                <TourList tours ={sortedTours} />
            </>
        )
    
}
