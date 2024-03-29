import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import icon1 from '../../assets/images/icon/rain1.svg'
import icon2 from '../../assets/images/icon/rain2.svg'
import icon3 from '../../assets/images/icon/ethe.svg'
import { Link } from 'react-router-dom';
import CardModal from '../layouts/CardModal';

LiveAutions5.propTypes = {
    
};

function LiveAutions5(props) {
    const {data} = props;
    const [modalShow, setModalShow] = useState(false);
    return (
        <section className="tf-section tf-live-auction">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-heading mb30 wow fadeInUp">
                                <h3 className="heading">Live Auctions</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                        <Swiper
                                modules={[Navigation,  Scrollbar, A11y ]}
                                spaceBetween={20}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        },
                                    767: {
                                        slidesPerView: 2,
                                    },
                                    991: {
                                        slidesPerView: 3,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                    },
                                }}
                                className="live-auction pt10 wow fadeInUp"
                                // navigation
                                loop= {true}
                            >
                            {
                                data.map(idx => (
                                    <SwiperSlide key={idx.id}>
                                        <div className="slider-item">
                                                <div className="sc-product style1">
                                                    <div className="top">
                                                        <Link to="/item-details-v1" className="tag">{idx.title}</Link>
                                                        <div className="wish-list">
                                                            <Link to="#" className="heart-icon"></Link>
                                                        </div>
                                                    </div>
                                                    <div className="features">
                                                        <div className="product-media">
                                                            <img src={idx.img} alt="images" />
                                                        </div>
                                                        <div className="featured-countdown">
                                                            <span className="js-countdown" data-timer="55555" data-labels=" ,  h , m , s "></span>
                                                        </div>
                                                        <div className="rain-drop1"><img src={icon1} alt="images" /></div>
                                                        <div className="rain-drop2"><img src={icon2} alt="images" /></div>
                                                    </div>
                                                    <div className="bottom">
                                                        <div className="details-product">
                                                            <div className="author">
                                                                <div className="avatar">
                                                                    <img src={idx.avt} alt="images" />
                                                                </div>
                                                                <div className="content">
                                                                    <div className="position">Creator</div>
                                                                    <div className="name"> <Link to="#">{idx.create}</Link></div>
                                                                </div>
                                                            </div>
                                                            <div className="current-bid">
                                                                <div className="subtitle">현재 입찰가</div>
                                                                <div className="price">
                                                                    <span className="cash">{idx.price}</span><span className="icon"><img src={icon3} alt="images" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-button">
                                                            <Link to="#" onClick={() => setModalShow(true)} data-toggle="modal" data-target="#popup_bid" className="tf-button"> <span className="icon-btn-product"></span> Place Bid</Link>
                                                        </div>
                    
                                                    </div>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                    
                                ))
                            }
                            </Swiper>
                        </div>
                        <div className="col-md-12">
                            <div className="btn-loadmore mt12 wow fadeInUp">
                                <Link to="/live-auction-v1" className="tf-button style-2 loadmore">View more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <CardModal 
                show={modalShow}
                onHide={() => setModalShow(false)} 
            />
            </section>  
    );
}

export default LiveAutions5;