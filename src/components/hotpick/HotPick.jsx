import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.scss";
import CardModal from "../layouts/CardModal";
import { Dropdown } from "react-bootstrap";

import icon1 from "../../assets/images/icon/rain1.svg";
import icon2 from "../../assets/images/icon/rain2.svg";
import icon3 from "../../assets/images/icon/ethe.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { backUrl, logoSrc, onlyLogoSrc } from "../../data/Data";
import { commarNumber } from "../../functions/utils";
import { toast } from "react-hot-toast";
import { Icon } from "@iconify/react";
import theme from "../../styles/theme";

HotPick.propTypes = {
  data: PropTypes.array,
};

function HotPick(props) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { category_list, is_limit } = props;
  const [dataTab, setDataTab] = useState([]);
  const [items, setItems] = useState([]);
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    let categoriy_arr = [
      {
        name: "전체",
      },
    ];
    if (!category_list) {
      const { data: response } = await axios.get(
        `/api/items?table=item_category&status=1`
      );
      categoriy_arr = [...categoriy_arr, ...response?.data];
    } else {
      categoriy_arr = [...categoriy_arr, ...category_list];
    }
    setDataTab(categoriy_arr);
    getItems(categoriy_arr[0]?.pk);
  };

  const getItems = async (category_pk) => {
    let api_str = `/api/items?table=item&status=1`;
    if (category_pk) {
      api_str += `&category_pk=${category_pk}`;
    }
    const { data: response } = await axios.get(api_str);
    let list = response?.data;
    if (is_limit) {
      list = list.splice(0, 8);
    }
    setItems(list);
  };
  const onChangeHeart = async (item, idx) => {
    let api_str = `/api`;
    if (item?.is_heart) {
      api_str += `/deleteheart`;
    } else {
      api_str += `/heart`;
    }
    const { data: response } = await axios.post(api_str, {
      item_pk: item?.pk,
    });
    if (response?.result > 0) {
      let obj = { ...item, is_heart: !item?.is_heart };
      if (!item?.is_heart) {
        toast.success("성공적으로 좋아요를 눌렀습니다.");
        obj["heart_count"] = obj["heart_count"] + 1;
      } else {
        obj["heart_count"] = obj["heart_count"] - 1;
      }
      let item_s = [...items];
      item_s[idx] = obj;
      setItems(item_s);
    } else {
      toast.error(response?.message);
    }
  };
  return (
    <section className="tf-section tf-hot-pick tf-filter">
      <div className="tf-container">
        <div className="row ">
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
                          <Link to={`/item-details?pk=${item?.pk}`} className="tag">
                            {item.name} #{item?.pk}
                          </Link>
                          <div
                            className="wish-list"
                            style={{
                              background: `${
                                item?.is_heart ? theme.color.red : ""
                              }`,
                            }}
                            onClick={()=>{
                              onChangeHeart(item, idx)
                            }}
                          >
                            <Icon
                              icon="mdi:cards-heart"
                              style={{
                                fontSize: theme.size.font2,
                                color: `${item?.is_heart ? "#fff" : ""}`,
                              }}
                            />
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
                              onClick={() => {
                                navigate(`/item-details?pk=${item?.pk}`);
                              }}
                            />
                          </div>
                        </div>
                        <div className="bottom-style2">
                          <div className="price">
                            <div className="icon">
                              <img
                                src={backUrl + item.wallet_img}
                                alt="images"
                              />
                            </div>
                            <div className="content">
                              <div className="name">{item.wallet_unit}</div>
                              <div className="cash">
                                {commarNumber(item.price)}
                              </div>
                            </div>
                          </div>
                          <div className="product-button">
                            <Link
                              to={`/item-details?pk=${item?.pk}`}
                              //onClick={() => setModalShow(true)}
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
