import React, { useState } from "react";
import PropTypes from "prop-types";

import icon1 from "../assets/images/svg/icon-wallet-1.svg";
import icon2 from "../assets/images/svg/icon-wallet-2.svg";
import icon3 from "../assets/images/svg/icon-wallet-3.svg";
import icon4 from "../assets/images/svg/icon-wallet-4.svg";
import icon5 from "../assets/images/svg/icon-wallet-5.svg";
import icon6 from "../assets/images/svg/icon-wallet-6.svg";
import icon7 from "../assets/images/svg/icon-wallet-7.svg";
import icon8 from "../assets/images/svg/icon-wallet-8.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { backUrl } from "../data/Data";

Wallet.propTypes = {};

function Wallet(props) {
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    getWallets();
  }, []);
  const getWallets = async () => {
    const { data: response } = await axios.get(`/api/items?table=wallet`);
    setWallets(response?.data);
  };
  return (
    <div>
      <section className="tf-page-title">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumbs">
                <li>
                  <Link to="#">페이지</Link>
                </li>
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
            {wallets &&
              wallets.map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="tf-wallet">
                    <div className="icon">
                      <img src={backUrl + item?.img_src} alt="Binasea" />
                      <span className={`label ${idx.cate}`}>베타</span>
                    </div>
                    <h6 className="title">
                      <Link to="#">{item.name}</Link>
                    </h6>
                    <p className="content">{item.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wallet;
