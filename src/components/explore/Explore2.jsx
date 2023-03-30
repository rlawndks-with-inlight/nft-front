import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CardModal from "../layouts/CardModal";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

Explore2.propTypes = {
  data: PropTypes.array,
};

function Explore2(props) {
  const { data } = props;

  const [modalShow, setModalShow] = useState(false);

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
      title: "사이버펑크",
      item: 2,
    },
    {
      id: 4,
      title: "픽셀아트",
      item: 6,
    },
    {
      id: 5,
      title: "음악",
      item: 7,
    },
    {
      id: 6,
      title: "추상적인",
      item: 1,
    },
    {
      id: 7,
      title: "2D 예술",
      item: 3,
    },
  ]);
  return (
    <section className="tf-section tf-explore tf-filter tf-center">
      <div className="tf-container">
        <div className="row ">
          <div className="col-md-12">
            <div className="tf-heading style-2 wow fadeInUp">
              <h4 className="heading">마켓</h4>
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
                    {data.slice(idx.item, 8).map((idx) => (
                      <div
                        key={idx.id}
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d pixel"
                      >
                        <div className="sc-product style3">
                          <div className="features">
                            <div className="product-media">
                              <img src={idx.img} alt="images" />
                            </div>
                          </div>
                          <div className="content">
                            <div className="details-product">
                              <div className="title">
                                {" "}
                                <Link to="/item-details">{idx.title}</Link>{" "}
                              </div>
                              <div className="creator">
                                {" "}
                                <Link to="#">{idx.create}</Link>{" "}
                              </div>
                            </div>
                            <div className="price">
                              <div className="subtitle">현재 입찰가</div>
                              <div className="cash">{idx.price}</div>
                            </div>
                            <div className="profile-author">
                              <Link
                                to="#"
                                className="avatar"
                                data-tooltip="Creator: Daniel Jordan"
                                tabIndex="0"
                              >
                                <img src={idx.avt1} alt="images" />
                              </Link>
                              <Link
                                to="#"
                                className="avatar"
                                data-tooltip="Creator: Daniel Rose"
                                tabIndex="0"
                              >
                                <img src={idx.avt2} alt="images" />
                              </Link>
                              <Link
                                to="#"
                                className="avatar"
                                data-tooltip="Creator: Solvador"
                                tabIndex="0"
                              >
                                <img src={idx.avt3} alt="images" />
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
          <div className="col-md-12">
            <div className="btn-loadmore mt8 wow fadeInUp">
              <Link to="/explore" className="tf-button loadmore style-4">
                더 불러오기
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}

export default Explore2;
