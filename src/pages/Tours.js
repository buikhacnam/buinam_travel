import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import TourContainer from '../components/TourContainer';


export default function Tours() {
    useEffect(()=> {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <>
        <Hero hero="toursHero" > 
            <Banner title="Lựa Chọn Kì Nghỉ!">
                <Link to="/" className="btn-primary">Về Trang chủ</Link>
            </Banner>
        </Hero>
        
        <TourContainer />
        </>
        
      
    )
}