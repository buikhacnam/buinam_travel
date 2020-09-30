import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Tours() {
    return (
        <Hero hero="toursHero" > 
            <Banner title="Tours quốc tế">
                <Link to="/" className="btn-primary">Trang chủ</Link>
            </Banner>
        </Hero>
      
    )
}
