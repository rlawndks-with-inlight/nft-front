import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import img from '../../assets/images/product/product10.png'
import shape1 from '../../assets/images/product/product10.png'
import shape2 from '../../assets/images/product/product11.png'
import shape3 from '../../assets/images/product/product12.png'
import shape4 from '../../assets/images/product/product9.png'

Create2.propTypes = {
    
};

function Create2(props) {
    return (
        <section className="tf-section tf-banner-create banner3" >
                <div className="tf-container">
                    <div className="row vertical-middle">
                        <div className="col-md-6">
                            <div className="content-banner ">
                                <h2 className="wow fadeInUp">
                                    당신의 <span>NFT</span> 를
                                    <br/>
                                    생성하고 
                                    <br/>
                                    구매하세요 </h2>
                                <p className="wow fadeInUp">NOWNFT에서 원하는 NFT를 찾아보세요. </p>
                                <div className="group-btn wow fadeInUp">
                                    <Link to="/create" className="tf-button style-2 btn-1">생성하기</Link>
                                    <Link to="/explore" className="tf-button style-3 btn-2">구매하기</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-right">
                                <div className="thumb">
                                    <img className="ani4" src={shape1} alt="images" style={{maxWidth:'650px'}} />
                                    <img className="details-thumb" src={shape2} alt="images" style={{maxWidth:'650px'}}/>
                                    <img className="details-thumb2 ani4" src={shape3} alt="images" style={{maxWidth:'230px'}}/>
                                    <img className="details-thumb3 ani5" src={shape4} alt="images" style={{maxWidth:'154px'}}/>
                                    <img className="details-thumb4" src={img} alt="images" style={{maxWidth:'650px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Create2;