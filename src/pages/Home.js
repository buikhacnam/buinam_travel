import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedTours from '../components/FeaturedTours';


export default function Home() {
    return (
       <>
        <Hero>
            <Banner title="tours Quốc Tế" subtitle="trải nghiệm tours chất lượng cao chỉ từ $399">
                <Link to="/tours" className="btn-primary">tìm tours</Link>
            </Banner>
        </Hero>
        
        <Services />
        <FeaturedTours />
       </>  
    )
}
