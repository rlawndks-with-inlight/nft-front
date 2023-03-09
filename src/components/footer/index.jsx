import React , { useState ,useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo/logo.png';
import logodark from '../../assets/images/logo/logo_dark.png';

import './styles.scss'



function Footer(props) {

    const [productLink] = useState([
        {
            title: 'Spot',
            path: '/spot'
        },
        {
            title: 'Inverse Perpetual',
            path: '#'
        },
        {
            title: 'USDT Perpetual',
            path: '#'
        },
        {
            title: 'Exchange',
            path: '#'
        },
        {
            title: 'Launchpad',
            path: '#'
        },
        {
            title: 'Binance Pay',
            path: '#'
        },
    ]);
    const [servicesLink] = useState([
        {
            title: 'Buy Crypto',
            path: '#'
        },
        {
            title: 'Markets',
            path: '#'
        },
        {
            title: 'Tranding Fee',
            path: '#'
        },
        {
            title: 'Affiliate Program',
            path: '#'
        },
        {
            title: 'Referral Program',
            path: '#'
        },
        {
            title: 'API',
            path: '#'
        },
    ]);


    const [listSocial] = useState([
        {
            icon: 'icon-facebook-f',
            path: '#'
        },
        {
            icon: 'icon-instagram',
            path: '#'
        },
        {
            icon: 'icon-youtube',
            path: '#'
        },
        {
            icon: 'icon-twitter',
            path: '#'
        },
    ])
    

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (

        <footer className="footer">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md-3">
                            <div className="widget widget-infor">
                                <div className="logo">
                                    <img id="logo_footer" className='logo-dark' src={logodark} alt="Binasea" />
                                    <img id="logo_footer" className='logo-light' src={logo} alt="Binasea" />
                                </div>
                                <p className="content">NOWNFT에서 원하는 NFT를 찾아보세요.</p>
                                <ul className="social-item">
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-telegram-plane"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link to="#"><i className="icon-fl-tik-tok-2"></i></Link></li>
                                    <li><Link to="#"><i className="icon-fl-vt"></i></Link></li>
                                </ul>
                                <p className="copy-right">

                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-5">
                            <div className="widget widget-menu">
                                <div className="menu menu-1">
                                    <h6 className="widget-title">마켓플레이스</h6>
                                    <ul >
                                        <li><Link to="/explore">탐색</Link></li>
                                        {/* <li><Link to="/item-details">Item Detail</Link></li>
                                        <li><Link to="/live-auctions">Live Auditon</Link></li> */}
                                    </ul>
                                </div>
                                <div className="menu menu-2">
                                    <h6 className="widget-title">통계</h6>
                                    <ul >
                                        <li><Link to="/ranking">랭킹</Link></li>
                                        <li><Link to="/login">로그인</Link></li>
                                        <li><Link to="/create">생성하기</Link></li>
                                    </ul>
                                </div>
                                <div className="menu menu-3">
                                    <h6 className="widget-title">콘텐츠</h6>
                                    <ul >
                                        <li><Link to="/blog-v1">블로그</Link></li>
                                        <li><Link to="/help-center">고객센터</Link></li>
                                        <li><Link to="/faqs">FaQs</Link></li>
                                    </ul>
                                </div>
                                <div className="menu menu-4">
                                    <h6 className="widget-title">계정</h6>
                                    <ul >
                                        <li><Link to="/dashboard">프로필</Link></li>
                                        <li><Link to="/dashboard">내 지갑</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="widget widget-subcribe">
                                <h6 className="widget-title">구독</h6>
                                <p className="content">받은 편지함에서 최신 뉴스를 받으려면 뉴스레터에 가입하세요.</p>
                                <form action="#" id="subscribe-form">
                                    <input type="email" placeholder="Info@yourgmail.com" required="" id="subscribe-email" />
                                    <button className="tf-button" type="submit" id="subscribe-button"><i className="icon-fl-send"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
           </footer>
    );
}

export default Footer;