import React, { Component } from 'react';
import {FaHiking, FaCommentDots, FaPiggyBank, FaCrown} from 'react-icons/fa';


export default class Services extends Component {
    state = {
        services : [
            {
                icon: <FaCrown />,
                title: "Chất Lượng Hàng Đầu"
            },
            {
                icon: <FaPiggyBank />,
                title: "Giá trị tốt nhất"
            },
            {
                icon: <FaCommentDots />,
                title: "Tư vấn nhiệt tình"
            },
            {
                icon: <FaHiking />,
                title: "Tour guide chuyên nghiệp"
            }
        ]
    }
    
    render() {
        return (
            <div className="services">
                
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
