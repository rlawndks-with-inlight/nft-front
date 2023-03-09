import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

SignUp.propTypes = {
    
};

function SignUp(props) {
    return (
        <div>

<section className="tf-page-title style-2">    
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumbs">
                                <li><Link to="/blog-v2">Home</Link></li>
                                <li>Sign Up</li>
                            </ul>
                   
                        </div>
                    </div>
                </div>                    
            </section>
                
            <section className="tf-login">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="tf-heading style-2">
                                <h4 className="heading">회원가입</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-9 col-md-12">
                            <form action="#" id="contactform">
                                <fieldset><input id="name" name="name" tabindex="1" aria-required="true" required="" type="text" placeholder="아이디를 입력해 주세요." /></fieldset>
                               <fieldset> <input id="showpassword" name="password" tabindex="2" aria-required="true"  type="password" placeholder="비밀번호를 입력해 주세요." required="" />
                                <span className="btn-show-pass"><i className="far fa-eye-slash"></i></span></fieldset>
                                <fieldset className="mb24"> <input id="showpassword2" name="password" tabindex="2" aria-required="true"  type="password" placeholder="비밀번호를 한번 더 입력해 주세요." required="" />
                                    <span className="btn-show-pass2"><i className="far fa-eye-slash"></i></span></fieldset>
                                <div className="forgot-pass-wrap">
                                    <label>이용약관 동의
                                        <input type="checkbox" />
                                        <span className="btn-checkbox"></span>
                                    </label>
                                </div>
                                {/* <div className="title-login">Or login with social</div>
                                <div className="button-gg"><Link to="#" ><i className="fab fa-facebook"></i>Facebook</Link></div>
                                <div className="button-gg mb33"><Link to="#" ><i className="fab fa-google"></i>Google</Link>
                                </div> */}
                                <button className="submit" type="submit">회원가입</button>
                            </form>
                        
                            
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default SignUp;