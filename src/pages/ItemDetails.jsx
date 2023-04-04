import React, { useState } from "react";
import PropTypes from "prop-types";
import PageTitle from "../components/pagetitle/PageTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/images/product/product1.png";
import data from "../assets/fake-data/data-hotpick";
import icon1 from "../assets/images/icon/rain1.svg";
import icon2 from "../assets/images/icon/rain2.svg";
import icon3 from "../assets/images/icon/ethe.svg";
import CardModal from "../components/layouts/CardModal";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import avt1 from "../assets/images/author/author1.png";
import avtd1 from "../assets/images/author/author1.png";
import avtd2 from "../assets/images/author/author1.png";
import avtd3 from "../assets/images/author/author1.png";
import avtd4 from "../assets/images/author/author1.png";
import avtd5 from "../assets/images/author/author1.png";
import avtd6 from "../assets/images/author/author1.png";
import avtd7 from "../assets/images/author/author1.png";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { commarNumber, makeQueryObj } from "../functions/utils";
import { backUrl, defaultImageSrc, onlyLogoSrc } from "../data/Data";
import theme from "../styles/theme";
import Loading from "../components/Loading";
import { Icon } from "@iconify/react";

ItemDetails.propTypes = {};

function ItemDetails(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabDetails, setTabDetails] = useState([
    {
      id: 1,
      heading: "현재 소유인",
      avt: avtd1,
      name: "Surrogatess",
    },
    {
      id: 2,
      heading: "생성인",
      avt: avtd2,
      name: "Truman Wallaker",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!location.state && !location.search) {
      toast.error("잘못된 접근입니다.");
      navigate("/");
    } else {
      getItem();
    }
  }, [location]);
  const getItem = async () => {
    let obj = makeQueryObj(location.search);
    if (!obj?.pk) {
      toast.error("잘못된 접근입니다.");
      navigate("/");
    }
    const { data: response } = await axios.get(`/api/product?pk=${obj?.pk}`);
    setItem(response?.data?.item);
    setItems(response?.data?.items ?? []);
    setHistories(response?.data?.history ?? []);
    setLoading(false);
  };
  const onChangeHeart = async () => {
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
      setItem(obj);
    } else {
      toast.error(response?.message);
    }
  };
  const onChangeHearts = async (item, idx) => {
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
    <div>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <PageTitle sub="마켓" title={item?.name} />
          <section className="tf-item-detail">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="tf-item-detail-inner">
                    <div className="image">
                      <img
                        src={
                          item?.img_src
                            ? backUrl + item?.img_src
                            : defaultImageSrc
                        }
                        alt="Binasea"
                        style={{ maxWidth: "700px", width: "100%" }}
                      />
                    </div>
                    <div className="content" style={{ width: "100%" }}>
                      <div className="content-top">
                        <div className="author" />
                        <div className="wishlish">
                          <div
                            className="number-wishlish"
                            style={{ cursor: "pointer" }}
                            onClick={onChangeHeart}
                          >
                            <i
                              className="fas fa-heart"
                              style={{
                                color: `${
                                  item.is_heart ? theme.color.red : ""
                                }`,
                              }}
                            ></i>
                            {item?.heart_count ?? 0}
                          </div>
                        </div>
                      </div>
                      <h2 className="title-detail">
                        {item?.name} #{item?.pk}
                      </h2>
                      <p className="except" style={{ whiteSpace: "pre" }}>
                        마감일: {item?.end_date}
                      </p>
                      <p className="except" style={{ whiteSpace: "pre" }}>
                        {item?.note}
                      </p>

                      <Tabs className="tf-tab">
                        <TabList className="menu-tab ">
                          <Tab className="tab-title">
                            <div style={{ cursor: "pointer" }}>자세히</div>
                          </Tab>
                          <Tab className="tab-title ">
                            <div style={{ cursor: "pointer" }}>히스토리</div>
                          </Tab>
                        </TabList>

                        <TabPanel>
                          <div className="tab-details">
                            <div className="top">
                              {item?.owner_pk > 0 ? (
                                <>
                                  <div className="author">
                                    <div className="heading">현재 소유인</div>
                                    <div className="infor">
                                      <img
                                        src={
                                          item?.owner_profile_img
                                            ? backUrl + item?.owner_profile_img
                                            : defaultImageSrc
                                        }
                                        alt="Binasea"
                                        style={{
                                          width: "36px",
                                          height: "36px",
                                        }}
                                      />
                                      <h6 className="name">
                                        {item.owner_nickname}
                                      </h6>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}

                              <div className="author">
                                <div className="heading">생성인</div>
                                <div className="infor">
                                  <img
                                    src={
                                      item?.user_profile_img
                                        ? backUrl + item?.user_profile_img
                                        : defaultImageSrc
                                    }
                                    alt="Binasea"
                                    style={{ width: "36px", height: "36px" }}
                                  />
                                  <h6 className="name">{item.user_nickname}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="title-propepties">속성</div>
                            <ul className="properties">
                              {item?.property_list &&
                                item?.property_list.map((item, idx) => (
                                  <>
                                    <li>
                                      <Link
                                        to={location.pathname + location.search}
                                      >
                                        {item?.name}
                                      </Link>
                                    </li>
                                  </>
                                ))}
                            </ul>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="tab-details">
                            <ul className="tab-bid" style={{ width: "100%" }}>
                              {histories &&
                                histories.map((item, idx) => (
                                  <li key={idx}>
                                    <div className="box-bid">
                                      <div className="image-bid">
                                        <img
                                          src={
                                            item?.user_profile_img
                                              ? backUrl + item?.user_profile_img
                                              : defaultImageSrc
                                          }
                                          alt="Binasea"
                                          style={{
                                            width: "36px",
                                            height: "36px",
                                          }}
                                        />
                                      </div>
                                      <div className="infor">
                                        <div className="history">
                                          {item.note}
                                        </div>
                                        <div className="time">{item.date}</div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </TabPanel>
                      </Tabs>

                      <div className="content-bottom">
                        <div className="heading">
                          <h6>최고 경매액</h6>
                          <div className="price">
                            <div className="icon">
                              <img
                                src={backUrl + item?.wallet?.img_src}
                                style={{ height: "18px", width: "auto" }}
                              />
                            </div>
                            <span>
                              {commarNumber(item?.max_price ?? 0)}{" "}
                              {item?.wallet?.unit}
                            </span>
                          </div>
                        </div>
                        <div className="button">
                          <div
                            className="tf-button"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            style={{ cursor: "pointer" }}
                            onClick={() => setModalShow(true)}
                          >
                            입찰하기
                          </div>
                          {/* <div to="#" className="tf-button">
                            Save for later
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="tf-explore-more">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="tf-heading">
                    <h4 className="heading">상품 더 찾기</h4>
                  </div>
                </div>

                {items &&
                  items.map((item, idx) => (
                    <div
                      key={idx}
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tf-loadmore 3d cyber"
                    >
                      <div className="sc-product style2">
                        <div className="top">
                          <Link
                            to={`/item-details?pk=${item?.pk}`}
                            className="tag"
                          >
                            {item.name} #{item?.pk}
                          </Link>
                          <div
                            className="wish-list"
                            style={{
                              background: `${
                                item?.is_heart ? theme.color.red : ""
                              }`,
                            }}
                            onClick={() => {
                              onChangeHearts(item, idx);
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
            </div>

            <CardModal
              show={modalShow}
              item={item}
              onHide={() => setModalShow(false)}
            />
          </section>
        </>
      )}
    </div>
  );
}

export default ItemDetails;