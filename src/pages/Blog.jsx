import React , {useState} from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import data from '../assets/fake-data/data-blog'
import { Link } from 'react-router-dom';
import img1 from '../assets/images/blog/recent-post-1.jpg'
import img2 from '../assets/images/blog/recent-post-2.jpg'
import img3 from '../assets/images/blog/recent-post-3.jpg'
import img4 from '../assets/images/blog/recent-post-4.jpg'

Blog.propTypes = {
    
};

function Blog(props) {

    const [dataRecent] = useState([
        {
            id: 1,
            img: img1,
            title: '올해 읽을 최고의 기업 팁.',
            cate: 'Music NFT’s'
        },
        {
            id: 2,
            img: img2,
            title: '회사를 고치려면 100단계를 수행해야 합니다.',
            cate: 'Music NFT’s'
        },
        {
            id: 3,
            img: img3,
            title: '즉시 해야 할 다음 100가지',
            cate: 'Music NFT’s'
        },
        {
            id: 4,
            img: img4,
            title: '기업에서 배워야 할 5가지 교훈',
            cate: 'Music NFT’s'
        },
    ])
    return (
        <div>

            <PageTitle none='none' title='블로그' />

            <section className="tf-blog">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="main-content">
                                {
                                    data.slice(0,3).map(idx => (
                                        <article key={idx.id} className="tf-blog-item style-2">
                                            <div className="image">
                                                <Link to="/blog-details-v1"><img src={idx.img} alt="Binasea" /></Link>
                                            </div>
                                            
                                            <div className="title">
                                                <h5><Link to="/blog-details-v1">{idx.title}</Link></h5>
                                                <Link to="/blog-details-v1" className="tf-button style-1"><span>{idx.cate}</span></Link>
                                            </div>
                                            <p className="content">{idx.text}</p>
                                            
                                            <div className="meta">
                                                <span className="admin"> <i className="fal fa-user"></i> 
                                                {idx.user}
                                            </span>
                                            <span className="date"><i className="far fa-clock"></i>{idx.time}</span>
                                            </div>
                                        </article>
                                    ))
                                }
                               
                                <div className="load-more style-2">
                                    <a className="tf-button loadmore" href="#">더 불러오기</a>
                                </div>
                            </div>                        
                        </div>  
                        <div className="col-md-4">
                            <div className="side-bar">
                                <div className="widget widget-category">
                                    <h6 className="widget-title">카테고리</h6>
                                    <ul>
                                        <li><Link to="#">Music NFT’s</Link> <span>300</span></li>
                                        <li><Link to="#">NFT 작성자</Link> <span>23</span></li>
                                        <li><Link to="#">희귀 제품</Link> <span>12</span></li>
                                        <li><Link to="#">희귀 동영상</Link> <span>76</span></li>
                                        <li><Link to="#">디지털 아트</Link> <span>123</span></li>
                                        <li><Link to="#">App Music NFT’s</Link> <span>64</span></li>
                                        <li><Link to="#">애플리케이션</Link> <span>108</span></li>
                                        <li><Link to="#">예술</Link> <span>67</span></li>
                                    </ul>
                                </div>
                                <div className="widget widget-recent-post">
                                    <h6 className="widget-title">최근 게시물</h6>
                                    <ul>
                                        {
                                            dataRecent.map(idx => (
                                                <li key={idx.id}>
                                                    <div className="post-img">
                                                        <img src={idx.img}
                                                         alt="Post New" />
                                                    </div>
                                                    <div className="post-content">
                                                        <h6 className="title"><Link to="/blog-details-v1">{idx.title}</Link></h6>
                                                        <Link to="/blog-details-v1" className="post-category">{idx.cate}</Link>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                       
                                    </ul>
                                </div>
                                <div className="widget widget-tag ">
                                    <h6 className="widget-title">인기 태그</h6>
                                    <ul>
                                        <li><Link to="#">비트코인</Link></li>
                                        <li><Link to="#">NFT</Link></li>
                                        <li><Link to="#">금액</Link></li>
                                        <li><Link to="#">디지털</Link></li>
                                        <li><Link to="#">예술</Link></li>
                                        <li><Link to="#">마켓플레이스</Link></li>
                                        <li><Link to="#">토큰</Link></li>
                                        <li><Link to="#">지갑</Link></li>
                                        <li><Link to="#">암호화</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                                     
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Blog;