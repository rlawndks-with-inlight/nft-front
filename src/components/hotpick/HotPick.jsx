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

HotPick.propTypes = {
  data: PropTypes.array,
};

function HotPick(props) {
  const [modalShow, setModalShow] = useState(false);
  const { data } = props;

  const [dataTab] = useState([
    {
      id: 1,
      title: "3D 모델",
      item: 0,
    },
    {
      id: 2,
      title: "애니/만화",
      item: 4,
    },
    {
      id: 3,
      title: "사이버 펑크",
      item: 5,
    },
    {
      id: 4,
      title: "픽셀아트",
      item: 1,
    },
    {
      id: 5,
      title: "음악",
      item: 3,
    },
    {
      id: 6,
      title: "추상적인",
      item: 7,
    },
    {
      id: 7,
      title: "2D 작품",
      item: 3,
    },
  ]);

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
                  {dataTab.map((idx) => (
                    <Tab key={idx.id}>{idx.title}</Tab>
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

              {dataTab.map((idx) => (
                <TabPanel key={idx.id}>
                  <div className="row tf-filter-container wow fadeInUp">
                    {data.slice(idx.item, 12).map((idx) => (
                      <div
                        key={idx.id}
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d cyber"
                      >
                        <div className="sc-product style2">
                          <div className="top">
                            <Link to="/item-details" className="tag">
                              {idx.title}
                            </Link>
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
                                  <div className="position">작성자</div>
                                  <div className="name">
                                    {" "}
                                    <Link to="#">{idx.create}</Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="features">
                            <div className="product-media">
                              <img src={idx.img} alt="images" />
                            </div>
                            <div className="rain-drop1">
                              <img src={icon1} alt="images" />
                            </div>
                            <div className="rain-drop2">
                              <img src={icon2} alt="images" />
                            </div>
                          </div>
                          <div className="bottom-style2">
                            <div className="price">
                              <div className="icon">
                                <img src={icon3} alt="images" />
                              </div>
                              <div className="content">
                                <div className="name">ETH</div>
                                <div className="cash">{idx.price}</div>
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
                </TabPanel>
              ))}
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
