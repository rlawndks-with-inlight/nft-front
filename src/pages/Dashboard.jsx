import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PageTitle from "../components/pagetitle/PageTitle";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/background/thumb-pagetitle.jpg";
import avt from "../assets/images/author/author1.png";
import { commarNumber, returnMoment } from "../functions/utils";
import img1 from "../assets/images/product/product1.png";
import img2 from "../assets/images/product/product2.png";
import img3 from "../assets/images/product/product3.png";
import img4 from "../assets/images/product/product4.png";
import img5 from "../assets/images/product/product5.png";
import img6 from "../assets/images/product/product6.png";
import icon1 from "../assets/images/svg/icon-wallet-1.svg";
import icon2 from "../assets/images/svg/icon-wallet-2.svg";
import icon3 from "../assets/images/svg/icon-wallet-3.svg";
import icon4 from "../assets/images/svg/icon-wallet-4.svg";
import icon5 from "../assets/images/svg/icon-wallet-5.svg";
import icon6 from "../assets/images/svg/icon-wallet-6.svg";
import icon7 from "../assets/images/svg/icon-wallet-7.svg";
import icon8 from "../assets/images/svg/icon-wallet-8.svg";
import avt1 from "../assets/images/author/author1.png";
import avt2 from "../assets/images/author/author1.png";
import avt3 from "../assets/images/author/author1.png";
import avt4 from "../assets/images/author/author1.png";
import avt5 from "../assets/images/author/author1.png";
import avt6 from "../assets/images/author/author1.png";
import avtf1 from "../assets/images/author/author-follow1.jpg";
import avtf2 from "../assets/images/author/author-follow2.jpg";
import avtf3 from "../assets/images/author/author-follow3.jpg";
import avtf4 from "../assets/images/author/author-follow4.jpg";
import avtf5 from "../assets/images/author/author-follow3.jpg";
import avtf6 from "../assets/images/author/author-follow4.jpg";
import imgp1 from "../assets/images/product/product10.png";
import imgp2 from "../assets/images/product/product7.png";
import imgp3 from "../assets/images/product/product8.png";
import imgp4 from "../assets/images/product/product9.png";
import imgp5 from "../assets/images/product/product11.png";
import imgp6 from "../assets/images/product/product12.png";
import imgp7 from "../assets/images/product/product1.png";
import avtp1 from "../assets/images/author/avt-fv1.jpg";
import avtp2 from "../assets/images/author/avt-fv2.jpg";
import avtp3 from "../assets/images/author/avt-fv3.jpg";
import avtp4 from "../assets/images/author/avt-fv4.jpg";
import avtp5 from "../assets/images/author/avt-fv5.jpg";
import avtp6 from "../assets/images/author/avt-fv6.jpg";
import avtp7 from "../assets/images/author/avt-fv7.jpg";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { backUrl, defaultImageSrc } from "../data/Data";
import { Icon } from "@iconify/react";

Dashboard.propTypes = {};

