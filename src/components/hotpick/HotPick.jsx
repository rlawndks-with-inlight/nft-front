import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.scss";
import CardModal from "../layouts/CardModal";
import { Dropdown } from "react-bootstrap";

import icon1 from "../../assets/images/icon/rain1.svg";
import icon2 from "../../assets/images/icon/rain2.svg";
import icon3 from "../../assets/images/icon/ethe.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { backUrl, logoSrc, onlyLogoSrc } from "../../data/Data";
import { commarNumber } from "../../functions/utils";

HotPick.propTypes = {
  data: PropTypes.array,
};

function HotPick(props) {
  const [modalShow, setModalShow] = useState(false);
  const { data } = props;
  const [dataTab, setDataTab] = useState([]);
  const [items, setItems] = useState([]);
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data: response } = await axios.get(
      `/api/items?table=item_category&status=1`
    );
    setDataTab(response?.data);
    getItems(response?.data[0]?.pk);
  };

  const getItems = async (category_pk) => {
    const { data: response } = await axios.get(
      `/api/items?table=item&status=1&category_pk=${category_pk}`
    );
    console.log(response);
    setItems(response?.data);
  };
  return (
    <section className="tf-section tf-hot-pick tf-filter">
      <div className="tf-container">
        <div className="row ">
          <div className="col-md-12">
            <div className="tf-heading mb32 wow fadeInUp">
              <h4 className="heading">Hot Picks</h4>
            </div>
          </div>
          <div className="col-md-12">
            <Tabs>
              <div className="d-flex justify-content-between mb-wr">
                <TabList>
                  {dataTab.map((item) => (
                    <Tab
                      key={item.pk}
                      onClick={() => {
                        getItems(item?.pk);
                      }}
                    >
                      {item.name}
                    </Tab>
                  ))}
                </TabList>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="">
                    최근 생성된 상품
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">
                      <li>
                        <span>최근 상장된 상품</span>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li className="active">
                        <span>최근 생성된 상품</span>
                      </li>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <li>
                        <span>최근 판매된 상품</span>
                      </li>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="row tf-filter-container wow fadeInUp">
                {items &&
                  items.map((item, idx) => (
                    <div
                      key={idx}
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d cyber"
                    >
                      <div className="sc-product style2">
                        <div className="top">
                          <Link to="/item-details" className="tag">
                            {item.name} #{item?.pk}
                          </Link>
                          <div className="wish-list">
                            <Link to="#" className="heart-icon"></Link>
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="details-product">
                            <div className="author">
                              <div className="avatar">
                                <img
                                  src={
                                    item.user_profile_img
                                      ? backUrl + item.user_profile_img
                                      : onlyLogoSrc
                                  }
                                  alt="images"
                                />
                              </div>
                              <div className="content">
                                <div className="position">작성자</div>
                                <div className="name">
                                  {" "}
                                  <Link to="#">{item.nickname}</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="features">
                          <div className="product-media">
                            <img
                              src={
                                item.img_src
                                  ? backUrl + item?.img_src
                                  : onlyLogoSrc
                              }
                              alt="images"
                            />
                          </div>
                        </div>
                        <div className="bottom-style2">
                          <div className="price">
                            <div className="icon">
                              <img src={backUrl + item.wallet_img} alt="images" />
                            </div>
                            <div className="content">
                              <div className="name">{item.wallet_unit}</div>
                              <div className="cash">{commarNumber(item.price)}</div>
                            </div>
                          </div>
                          <div className="product-button">
                            <Link
                              to=""
                              onClick={() => setModalShow(true)}
                              className="tf-button"
                            >
                              {" "}
                              구매하기
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Tabs>
          </div>
        </div>

        <div className="col-md-12">
          <div className="btn-loadmore mt17 wow fadeInUp">
            <Link to="/explore" className="tf-button loadmore style-4">
              더 불러오기
            </Link>
          </div>
        </div>
      </div>

      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}

export default HotPick;
