import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedTours from '../components/FeaturedTours';


export default function Home() {
    useEffect(()=> {
        window.scrollTo(0,0)
    }, [])
    return (
       <>
        <Hero>
            <Banner title="Đặt Tour Châu Âu!" subtitle="trải nghiệm Châu Âu chỉ từ $1999">
                <Link to="/tours" className="btn-primary">xem tours</Link>
            </Banner>
        </Hero>
        
        <Services />
        <FeaturedTours />
       </>  
    )
}
