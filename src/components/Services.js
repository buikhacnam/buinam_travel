import React, { Component } from 'react';
import {FaHiking, FaPhoneAlt, FaPiggyBank, FaCrown} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services : [
            {
                icon: <FaCrown />,
                title: "Chất Lượng Hàng Đầu"
            },
            {
                icon: <FaPiggyBank />,
                title: "Bảo đảm giá tốt nhất"
            },
            {
                icon: <FaPhoneAlt />,
                title: "Đội ngũ tư vấn nhiệt tình"
            },
            {
                icon: <FaHiking />,
                title: "Hướng dẫn viên chuyên nghiệp"
            }
        ]
    }
    
    render() {
        return (
            <div className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }
}
