import React, { Component } from 'react';
import {TourContext} from '../context';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import BannerTwo from "../components/BannerTwo";
import Form from '../components/Form';
import Modal from '../components/Modal';



export default class SingleTour extends Component {
   
   constructor(props) {
       super(props);
       //console.log(props);
       this.state = {
           slug: this.props.match.params.slug,
           isOpen: false
       }
   }

   static contextType = TourContext;

   componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleOpen = () => {
      this.setState({
          isOpen: true
      })
  }

  handleClose = () => {
    this.setState({
        isOpen: false
    })

    
}


   
    render() {

        const { getTour } = this.context;
        const tour = getTour(this.state.slug);

        if(!tour) {
            return (
                <div className="error">
                    <h3>Không Tìm Thấy Tour :( </h3>
                        <Link to="/tours" className="btn-primary">Quay lại Tours</Link>
                </div>
            )
        }
        const {images, name, departure, price, duration, description, services} = tour;
        
        // eslint-disable-next-line no-unused-vars
        let [mainImg, ...defaultImg] = images;
        
        const setting = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slideToScroll: 1,
            className: "slides"   
        }
        
        return (
            <>
                 <div className="slide-img-container">
                        <Slider {...setting}>
                            {defaultImg.map((image, index) => {
                                return (
                                    <div className="slide-img" key={index}>
                                        <div className = "theme" style={
                                            {
                                                height: "70vh",
                                                background: `url(${image}) center/cover no-repeat`
                                            }}
                                        >
                                        <BannerTwo  subtitle={name}>
                                          </BannerTwo>
                                        </div>
                                    </div>
                                )
                            })}   
                        </Slider>
                        <div className="information">
                    
                            <div className="tour-description">
                                <h3>Thành Phố {name}</h3>
                                <p>{description}</p>

                                <div className="single-tour-info">
                                    <h3>Thông Tin Tour</h3>
                                    <p>Địa điểm: {name}</p>
                                    <p>Khởi hành từ: {departure}</p>
                                    <p>Lịch trình tour: {duration} ngày {duration - 1} đêm</p>
                                    <p>Giá tour: ${price}</p>
                                </div>
                                <div className="extra-info">
                                    <h3>Dịch vụ kèm theo</h3>
                                    <ul className="extra">
                                        {services.map((item, index)=> {
                                            return <li key={index}><p>- {item}</p></li>
                                        })}
                                    </ul>
                                </div>
                           </div>
                      
                    
                   
                    
                        
                          <Form price={price} submitForm={this.handleOpen}>
                           
                          </Form>
                        
                     
                    
                 
                        </div>

                        <Modal open={this.state.isOpen} onClose={this.handleClose}>
                                
                        </Modal>
                 
                 
                </div>

                
                
            </>
        )
    }
}
