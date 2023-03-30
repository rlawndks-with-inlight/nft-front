import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { toast } from "react-hot-toast";
import { regExp } from "../functions/utils";
import Swal from "sweetalert2";
import axios from "axios";
SignUp.propTypes = {};

function SignUp(props) {
  const navigate = useNavigate();
  const onSignUp = () => {
    let obj = {
      id: $(".id").val(),
      pw: $(".pw").val(),
      pw_check: $(".pw_check").val(),
      name: $(".name").val(),
      nickname: $(".nickname").val(),
      phone: $(".phone").val(),
      address: $(".address").val(),
      address_detail: $(".address_detail").val(),
      //zip_code: $(".zip_code").val(),
    };
    let keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      if (!obj[keys[i]]) {
        toast.error("필수 값을 입력해 주세요.");
        return;
      }
    }
    if (!regExp("id", obj.id)) {
      toast.error("아이디 정규식에 맞지 않습니다.");
      return;
    }
    if (!regExp("pw", obj.pw)) {
      toast.error("비밀번호 정규식에 맞지 않습니다.");
      return;
    }
    if (obj["pw"] != obj["pw_check"]) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    Swal.fire({
      title: "회원가입 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data: response } = await axios.post("/api/adduser", obj);
        if (response?.result > 0) {
          toast.success("성공적으로 회원가입 되었습니다.");
          navigate("/login");
        } else {
          toast.error(response?.message);
        }
      }
    });
  };
  return (
    <div>
      <section className="tf-page-title style-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumbs">
                <li>
                  <Link to="/blog-v2">홈</Link>
                </li>
                <li>회원가입</li>
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
              <fieldset>
                <input
                  aria-required="true"
                  required=""
                  type="text"
                  placeholder="아이디를 입력해 주세요."
                  className="id"
                  autoComplete="new-password"
                />
              </fieldset>
              <fieldset>
                <input
                  aria-required="true"
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  required=""
                  className="pw"
                  autoComplete="new-password"
                />
                <span className="btn-show-pass">
                  <i className="far fa-eye-slash"></i>
                </span>
              </fieldset>
              <fieldset className="mb24">
                {" "}
                <input
                  aria-required="true"
                  type="password"
                  placeholder="비밀번호를 한번 더 입력해 주세요."
                  required=""
                  className="pw_check"
                  autoComplete="new-password"
                />
                <span className="btn-show-pass2">
                  <i className="far fa-eye-slash"></i>
                </span>
              </fieldset>
              <fieldset>
                <input
                  aria-required="true"
                  required=""
                  type="text"
                  placeholder="이름를 입력해 주세요."
                  className="name"
                />
              </fieldset>
              <fieldset>
                <input
                  aria-required="true"
                  required=""
                  type="text"
                  placeholder="닉네임을 입력해 주세요."
                  className="nickname"
                  autoComplete="new-password"
                />
              </fieldset>
              <fieldset>
                <input
                  aria-required="true"
                  required=""
                  type="text"
                  placeholder="전화번호를 입력해 주세요."
                  className="phone"
                  autoComplete="new-password"
                />
              </fieldset>
              <fieldset>
                <input
                  aria-required="true"
                  required=""
                  type="text"
                  placeholder="주소를 입력해 주세요."
                  className="address"
                  autoComplete="new-password"
                />
              </fieldset>
              <fieldset>
                <input
                  aria-required="true"
                  required=""
                  type="text"
                  placeholder="상세주소를 입력해 주세요."
                  className="address_detail"
                  autoComplete="new-password"
                />
              </fieldset>
              <div className="forgot-pass-wrap">
                <label>
                  이용약관 동의
                  <input type="checkbox" />
                  <span className="btn-checkbox"></span>
                </label>
              </div>
              {/* <div className="title-login">Or login with social</div>
                                <div className="button-gg"><Link to="#" ><i className="fab fa-facebook"></i>Facebook</Link></div>
                                <div className="button-gg mb33"><Link to="#" ><i className="fab fa-google"></i>Google</Link>
                                </div> */}
              <button className="submit" onClick={onSignUp}>
                회원가입
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