function Dashboard(props) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [dashboard, setDashboard] = useState({});
  const [dataWallet] = useState([
    {
      id: 6,
      img: icon6,
      cate: "",
      title: "Kaikas",
    },
  ]);
  const [dataAuthor] = useState([
    {
      id: 1,
      avt: avtf1,
      name: "Lucy Neal",
      item: "64",
    },
    {
      id: 2,
      avt: avtf2,
      name: "Leopold Hum",
      item: "64",
    },
    {
      id: 3,
      avt: avtf3,
      name: "Hazel Middleton",
      item: "64",
    },
    {
      id: 4,
      avt: avtf4,
      name: "Rosemary Welch",
      item: "64",
    },
    {
      id: 5,
      avt: avtf5,
      name: "Rosemary Welch",
      item: "64",
    },
    {
      id: 6,
      avt: avtf6,
      name: "Hazel Middleton",
      item: "64",
    },
  ]);
  useEffect(() => {
    async function isAdmin() {
      const { data: response } = await axios.get("/api/getmyinfo");
      if (response?.data?.pk > 0) {
        await localStorage.setItem("auth", JSON.stringify(response?.data));
        let obj = response?.data;
        setAuth(obj);
        getDashboard();
      } else {
        toast.error("로그인을 해주세요.");
        localStorage.removeItem("auth");
        onLogout();
      }
    }
    isAdmin();
    if (window && window.flutter_inappwebview) {
    }
  }, []);
  const getDashboard = async () => {
    const { data: response } = await axios.get(`/api/getdashboard`);
    setDashboard(response?.data);
    console.log(response);
  };
  const onLogout = async () => {
    if (window && window.flutter_inappwebview) {
      var params = {
        login_type: JSON.parse(localStorage.getItem("auth"))?.type,
      };
      window.flutter_inappwebview
        .callHandler("native_app_logout", JSON.stringify(params))
        .then(async function (result) {
          //result = "{'code':100, 'message':'success', 'data':{'login_type':1, 'id': 1000000}}"
        });
    }
    const { data: response } = await axios.post("/api/logout");
    if (response.result > 0) {
      localStorage.removeItem("auth");
      navigate("/login");
    } else {
      alert("error");
    }
  };
  return (
    <div>
      <section class="tf-page-title ">
        <div class="tf-container">
          <div class="row">
            <div class="col-md-12">
              <ul class="breadcrumbs">
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>대시보드</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="thumb-pagetitle">
              <img src={img} alt="images" />
            </div>
          </div>
        </div>
      </section>

      <section className="tf-dashboard tf-tab">
        <div className="tf-container">
          <Tabs className="dashboard-filter">
            <div className="row ">
              <div className="col-xl-3 col-lg-12 col-md-12">
                <div className="dashboard-user">
                  <div className="dashboard-infor">
                    <div className="avatar">
                      <img
                        src={
                          auth?.profile_img
                            ? backUrl + auth?.profile_img
                            : defaultImageSrc
                        }
                        alt="images"
                      />
                    </div>
                    <div className="name">{auth.nickname}</div>
                    <div className="pax">
                      <img />
                      {auth.wallet_number}
                    </div>
                  </div>
                  <TabList className="filter-menuu menu-tab">
                    <Tab style={{ alignItems: "center", display: "flex" }}>
                      <Icon icon="material-symbols:folder-open" />
                      <div>목록</div>
                    </Tab>
                    <Tab style={{ alignItems: "center", display: "flex" }}>
                      <Icon icon="ic:round-account-balance-wallet" />
                      <div>지갑</div>
                    </Tab>
                    <Tab style={{ alignItems: "center", display: "flex" }}>
                      <Icon icon="material-symbols:hourglass-full" />
                      <div>히스토리</div>
                    </Tab>
                    <Tab style={{ alignItems: "center", display: "flex" }}>
                      <Icon icon="ic:round-people" />
                      <div>팔로잉</div>
                    </Tab>
                    <Tab style={{ alignItems: "center", display: "flex" }}>
                      <Icon icon="mdi:cards-heart" />
                      <div>좋아요</div>
                    </Tab>
                    <Tab style={{ alignItems: "center", display: "flex" }}>
                      <Icon icon="material-symbols:frame-person" />
                      <div>계정 설정</div>
                    </Tab>
                  </TabList>
                </div>
              </div>
              <div className="col-xl-9 col-lg-12 col-md-12 overflow-table">
                <div className="dashboard-content inventory content-tab">
                  <TabPanel>
                    <div className="inner-content inventory">
                      <h4 className="title-dashboard">목록</h4>
                      <div className="table-ranking top">
                        <div className="title-ranking">
                          <div className="col-rankingg">
                            <Link to="#">이름</Link>
                          </div>
                          <div className="col-rankingg">
                            <Link to="#">카테고리</Link>
                          </div>
                          <div className="col-rankingg">
                            <Link to="#">블록체인</Link>
                          </div>
                          <div className="col-rankingg">
                            <Link to="#">금액</Link>
                          </div>
                          <div className="col-rankingg">
                            <Link to="#">조회수</Link>
                          </div>
                          <div className="col-rankingg">
                            <Link to="#">마감일</Link>
                          </div>
                        </div>
                      </div>
                      <div className="table-ranking">
                        {dashboard?.items &&
                          dashboard?.items.map((item, idx) => (
                            <>
                              <div className="content-ranking">
                                <div className="col-rankingg">
                                  <div className="image">
                                    <img
                                      src={
                                        item?.img_src
                                          ? backUrl + item?.img_src
                                          : defaultImageSrc
                                      }
                                      alt="Binasea"
                                    />
                                  </div>
                                </div>
                                <div className="col-rankingg">
                                  {item?.category_name}
                                </div>
                                <div
                                  className="col-rankingg coin"
                                  style={{
                                    alignItems: "center",
                                    display: "flex",
                                  }}
                                >
                                  <img
                                    src={backUrl + item?.wallet_img}
                                    style={{
                                      width: "24px",
                                      marginRight: "4px",
                                    }}
                                  />
                                  {item?.wallet_name}
                                </div>
                                <div className="col-rankingg">
                                  {commarNumber(item?.price)}{" "}
                                  {item?.wallet_unit}
                                </div>
                                <div className="col-rankingg">
                                  {commarNumber(item?.views ?? 0)}
                                </div>
                                <div className="col-rankingg">
                                  {item?.end_data}
                                </div>
                                <div className="col-rankingg dot">
                                  <Link to={`/item-details?pk=${item?.pk}`}>
                                    <i className="fas fa-ellipsis-h"></i>
                                  </Link>
                                </div>
                              </div>
                            </>
                          ))}

                        <div className="table-btn">
                          <Link to="#">더 불러오기</Link>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="inner-content wallet">
                      <h4 className="title-dashboard">연결된 지갑</h4>
                      <div className="wallet-list">
                        {dashboard?.wallets && dashboard?.wallets.map((item, idx) => (
                          <div key={idx.id} className="tf-wallet">
                            <div className="icon">
                              <img src={backUrl+item?.img_src} alt="Binasea" />
                              <span className={`label ${idx.cate}`}>베타</span>
                            </div>
                            <h6 className="title">
                              <Link to="#"> {item.name}</Link>
                            </h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="inner-content history">
                      <h4 className="title-dashboard">히스토리</h4>
                      <div className="history-filter">
                        <div className="history-content">
                          <div className="inner tf-filter-container">
                            <div className="history-details tf-loadmore 3d">
                              <div className="authorr">
                                <div className="avatar">
                                  <img src={avt1} alt="images" />
                                </div>
                                <div className="content">
                                  <Link to="#" className="name">
                                    Kayle Jr. Brown
                                  </Link>
                                  <div className="description">
                                    started following{" "}
                                    <Link to="#">Grey Peep</Link>{" "}
                                  </div>
                                  <div className="date">
                                    <span className="time">16:24</span>
                                    <span>
                                      <i className="fas fa-circle"></i>
                                    </span>
                                    <span className="month">20/05/2022</span>
                                  </div>
                                </div>
                              </div>
                              <div className="category-filter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M17.9163 14.7012V15.1262C17.9163 15.7429 17.708 16.3346 17.3247 16.8096C17.183 16.9929 16.9497 17.0846 16.708 17.0846H14.4747C14.8163 16.493 14.9997 15.8179 14.9997 15.1262V14.7012C14.9997 13.5012 14.558 12.3931 13.808 11.5514C13.8663 11.5347 13.9163 11.5013 13.9663 11.4763C14.3497 11.2597 14.8247 11.193 15.2747 11.3014C16.8247 11.693 17.9163 13.0845 17.9163 14.7012ZM12.083 2.91797C11.8163 2.91797 11.558 2.94305 11.308 3.00138C12.2997 3.90972 12.9163 5.21797 12.9163 6.66797C12.9163 8.11797 12.2997 9.42622 11.308 10.3346C11.558 10.3929 11.8163 10.418 12.083 10.418C14.1497 10.418 15.833 8.73464 15.833 6.66797C15.833 4.6013 14.1497 2.91797 12.083 2.91797ZM7.91634 2.91797C5.84967 2.91797 4.16634 4.6013 4.16634 6.66797C4.16634 8.73464 5.84967 10.418 7.91634 10.418C9.98301 10.418 11.6663 8.73464 11.6663 6.66797C11.6663 4.6013 9.98301 2.91797 7.91634 2.91797ZM11.108 11.3014C10.958 11.268 10.8163 11.2513 10.6663 11.2513C10.358 11.2513 10.058 11.3263 9.79968 11.4763C9.21635 11.793 8.56634 11.9514 7.91634 11.9514C7.26634 11.9514 6.62468 11.793 6.04968 11.4847C5.77468 11.3347 5.46634 11.2513 5.15801 11.2513C5.02468 11.2513 4.89966 11.268 4.77466 11.293C3.19132 11.6597 2.08301 13.0679 2.08301 14.7012V15.1262C2.08301 15.7429 2.29136 16.3346 2.67469 16.8096C2.81636 16.9929 3.04968 17.0846 3.29135 17.0846H12.5413C12.783 17.0846 13.0163 16.9929 13.158 16.8096C13.5413 16.3346 13.7497 15.7429 13.7497 15.1262V14.7012C13.7497 13.0845 12.658 11.693 11.108 11.3014Z"
                                    fill="white"
                                  />
                                </svg>
                                팔로잉
                              </div>
                            </div>
                            <div className="history-details tf-loadmore 3d anime">
                              <div className="authorr">
                                <div className="avatar">
                                  <img src={avt2} alt="images" />
                                </div>
                                <div className="content">
                                  <Link to="#" className="name">
                                    Baby Girl 3D Model
                                  </Link>
                                  <div className="description">
                                    purchased by{" "}
                                    <Link to="#">Monica Johnson</Link> for 4.00
                                    ETH{" "}
                                  </div>
                                  <div className="date">
                                    <span className="time">16:24</span>
                                    <span>
                                      <i className="fas fa-circle"></i>
                                    </span>
                                    <span className="month">20/05/2022</span>
                                  </div>
                                </div>
                              </div>
                              <div className="category-filter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M14.167 2.91797H5.83366C3.33366 2.91797 1.66699 4.16797 1.66699 7.08464V12.918C1.66699 15.8346 3.33366 17.0846 5.83366 17.0846H14.167C16.667 17.0846 18.3337 15.8346 18.3337 12.918V7.08464C18.3337 4.16797 16.667 2.91797 14.167 2.91797ZM14.5587 7.99297L11.9503 10.0763C11.4003 10.518 10.7003 10.7346 10.0003 10.7346C9.30033 10.7346 8.59199 10.518 8.05033 10.0763L5.44199 7.99297C5.17533 7.7763 5.13366 7.3763 5.34199 7.10964C5.55866 6.84297 5.95033 6.79297 6.21699 7.00964L8.82533 9.09297C9.45866 9.6013 10.5337 9.6013 11.167 9.09297L13.7753 7.00964C14.042 6.79297 14.442 6.83464 14.6503 7.10964C14.867 7.3763 14.8253 7.7763 14.5587 7.99297Z"
                                    fill="white"
                                  ></path>
                                </svg>
                                구매
                              </div>
                            </div>
                            <div className="history-details tf-loadmore 3d pixel">
                              <div className="authorr">
                                <div className="avatar">
                                  <img src={avt3} alt="images" />
                                </div>
                                <div className="content">
                                  <Link to="#" className="name">
                                    Cyber Punk Gaming
                                  </Link>
                                  <div className="description">
                                    bidded by <Link to="#">Monica Johnson</Link>{" "}
                                    for 4.00 ETH{" "}
                                  </div>
                                  <div className="date">
                                    <span className="time">16:24</span>
                                    <span>
                                      <i className="fas fa-circle"></i>
                                    </span>
                                    <span className="month">20/05/2022</span>
                                  </div>
                                </div>
                              </div>
                              <div className="category-filter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="18"
                                  viewBox="0 0 14 18"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M8.46156 1.67192C8.45896 1.59571 8.37592 1.54636 8.31071 1.58587C5.47538 3.30391 5.50003 7.54287 5.53416 8.38458C5.53704 8.45557 5.46906 8.5043 5.40526 8.47303C5.05493 8.30135 4.14825 7.70609 4.08693 6.12407C4.08397 6.04776 4.00162 5.99931 3.93612 6.03858C2.27758 7.03286 1.16699 8.85521 1.16699 10.875C1.16699 13.9816 3.77866 16.5 7.00033 16.5C10.222 16.5 12.8337 13.9816 12.8337 10.875C12.8336 6.37319 8.5888 5.3961 8.46156 1.67192Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="1.5"
                                  />
                                </svg>{" "}
                                금액
                              </div>
                            </div>
                            <div className="history-details tf-loadmore 3d cyber">
                              <div className="authorr">
                                <div className="avatar">
                                  <img src={avt4} alt="images" />
                                </div>
                                <div className="content">
                                  <Link to="#" className="name">
                                    Cyber Punk Gaming
                                  </Link>
                                  <div className="description">
                                    <Link to="#">Monica Johnson</Link> offered
                                    for 4.00 ETH{" "}
                                  </div>
                                  <div className="date">
                                    <span className="time">16:24</span>
                                    <span>
                                      <i className="fas fa-circle"></i>
                                    </span>
                                    <span className="month">20/05/2022</span>
                                  </div>
                                </div>
                              </div>
                              <div className="category-filter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M14.9257 8.93146H12.3507V2.93146C12.3507 1.53146 11.5924 1.24812 10.6674 2.29812L10.0007 3.05646L4.35908 9.47312C3.58408 10.3481 3.90908 11.0648 5.07574 11.0648H7.65074V17.0648C7.65074 18.4648 8.40907 18.7481 9.33407 17.6981L10.0007 16.9398L15.6424 10.5231C16.4174 9.64812 16.0924 8.93146 14.9257 8.93146Z"
                                    fill="white"
                                  />
                                </svg>{" "}
                                제안하기
                              </div>
                            </div>
                            <div className="history-details tf-loadmore 3d cyber music">
                              <div className="authorr">
                                <div className="avatar">
                                  <img src={avt5} alt="images" />
                                </div>
                                <div className="content">
                                  <Link to="#" className="name">
                                    Cyber Punk Gaming
                                  </Link>
                                  <div className="description">
                                    liked by <Link to="#">Monica Johnson</Link>{" "}
                                    for 4.00 ETH{" "}
                                  </div>
                                  <div className="date">
                                    <span className="time">16:24</span>
                                    <span>
                                      <i className="fas fa-circle"></i>
                                    </span>
                                    <span className="month">20/05/2022</span>
                                  </div>
                                </div>
                              </div>
                              <div className="category-filter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M3.05262 11.0112L7.8241 16.0398C9.00708 17.2866 10.9936 17.2866 12.1766 16.0398L16.948 11.0112C18.7955 9.06416 18.7955 5.90735 16.948 3.96029C15.1005 2.01323 12.1051 2.01324 10.2576 3.9603C10.1178 4.10771 9.88288 4.10771 9.743 3.9603C7.8955 2.01324 4.90012 2.01324 3.05262 3.96029C1.20512 5.90735 1.20512 9.06416 3.05262 11.0112Z"
                                    fill="white"
                                  />
                                </svg>{" "}
                                좋아요
                              </div>
                            </div>
                            <div className="history-details tf-loadmore 3d cyber pixel">
                              <div className="authorr">
                                <div className="avatar">
                                  <img src={avt6} alt="images" />
                                </div>
                                <div className="content">
                                  <Link to="#" className="name">
                                    Cyber Punk Gaming
                                  </Link>
                                  <div className="description">
                                    bidded by <Link to="#">Monica Johnson</Link>{" "}
                                    for 4.00 ETH{" "}
                                  </div>
                                  <div className="date">
                                    <span className="time">16:24</span>
                                    <span>
                                      <i className="fas fa-circle"></i>
                                    </span>
                                    <span className="month">20/05/2022</span>
                                  </div>
                                </div>
                              </div>
                              <div className="category-filter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="18"
                                  viewBox="0 0 14 18"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M8.46156 1.67192C8.45896 1.59571 8.37592 1.54636 8.31071 1.58587C5.47538 3.30391 5.50003 7.54287 5.53416 8.38458C5.53704 8.45557 5.46906 8.5043 5.40526 8.47303C5.05493 8.30135 4.14825 7.70609 4.08693 6.12407C4.08397 6.04776 4.00162 5.99931 3.93612 6.03858C2.27758 7.03286 1.16699 8.85521 1.16699 10.875C1.16699 13.9816 3.77866 16.5 7.00033 16.5C10.222 16.5 12.8337 13.9816 12.8337 10.875C12.8336 6.37319 8.5888 5.3961 8.46156 1.67192Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="1.5"
                                  />
                                </svg>{" "}
                                금액
                              </div>
                            </div>
                          </div>
                          <div className="table-btn">
                            <Link to="#">더 불러오기</Link>
                          </div>
                        </div>
                        <div className="history-sidebar">
                          <div className="history-search">
                            <form
                              action="#"
                              method="get"
                              role="search"
                              className="search-form"
                            >
                              <input
                                type="search"
                                id="s"
                                className="search-field"
                                placeholder="Search Keyword..."
                                name="s"
                                title="Search for"
                                required
                              />
                              <button
                                className="search search-submit"
                                type="submit"
                                title="Search"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <mask
                                    id="mask0_2202_135862"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="15"
                                    height="15"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M1.33301 1.33203H14.1484V13.8645H1.33301V1.33203Z"
                                      fill="white"
                                      stroke="white"
                                    />
                                  </mask>
                                  <g mask="url(#mask0_2202_135862)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M7.7411 2.2972C4.75189 2.2972 2.31999 4.67474 2.31999 7.59793C2.31999 10.5211 4.75189 12.8993 7.7411 12.8993C10.7297 12.8993 13.1615 10.5211 13.1615 7.59793C13.1615 4.67474 10.7297 2.2972 7.7411 2.2972ZM7.74109 13.8645C4.20773 13.8645 1.33301 11.0532 1.33301 7.59793C1.33301 4.14261 4.20773 1.33203 7.74109 1.33203C11.2744 1.33203 14.1485 4.14261 14.1485 7.59793C14.1485 11.0532 11.2744 13.8645 7.74109 13.8645Z"
                                      fill="#B9B8BB"
                                    />
                                    <path
                                      d="M7.7411 1.7972C4.48641 1.7972 1.81999 4.38805 1.81999 7.59793H2.81999C2.81999 4.96143 5.01737 2.7972 7.7411 2.7972V1.7972ZM1.81999 7.59793C1.81999 10.8077 4.48634 13.3993 7.7411 13.3993V12.3993C5.01745 12.3993 2.81999 10.2345 2.81999 7.59793H1.81999ZM7.7411 13.3993C10.9952 13.3993 13.6615 10.8077 13.6615 7.59793H12.6615C12.6615 10.2345 10.4641 12.3993 7.7411 12.3993V13.3993ZM13.6615 7.59793C13.6615 4.38809 10.9952 1.7972 7.7411 1.7972V2.7972C10.4641 2.7972 12.6615 4.96139 12.6615 7.59793H13.6615ZM7.74109 13.3645C4.47328 13.3645 1.83301 10.7666 1.83301 7.59793H0.833008C0.833008 11.3399 3.94217 14.3645 7.74109 14.3645V13.3645ZM1.83301 7.59793C1.83301 4.42929 4.47322 1.83203 7.74109 1.83203V0.832031C3.94224 0.832031 0.833008 3.85593 0.833008 7.59793H1.83301ZM7.74109 1.83203C11.0089 1.83203 13.6485 4.42922 13.6485 7.59793H14.6485C14.6485 3.856 11.54 0.832031 7.74109 0.832031V1.83203ZM13.6485 7.59793C13.6485 10.7667 11.0088 13.3645 7.74109 13.3645V14.3645C11.5401 14.3645 14.6485 11.3398 14.6485 7.59793H13.6485Z"
                                      fill="#B9B8BB"
                                    />
                                  </g>
                                  <mask
                                    id="mask1_2202_135862"
                                    maskUnits="userSpaceOnUse"
                                    x="10"
                                    y="10"
                                    width="6"
                                    height="6"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11.3604 11.4375H14.6661V14.6642H11.3604V11.4375Z"
                                      fill="white"
                                      stroke="white"
                                    />
                                  </mask>
                                  <g mask="url(#mask1_2202_135862)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M14.1727 14.6642C14.0471 14.6642 13.9207 14.6173 13.824 14.5233L11.5053 12.2622C11.3125 12.0737 11.3118 11.7681 11.5046 11.5795C11.6967 11.3897 12.0093 11.391 12.2027 11.5783L14.5215 13.84C14.7142 14.0285 14.7149 14.3335 14.5221 14.522C14.4261 14.6173 14.2991 14.6642 14.1727 14.6642Z"
                                      fill="#B9B8BB"
                                    />
                                    <path
                                      d="M14.1727 14.6642C14.0471 14.6642 13.9207 14.6173 13.824 14.5233L11.5053 12.2622C11.3125 12.0737 11.3118 11.7681 11.5046 11.5795C11.6967 11.3897 12.0093 11.391 12.2027 11.5783L14.5215 13.84C14.7142 14.0285 14.7149 14.3335 14.5221 14.522C14.4261 14.6173 14.2991 14.6642 14.1727 14.6642"
                                      stroke="#B9B8BB"
                                    />
                                  </g>
                                </svg>
                              </button>
                            </form>
                          </div>
                          <div className="remove-filter">
                            <span className="label">Filter</span>
                            <span className="reset">Reset</span>
                          </div>
                          <ul className="filter-menu">
                            <li className="active">
                              <Link to="#" data-filter=".3d">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M14.167 2.91797H5.83366C3.33366 2.91797 1.66699 4.16797 1.66699 7.08464V12.918C1.66699 15.8346 3.33366 17.0846 5.83366 17.0846H14.167C16.667 17.0846 18.3337 15.8346 18.3337 12.918V7.08464C18.3337 4.16797 16.667 2.91797 14.167 2.91797ZM14.5587 7.99297L11.9503 10.0763C11.4003 10.518 10.7003 10.7346 10.0003 10.7346C9.30033 10.7346 8.59199 10.518 8.05033 10.0763L5.44199 7.99297C5.17533 7.7763 5.13366 7.3763 5.34199 7.10964C5.55866 6.84297 5.95033 6.79297 6.21699 7.00964L8.82533 9.09297C9.45866 9.6013 10.5337 9.6013 11.167 9.09297L13.7753 7.00964C14.042 6.79297 14.442 6.83464 14.6503 7.10964C14.867 7.3763 14.8253 7.7763 14.5587 7.99297Z"
                                    fill="white"
                                  />
                                </svg>{" "}
                                Purchase
                              </Link>
                            </li>
                            <li>
                              <Link to="#" data-filter=".anime">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M3.05262 11.0112L7.8241 16.0398C9.00708 17.2866 10.9936 17.2866 12.1766 16.0398L16.948 11.0112C18.7955 9.06416 18.7955 5.90735 16.948 3.96029C15.1005 2.01323 12.1051 2.01324 10.2576 3.9603C10.1178 4.10771 9.88288 4.10771 9.743 3.9603C7.8955 2.01324 4.90012 2.01324 3.05262 3.96029C1.20512 5.90735 1.20512 9.06416 3.05262 11.0112Z"
                                    fill="white"
                                  />
                                </svg>{" "}
                                Likes
                              </Link>
                            </li>
                            <li>
                              <Link to="#" data-filter=".cyber">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="18"
                                  viewBox="0 0 14 18"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M8.46156 1.67192C8.45896 1.59571 8.37592 1.54636 8.31071 1.58587C5.47538 3.30391 5.50003 7.54287 5.53416 8.38458C5.53704 8.45557 5.46906 8.5043 5.40526 8.47303C5.05493 8.30135 4.14825 7.70609 4.08693 6.12407C4.08397 6.04776 4.00162 5.99931 3.93612 6.03858C2.27758 7.03286 1.16699 8.85521 1.16699 10.875C1.16699 13.9816 3.77866 16.5 7.00033 16.5C10.222 16.5 12.8337 13.9816 12.8337 10.875C12.8336 6.37319 8.5888 5.3961 8.46156 1.67192Z"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="1.5"
                                  />
                                </svg>{" "}
                                Bids
                              </Link>
                            </li>
                            <li>
                              <Link to="#" data-filter=".pixel">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M17.9163 14.7012V15.1262C17.9163 15.7429 17.708 16.3346 17.3247 16.8096C17.183 16.9929 16.9497 17.0846 16.708 17.0846H14.4747C14.8163 16.493 14.9997 15.8179 14.9997 15.1262V14.7012C14.9997 13.5012 14.558 12.3931 13.808 11.5514C13.8663 11.5347 13.9163 11.5013 13.9663 11.4763C14.3497 11.2597 14.8247 11.193 15.2747 11.3014C16.8247 11.693 17.9163 13.0845 17.9163 14.7012ZM12.083 2.91797C11.8163 2.91797 11.558 2.94305 11.308 3.00138C12.2997 3.90972 12.9163 5.21797 12.9163 6.66797C12.9163 8.11797 12.2997 9.42622 11.308 10.3346C11.558 10.3929 11.8163 10.418 12.083 10.418C14.1497 10.418 15.833 8.73464 15.833 6.66797C15.833 4.6013 14.1497 2.91797 12.083 2.91797ZM7.91634 2.91797C5.84967 2.91797 4.16634 4.6013 4.16634 6.66797C4.16634 8.73464 5.84967 10.418 7.91634 10.418C9.98301 10.418 11.6663 8.73464 11.6663 6.66797C11.6663 4.6013 9.98301 2.91797 7.91634 2.91797ZM11.108 11.3014C10.958 11.268 10.8163 11.2513 10.6663 11.2513C10.358 11.2513 10.058 11.3263 9.79968 11.4763C9.21635 11.793 8.56634 11.9514 7.91634 11.9514C7.26634 11.9514 6.62468 11.793 6.04968 11.4847C5.77468 11.3347 5.46634 11.2513 5.15801 11.2513C5.02468 11.2513 4.89966 11.268 4.77466 11.293C3.19132 11.6597 2.08301 13.0679 2.08301 14.7012V15.1262C2.08301 15.7429 2.29136 16.3346 2.67469 16.8096C2.81636 16.9929 3.04968 17.0846 3.29135 17.0846H12.5413C12.783 17.0846 13.0163 16.9929 13.158 16.8096C13.5413 16.3346 13.7497 15.7429 13.7497 15.1262V14.7012C13.7497 13.0845 12.658 11.693 11.108 11.3014Z"
                                    fill="white"
                                  />
                                </svg>
                                Following
                              </Link>
                            </li>
                            <li>
                              <Link to="#" data-filter=".music">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    className="fill-svg"
                                    d="M14.9257 8.93146H12.3507V2.93146C12.3507 1.53146 11.5924 1.24812 10.6674 2.29812L10.0007 3.05646L4.35908 9.47312C3.58408 10.3481 3.90908 11.0648 5.07574 11.0648H7.65074V17.0648C7.65074 18.4648 8.40907 18.7481 9.33407 17.6981L10.0007 16.9398L15.6424 10.5231C16.4174 9.64812 16.0924 8.93146 14.9257 8.93146Z"
                                    fill="white"
                                  />
                                </svg>{" "}
                                Offers{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="inner-content follow">
                      <h4 className="title-dashboard">팔로잉</h4>
                      <div className="content-follow">
                        {dataAuthor.map((idx) => (
                          <div key={idx.id} className="card-author">
                            <div className="avatar">
                              <img src={idx.avt} alt="images" />
                            </div>
                            <div className="name">
                              {" "}
                              <Link to="#">{idx.name}</Link>{" "}
                            </div>
                            <div className="details">
                              <span>{idx.item}</span> 개
                            </div>
                            <Link to="#" className="btn-follow">
                              팔로잉
                            </Link>
                            <Link to="#" className="option">
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                          </div>
                        ))}

                        <div className="table-btn">
                          <Link to="#">더 불러오기</Link>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="inner-content inventory favorite">
                      <h4 className="title-dashboard">즐겨찾기</h4>
                      <div className="table-ranking top">
                        <div className="title-ranking">
                          <div className="col-rankingg">
                            <Link to="#">이름</Link>
                          </div>
                          <div className="col-rankingg">
                            <Link to="#">블록체인</Link>
                          </div>
                          <div className="col-rankingg">
                            <Link to="#">작성자</Link>
                          </div>
                          <div className="col-rankingg">
                            <Link to="#">가격</Link>
                          </div>
                        </div>
                      </div>
                      <div className="table-ranking ">
                        <div className="content-ranking">
                          <div className="col-rankingg">
                            <div className="box-product-favorite">
                              <Link to="#" className="bookmark">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <path
                                    d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z"
                                    fill="#3749E9"
                                  />
                                </svg>
                              </Link>
                              <div className="image">
                                <img src={imgp7} alt="Binasea" />
                              </div>
                              <Link to="#" className="name">
                                Sweet Baby #1
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg coin">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="22"
                              viewBox="0 0 23 22"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.0138 5.65275C15.2277 5.65275 14.5905 6.29113 14.5905 7.07865V8.21954H19.2162V12.5686H14.5193V14.4223C14.5193 17.848 11.7474 20.625 8.32802 20.625C4.90869 20.625 2.13672 17.848 2.13672 14.4223C2.13672 10.9966 4.90869 8.21954 8.32802 8.21954H10.3206V7.07865C10.3206 3.92866 12.8695 1.375 16.0138 1.375H21.3867V5.65275H16.0138ZM10.3203 8.25586V12.5694H14.519V8.25586H10.3203ZM6.40625 14.423C6.40625 13.3598 7.26655 12.498 8.32767 12.498H10.2492V14.423C10.2492 15.4862 9.38889 16.348 8.32767 16.348C7.26655 16.348 6.40625 15.4862 6.40625 14.423Z"
                                fill="#03DB80"
                              />
                            </svg>
                            Flow
                          </div>
                          <div className="col-rankingg">
                            <div className="author-pd">
                              <div className="avatar">
                                <img src={avtp1} alt="images" />
                              </div>
                              <Link to="#" className="name">
                                Fabian Johnson
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg">0.45 Flow</div>
                          <div className="dot">
                            <Link to="#">
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="content-ranking">
                          <div className="col-rankingg">
                            <div className="box-product-favorite">
                              <Link to="#" className="bookmark">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <path
                                    d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z"
                                    fill="#3749E9"
                                  />
                                </svg>
                              </Link>
                              <div className="image">
                                <img src={imgp1} alt="Binasea" />
                              </div>
                              <Link to="#" className="name">
                                Doug Ortega #1
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg coin">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="22"
                              viewBox="0 0 23 22"
                              fill="none"
                            >
                              <path
                                d="M13.2819 22C11.8098 22 10.7378 21.622 10.0641 20.8659C9.39134 20.1102 9.05451 19.2952 9.05451 18.4217C9.05451 18.1024 9.11307 17.8337 9.23052 17.6152C9.34515 17.3999 9.51139 17.2214 9.71225 17.0985C9.91571 16.9724 10.1661 16.9096 10.4638 16.9096C10.7614 16.9096 11.0115 16.9724 11.2153 17.0985C11.4187 17.2244 11.5793 17.3969 11.6966 17.6152C11.814 17.8337 11.8727 18.1024 11.8727 18.4217C11.8727 18.8082 11.7867 19.1229 11.6145 19.3667C11.442 19.6103 11.2386 19.7697 11.0037 19.8457C11.2076 20.1477 11.5285 20.3619 11.9668 20.4879C12.4052 20.6225 12.8435 20.6896 13.2819 20.6896C13.8924 20.6896 14.4443 20.5132 14.9376 20.1606C15.4307 19.8075 15.7949 19.2869 16.0298 18.5981C16.2647 17.9094 16.3821 17.128 16.3821 16.2542C16.3821 15.3051 16.2527 14.4942 15.9946 13.8225C15.7438 13.1421 15.3721 12.638 14.8788 12.3103C14.4007 11.9874 13.8468 11.8171 13.2819 11.8191C12.9059 11.8191 12.4366 11.9871 11.8727 12.3232L10.8393 12.8775V12.3232L15.4895 5.67021H9.05451V12.5748C9.05451 13.1462 9.17195 13.6166 9.40684 13.9863C9.64172 14.356 10.0017 14.5407 10.4874 14.5407C10.8626 14.5407 11.2231 14.4064 11.5676 14.1372C11.9144 13.8659 12.216 13.5338 12.4599 13.155C12.4912 13.0788 12.5304 13.0243 12.5774 12.9907C12.6195 12.9507 12.6737 12.9285 12.73 12.9279C12.816 12.9279 12.9177 12.9741 13.0354 13.0667C13.145 13.2007 13.1998 13.3562 13.1998 13.5326C13.1863 13.6514 13.1666 13.7692 13.1408 13.8856C12.8749 14.524 12.5068 15.0111 12.0371 15.347C11.5797 15.6791 11.0394 15.8548 10.4874 15.8512C9.09367 15.8512 8.13055 15.5571 7.59837 14.9694C7.06619 14.381 6.79993 13.5829 6.79993 12.5752V5.67021H3.51172V4.38475H6.79993V1.46182L6.0484 0.654721V0H8.23246L9.05419 0.453375V4.38475L17.5561 4.35975L18.4018 5.26682L13.188 10.8614C13.5037 10.7263 13.8361 10.6415 14.1745 10.6093C14.7381 10.6093 15.3721 10.8026 16.0767 11.1891C16.7892 11.567 17.3372 12.0881 17.7205 12.7512C18.1042 13.4066 18.3507 14.0367 18.4605 14.6414C18.5779 15.2465 18.6367 15.7838 18.6367 16.2542C18.6367 17.3297 18.4251 18.329 18.0026 19.2535C17.5799 20.1772 16.9379 20.8659 16.0767 21.3197C15.2155 21.7734 14.2838 22 13.2819 22Z"
                                fill="#2C7DF7"
                              ></path>
                            </svg>
                            Tezos
                          </div>
                          <div className="col-rankingg">
                            <div className="author-pd">
                              <div className="avatar">
                                <img src={avtp2} alt="images" />
                              </div>
                              <Link to="#" className="name">
                                Polly Walters
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg">0.45 Flow</div>
                          <div className="dot">
                            <Link to="#">
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="content-ranking">
                          <div className="col-rankingg">
                            <div className="box-product-favorite">
                              <Link to="#" className="bookmark">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <path
                                    d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z"
                                    fill="#3749E9"
                                  />
                                </svg>
                              </Link>
                              <div className="image">
                                <img src={imgp2} alt="Binasea" />
                              </div>
                              <Link to="#" className="name">
                                Vincent Welch #1
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg coin">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="22"
                              viewBox="0 0 23 22"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7619 0V8.13257L5.74624 10.8216L11.7619 8.13418V15.1949L4.89084 11.204L4.89062 11.2041L4.8907 11.2039L4.89062 11.2038L4.89077 11.2038L11.7619 0ZM11.7637 0L18.6357 11.2038L18.6359 11.2038L18.6359 11.2039L18.6359 11.2041L18.6357 11.204L11.7637 15.1949V8.13418L17.7802 10.8216L11.7637 8.13257V0ZM11.7626 16.4746V22.0005L4.88672 12.4844L11.7626 16.4746ZM11.7637 22.0005V16.4736L18.6359 12.4844L11.7637 22.0005Z"
                                fill="#6B8CEF"
                              ></path>
                            </svg>
                            Ethereum
                          </div>
                          <div className="col-rankingg">
                            <div className="author-pd">
                              <div className="avatar">
                                <img src={avtp3} alt="images" />
                              </div>
                              <Link to="#" className="name">
                                Basil Slater
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg">0.45 Flow</div>
                          <div className="dot">
                            <Link to="#">
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="content-ranking">
                          <div className="col-rankingg">
                            <div className="box-product-favorite">
                              <Link to="#" className="bookmark">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <path
                                    d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z"
                                    fill="#3749E9"
                                  />
                                </svg>
                              </Link>
                              <div className="image">
                                <img src={imgp3} alt="Binasea" />
                              </div>
                              <Link to="#" className="name">
                                Alec Alvarado #1
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg coin">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="22"
                              viewBox="0 0 23 22"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.0138 5.65275C15.2277 5.65275 14.5905 6.29113 14.5905 7.07865V8.21954H19.2162V12.5686H14.5193V14.4223C14.5193 17.848 11.7474 20.625 8.32802 20.625C4.90869 20.625 2.13672 17.848 2.13672 14.4223C2.13672 10.9966 4.90869 8.21954 8.32802 8.21954H10.3206V7.07865C10.3206 3.92866 12.8695 1.375 16.0138 1.375H21.3867V5.65275H16.0138ZM10.3203 8.25586V12.5694H14.519V8.25586H10.3203ZM6.40625 14.423C6.40625 13.3598 7.26655 12.498 8.32767 12.498H10.2492V14.423C10.2492 15.4862 9.38889 16.348 8.32767 16.348C7.26655 16.348 6.40625 15.4862 6.40625 14.423Z"
                                fill="#03DB80"
                              />
                            </svg>
                            Flow
                          </div>
                          <div className="col-rankingg">
                            <div className="author-pd">
                              <div className="avatar">
                                <img src={avtp4} alt="images" />
                              </div>
                              <Link to="#" className="name">
                                Mirabelle Maldonado
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg">0.45 Flow</div>
                          <div className="dot">
                            <Link to="#">
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="content-ranking">
                          <div className="col-rankingg">
                            <div className="box-product-favorite">
                              <Link to="#" className="bookmark">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <path
                                    d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z"
                                    fill="#3749E9"
                                  />
                                </svg>
                              </Link>
                              <div className="image">
                                <img src={imgp4} alt="Binasea" />
                              </div>
                              <Link to="#" className="name">
                                Baz Fletcher #1
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg coin">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="22"
                              viewBox="0 0 23 22"
                              fill="none"
                            >
                              <path
                                d="M13.2819 22C11.8098 22 10.7378 21.622 10.0641 20.8659C9.39134 20.1102 9.05451 19.2952 9.05451 18.4217C9.05451 18.1024 9.11307 17.8337 9.23052 17.6152C9.34515 17.3999 9.51139 17.2214 9.71225 17.0985C9.91571 16.9724 10.1661 16.9096 10.4638 16.9096C10.7614 16.9096 11.0115 16.9724 11.2153 17.0985C11.4187 17.2244 11.5793 17.3969 11.6966 17.6152C11.814 17.8337 11.8727 18.1024 11.8727 18.4217C11.8727 18.8082 11.7867 19.1229 11.6145 19.3667C11.442 19.6103 11.2386 19.7697 11.0037 19.8457C11.2076 20.1477 11.5285 20.3619 11.9668 20.4879C12.4052 20.6225 12.8435 20.6896 13.2819 20.6896C13.8924 20.6896 14.4443 20.5132 14.9376 20.1606C15.4307 19.8075 15.7949 19.2869 16.0298 18.5981C16.2647 17.9094 16.3821 17.128 16.3821 16.2542C16.3821 15.3051 16.2527 14.4942 15.9946 13.8225C15.7438 13.1421 15.3721 12.638 14.8788 12.3103C14.4007 11.9874 13.8468 11.8171 13.2819 11.8191C12.9059 11.8191 12.4366 11.9871 11.8727 12.3232L10.8393 12.8775V12.3232L15.4895 5.67021H9.05451V12.5748C9.05451 13.1462 9.17195 13.6166 9.40684 13.9863C9.64172 14.356 10.0017 14.5407 10.4874 14.5407C10.8626 14.5407 11.2231 14.4064 11.5676 14.1372C11.9144 13.8659 12.216 13.5338 12.4599 13.155C12.4912 13.0788 12.5304 13.0243 12.5774 12.9907C12.6195 12.9507 12.6737 12.9285 12.73 12.9279C12.816 12.9279 12.9177 12.9741 13.0354 13.0667C13.145 13.2007 13.1998 13.3562 13.1998 13.5326C13.1863 13.6514 13.1666 13.7692 13.1408 13.8856C12.8749 14.524 12.5068 15.0111 12.0371 15.347C11.5797 15.6791 11.0394 15.8548 10.4874 15.8512C9.09367 15.8512 8.13055 15.5571 7.59837 14.9694C7.06619 14.381 6.79993 13.5829 6.79993 12.5752V5.67021H3.51172V4.38475H6.79993V1.46182L6.0484 0.654721V0H8.23246L9.05419 0.453375V4.38475L17.5561 4.35975L18.4018 5.26682L13.188 10.8614C13.5037 10.7263 13.8361 10.6415 14.1745 10.6093C14.7381 10.6093 15.3721 10.8026 16.0767 11.1891C16.7892 11.567 17.3372 12.0881 17.7205 12.7512C18.1042 13.4066 18.3507 14.0367 18.4605 14.6414C18.5779 15.2465 18.6367 15.7838 18.6367 16.2542C18.6367 17.3297 18.4251 18.329 18.0026 19.2535C17.5799 20.1772 16.9379 20.8659 16.0767 21.3197C15.2155 21.7734 14.2838 22 13.2819 22Z"
                                fill="#2C7DF7"
                              ></path>
                            </svg>
                            Tezos
                          </div>
                          <div className="col-rankingg">
                            <div className="author-pd">
                              <div className="avatar">
                                <img src={avtp5} alt="images" />
                              </div>
                              <Link to="#" className="name">
                                Roderick Boyd
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg">0.45 Flow</div>
                          <div className="dot">
                            <Link to="#">
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="content-ranking">
                          <div className="col-rankingg">
                            <div className="box-product-favorite">
                              <Link to="#" className="bookmark">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <path
                                    d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z"
                                    fill="#3749E9"
                                  />
                                </svg>
                              </Link>
                              <div className="image">
                                <img src={imgp5} alt="Binasea" />
                              </div>
                              <Link to="#" className="name">
                                Bert Moore #1
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg coin">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="22"
                              viewBox="0 0 23 22"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7619 0V8.13257L5.74624 10.8216L11.7619 8.13418V15.1949L4.89084 11.204L4.89062 11.2041L4.8907 11.2039L4.89062 11.2038L4.89077 11.2038L11.7619 0ZM11.7637 0L18.6357 11.2038L18.6359 11.2038L18.6359 11.2039L18.6359 11.2041L18.6357 11.204L11.7637 15.1949V8.13418L17.7802 10.8216L11.7637 8.13257V0ZM11.7626 16.4746V22.0005L4.88672 12.4844L11.7626 16.4746ZM11.7637 22.0005V16.4736L18.6359 12.4844L11.7637 22.0005Z"
                                fill="#6B8CEF"
                              ></path>
                            </svg>
                            Ethereum
                          </div>
                          <div className="col-rankingg">
                            <div className="author-pd">
                              <div className="avatar">
                                <img src={avtp6} alt="images" />
                              </div>
                              <Link to="#" className="name">
                                Lucy Neal
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg">0.45 Flow</div>
                          <div className="dot">
                            <Link to="#">
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="content-ranking">
                          <div className="col-rankingg">
                            <div className="box-product-favorite">
                              <Link to="#" className="bookmark">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <path
                                    d="M12.7617 2.25H5.23828C4.42969 2.25 3.76172 2.91797 3.76172 3.76172V15.75L9 13.5L14.2383 15.75V3.76172C14.2383 2.91797 13.5703 2.25 12.7617 2.25Z"
                                    fill="#3749E9"
                                  />
                                </svg>
                              </Link>
                              <div className="image">
                                <img src={imgp6} alt="Binasea" />
                              </div>
                              <Link to="#" className="name">
                                Oriel Binder #1
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg coin">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="22"
                              viewBox="0 0 23 22"
                              fill="none"
                            >
                              <path
                                d="M13.2819 22C11.8098 22 10.7378 21.622 10.0641 20.8659C9.39134 20.1102 9.05451 19.2952 9.05451 18.4217C9.05451 18.1024 9.11307 17.8337 9.23052 17.6152C9.34515 17.3999 9.51139 17.2214 9.71225 17.0985C9.91571 16.9724 10.1661 16.9096 10.4638 16.9096C10.7614 16.9096 11.0115 16.9724 11.2153 17.0985C11.4187 17.2244 11.5793 17.3969 11.6966 17.6152C11.814 17.8337 11.8727 18.1024 11.8727 18.4217C11.8727 18.8082 11.7867 19.1229 11.6145 19.3667C11.442 19.6103 11.2386 19.7697 11.0037 19.8457C11.2076 20.1477 11.5285 20.3619 11.9668 20.4879C12.4052 20.6225 12.8435 20.6896 13.2819 20.6896C13.8924 20.6896 14.4443 20.5132 14.9376 20.1606C15.4307 19.8075 15.7949 19.2869 16.0298 18.5981C16.2647 17.9094 16.3821 17.128 16.3821 16.2542C16.3821 15.3051 16.2527 14.4942 15.9946 13.8225C15.7438 13.1421 15.3721 12.638 14.8788 12.3103C14.4007 11.9874 13.8468 11.8171 13.2819 11.8191C12.9059 11.8191 12.4366 11.9871 11.8727 12.3232L10.8393 12.8775V12.3232L15.4895 5.67021H9.05451V12.5748C9.05451 13.1462 9.17195 13.6166 9.40684 13.9863C9.64172 14.356 10.0017 14.5407 10.4874 14.5407C10.8626 14.5407 11.2231 14.4064 11.5676 14.1372C11.9144 13.8659 12.216 13.5338 12.4599 13.155C12.4912 13.0788 12.5304 13.0243 12.5774 12.9907C12.6195 12.9507 12.6737 12.9285 12.73 12.9279C12.816 12.9279 12.9177 12.9741 13.0354 13.0667C13.145 13.2007 13.1998 13.3562 13.1998 13.5326C13.1863 13.6514 13.1666 13.7692 13.1408 13.8856C12.8749 14.524 12.5068 15.0111 12.0371 15.347C11.5797 15.6791 11.0394 15.8548 10.4874 15.8512C9.09367 15.8512 8.13055 15.5571 7.59837 14.9694C7.06619 14.381 6.79993 13.5829 6.79993 12.5752V5.67021H3.51172V4.38475H6.79993V1.46182L6.0484 0.654721V0H8.23246L9.05419 0.453375V4.38475L17.5561 4.35975L18.4018 5.26682L13.188 10.8614C13.5037 10.7263 13.8361 10.6415 14.1745 10.6093C14.7381 10.6093 15.3721 10.8026 16.0767 11.1891C16.7892 11.567 17.3372 12.0881 17.7205 12.7512C18.1042 13.4066 18.3507 14.0367 18.4605 14.6414C18.5779 15.2465 18.6367 15.7838 18.6367 16.2542C18.6367 17.3297 18.4251 18.329 18.0026 19.2535C17.5799 20.1772 16.9379 20.8659 16.0767 21.3197C15.2155 21.7734 14.2838 22 13.2819 22Z"
                                fill="#2C7DF7"
                              ></path>
                            </svg>
                            Tezos
                          </div>
                          <div className="col-rankingg">
                            <div className="author-pd">
                              <div className="avatar">
                                <img src={avtp7} alt="images" />
                              </div>
                              <Link to="#" className="name">
                                Hazel Middleton
                              </Link>
                            </div>
                          </div>
                          <div className="col-rankingg">0.45 Flow</div>
                          <div className="dot">
                            <Link to="#">
                              <i className="fas fa-ellipsis-h"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="table-btn">
                          <Link to="#">더 불러오기</Link>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="inner-content profile">
                      <h4 className="title-dashboard">프로필 수정</h4>
                      <form action="#" className="form-edit-profile">
                        <div className="user-profile">
                          <div className="title">계정정보</div>
                          <fieldset>
                            <h6>아이디</h6>
                            <input
                              type="text"
                              placeholder="Francisco Maia"
                              required
                            />
                          </fieldset>
                          <fieldset>
                            <h6>이름</h6>
                            <input
                              type="text"
                              placeholder="Francisco Maia"
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="user-profile">
                          <div className="title">자세한 정보</div>
                          <fieldset>
                            <h6>주소</h6>
                            <input
                              type="text"
                              placeholder="83222 Dicki View, South Pasqualeview, RI 79216-3100"
                              required
                            />
                          </fieldset>
                          <fieldset>
                            <h6>상세주소</h6>
                            <input
                              type="text"
                              placeholder="83222 Dicki View, South Pasqualeview, RI 79216-3100"
                              required
                            />
                          </fieldset>
                        </div>
                        <button className="btn-form">수정하기</button>
                        <button
                          className="btn-form"
                          style={{ marginLeft: "1rem" }}
                          onClick={onLogout}
                        >
                          로그아웃
                        </button>
                      </form>
                    </div>
                  </TabPanel>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
