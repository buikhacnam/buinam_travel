import React, {useEffect} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function About() {
    useEffect(()=> {
        window.scrollTo(0,0)
    }, [])
    return (
        <Hero hero='aboutHero' >
                <Banner style={{lineHeight: 1.5}} title="Bui Nam Travel" subtitle="Với sứ mệnh luôn nỗ lực hết mình để tối ưu hóa nhu cầu cho khách hàng, mang lại sự hài lòng và niềm tin trọn vẹn, Bui Nam Travel đã, đang và sẽ đa dạng hóa, nâng cao chất lượng dịch vụ đặt phòng khách sạn, vé máy bay cũng như cung cấp tour du lịch với mức giá ưu đãi nhất.">
                    <Link to="/" className="btn-primary">Trang Chủ</Link>
                </Banner>
         </Hero>
    )
}
