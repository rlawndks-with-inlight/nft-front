import React , {useState} from 'react';
import PropTypes from 'prop-types';

import icon1 from '../assets/images/svg/icon-wallet-1.svg'
import icon2 from '../assets/images/svg/icon-wallet-2.svg'
import icon3 from '../assets/images/svg/icon-wallet-3.svg'
import icon4 from '../assets/images/svg/icon-wallet-4.svg'
import icon5 from '../assets/images/svg/icon-wallet-5.svg'
import icon6 from '../assets/images/svg/icon-wallet-6.svg'
import icon7 from '../assets/images/svg/icon-wallet-7.svg'
import icon8 from '../assets/images/svg/icon-wallet-8.svg'
import { Link } from 'react-router-dom';

Wallet.propTypes = {
    
};

function Wallet(props) {
    const [dataWallet] = useState([
        // {
        //     id: 1,
        //     img: icon1,
        //     cate: '',
        //     title: 'Meta Mask',
        //     text : '독자가 페이지를 접속할 때 페이지의 읽을 수 있는 콘텐츠가 산만해 보일 수 있습니다.'
        // },
        // {
        //     id: 2,
        //     img: icon2,
        //     cate: 'none',
        //     title: 'Bitski',
        //     text : '독자가 페이지를 접속할 때 페이지의 읽을 수 있는 콘텐츠가 산만해 보일 수 있습니다.'
        // },
        // {
        //     id: 3,
        //     img: icon3,
        //     cate: '',
        //     title: 'Wallet Connect',
        //     text : '독자가 페이지를 접속할 때 페이지의 읽을 수 있는 콘텐츠가 산만해 보일 수 있습니다.'
        // },
        // {
        //     id: 4,
        //     img: icon4,
        //     cate: 'none',
        //     title: 'Coin Base',
        //     text : '독자가 페이지를 접속할 때 페이지의 읽을 수 있는 콘텐츠가 산만해 보일 수 있습니다.'
        // },
        // {
        //     id: 5,
        //     img: icon5,
        //     cate: '',
        //     title: 'Authereum',
        //     text : '독자가 페이지를 접속할 때 페이지의 읽을 수 있는 콘텐츠가 산만해 보일 수 있습니다.'
        // },
        {
            id: 6,
            img: icon6,
            cate: '',
            title: 'Kaikas',
            text : ''
        },
        // {
        //     id: 7,
        //     img: icon7,
        //     cate: 'none',
        //     title: 'Torus',
        //     text : '독자가 페이지를 접속할 때 페이지의 읽을 수 있는 콘텐츠가 산만해 보일 수 있습니다.'
        // },
        // {
        //     id: 8,
        //     img: icon8,
        //     cate: '',
        //     title: 'Fortmatic',
        //     text : '독자가 페이지를 접속할 때 페이지의 읽을 수 있는 콘텐츠가 산만해 보일 수 있습니다.'
        // },
    ])
    return (
        <div>

            <section className="tf-page-title">    
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">

                            <ul className="breadcrumbs">
                                <li><Link to="#">페이지</Link></li>
                                <li>지갑</li>
                            </ul>
                   
                        </div>
                    </div>
                </div>                    
            </section>
                
            <section className="tf-connect-wallet">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="tf-heading style-5">
                                <h4 className="heading">지갑 연동하기</h4>
                                <p className="sub-heading"></p>
                            </div>
                        </div>
                        {
                            dataWallet.map(idx => (
                                <div key={idx.id} className="col-lg-4 col-md-6">
                                    <div className="tf-wallet">
                                        <div className="icon">
                                            <img src={idx.img} alt="Binasea" />
                                            <span className={`label ${idx.cate}`}>베타</span>
                                        </div>
                                        <h6 className="title"><Link to="#">{idx.title}</Link></h6>
                                        <p className="content">{idx.text}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Wallet;