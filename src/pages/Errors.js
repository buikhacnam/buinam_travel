import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';


export default function Errors() {
    return (
        <Hero>
            <Banner title="404" subtitle="Không tìm thấy trang">
                <Link to="/" className="btn-primary">Trang chủ</Link>
            </Banner>
        </Hero>
    )
}
