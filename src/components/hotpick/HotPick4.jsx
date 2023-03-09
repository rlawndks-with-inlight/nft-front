import React , {useState} from 'react';
import PropTypes from 'prop-types';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import icon1 from '../../assets/images/icon/rain1.svg'
import icon2 from '../../assets/images/icon/rain2.svg'
import icon3 from '../../assets/images/icon/ethe.svg'
import CardModal from '../layouts/CardModal';

HotPick4.propTypes = {
    data : PropTypes.array,
};

function HotPick4(props) {

    const [modalShow, setModalShow] = useState(false);
    const {data} = props;

    const [dataTab] = useState([
        {
            id: 1,
            title: '3D MODEL',
            item: 0,
        },
        {
            id: 2,
            title: 'ANIME/MANGA',
            item: 3,
        },
        {
            id: 3,
            title: 'CYBER PUNK',
            item: 1,
        },
        {
            id: 4,
            title: 'PIXEL ART',
            item: 4,
        },
        {
            id: 5,
            title: 'MUSIC',
            item: 2,
        },
        {
            id: 6,
            title: 'ABSTRACT',
            item: 1,
        },
        {
            id: 7,
            title: '2D ARTS',
            item: 3,
        },

    ]);
    return (
        <section className="tf-section tf-hot-pick tf-filter">
                <div className="tf-container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="tf-heading style-3 mb26 wow fadeInUp">
                                <h3 className="heading">Hot Sales</h3>
                                <p className="sub-heading">The most creative creator - Based on the last 30 days </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                        <Tabs>
                                <div className="d-flex justify-content-between mb-wr">
                                    <TabList>
                                        {
                                            dataTab.map(idx => (
                                                <Tab key={idx.id}>{idx.title}</Tab>
                                            ))
                                        }
                                        
                                    </TabList>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className=''>
                                            Recently create    
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                            <li><span>최근 상장된 상품</span></li>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <li className="active"><span>최근 생성된 상품</span></li>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <li><span>최근 판매된 상품</span></li>
                                        </Dropdown.Item>
                                        
                                        </Dropdown.Menu>
                                    </Dropdown>
            
                                </div>


                                {
                                    dataTab.map(idx => (
                                        <TabPanel key={idx.id}>
                                            <div className="row tf-filter-container wow fadeInUp">
                                                {
                                                    data.slice(idx.item, 8).map(idx => (
                                                        <div key={idx.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d cyber">
                                                            <div className="sc-product style2">
                                                                <div className="top">
                                                                    <Link to="/item-details-v1" className="tag">{idx.title}</Link>
                                                                    <div className="wish-list">
                                                                        <Link to="#" className="heart-icon"></Link>
                                                                    </div>
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
                                                                    </div>
                                                                </div>
                                                                <div className="features">
                                                                    <div className="product-media">
                                                                        <img src={idx.img} alt="images" />
                                                                    </div>
                                                                    <div className="rain-drop1"><img src={icon1} alt="images" /></div>
                                                                    <div className="rain-drop2"><img src={icon2} alt="images" /></div>
                                                                </div>
                                                                <div className="bottom-style2">
                                                                    <div className="price">
                                                                        <div className="icon"><img src={icon3} alt="images" /></div>
                                                                        <div className="content">
                                                                            <div className="name">ETH</div>
                                                                            <div className="cash">{idx.price}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-button">
                                                                        <Link to="#" onClick={() => setModalShow(true)} data-toggle="modal" data-target="#popup_bid" className="tf-button"> Purchase</Link>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            
                                            </div>
                                        </TabPanel>
                                    ))
                                }
                                

                            </Tabs> 
      
                        </div>
                    </div>
    
                    <div className="col-md-12">
                        <div className="btn-loadmore wow fadeInUp">
                            <Link to="/explore-v1" className="tf-button style-8 loadmore">Explore More <i className="fas fa-long-arrow-right"></i></Link>
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

export default HotPick4;