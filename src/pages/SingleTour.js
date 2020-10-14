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
           isOpen: false,
           values: {
               username: "",
               phone: ""
           },
           date: "",
           price: "",
           people: ""
       }
      
   }
  
   static contextType = TourContext;

   componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleOpen = (values, date) => {
      this.setState({
          isOpen: true,
          values: {
            username: values.username,
            phone: values.phone
        },
        date: `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`,
      })
      
  }
  
  handleClose = () => {
    this.setState({
        isOpen: false
    })

    
}

updatePrice =(price) => {
    this.setState({
        price
    })
}

updatePeople =(people) => {
    this.setState({
        people
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
                      
                    
                   
                    
                        
                          <Form price={price} submitForm={this.handleOpen} updatePrice={this.updatePrice} updatePeople={this.updatePeople}>
                                        
                          </Form>
                        
                     
                    
                 
                        </div>

                        <Modal open={this.state.isOpen} onClose={this.handleClose}>
                                      
                            <div className="confirm">
                                <p>Tên Khách Hàng: {this.state.values.username}</p>
                                <p>Số điện thoại: {this.state.values.phone}</p>
                                <p>Book tour: {name}</p>
                                <p>Ngày khởi hành: {this.state.date}</p>
                                <p>Số thành viên: {this.state.people}</p>
                                <p>Chi phí: ${this.state.price}</p>
                                
                            </div>  
                        </Modal>
                 
                 
                </div>

                
                
            </>
        )
    }
}
