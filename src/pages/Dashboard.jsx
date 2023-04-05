import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PageTitle from "../components/pagetitle/PageTitle";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/background/thumb-pagetitle.jpg";
import avt from "../assets/images/author/author1.png";
import { commarNumber, returnMoment } from "../functions/utils";

import avtf1 from "../assets/images/author/author-follow1.jpg";
import avtf2 from "../assets/images/author/author-follow2.jpg";
import avtf3 from "../assets/images/author/author-follow3.jpg";
import avtf4 from "../assets/images/author/author-follow4.jpg";
import avtf5 from "../assets/images/author/author-follow3.jpg";
import avtf6 from "../assets/images/author/author-follow4.jpg";

import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { backUrl, defaultImageSrc } from "../data/Data";
import { Icon } from "@iconify/react";
import theme from "../styles/theme";

Dashboard.propTypes = {};

function Dashboard(props) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [dashboard, setDashboard] = useState({});

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
  const [historyType, setHistoryType] = useState(-1);
  const zHistoryFilter = [
    {
      icon: <Icon icon="material-symbols:border-all" />,
      type: -1,
      name: "전체",
    },
    {
      icon: <Icon icon="ic:round-remove-red-eye" />,
      type: 0,
      name: "조회",
    },
    {
      icon: <Icon icon="ic:baseline-thumb-up" />,
      type: 5,
      name: "좋아요",
    },
    {
      icon: <Icon icon="ic:baseline-thumb-up" />,
      type: 6,
      name: "좋아요취소",
    },
    {
      icon: <Icon icon="ic:round-attach-money" />,
      type: 10,
      name: "경매",
    },
    {
      icon: <Icon icon="mdi:money-off" />,
      type: 11,
      name: "경매취소",
    },
    {
      icon: <Icon icon="material-symbols:edit-square-rounded" />,
      type: 15,
      name: "상품수정",
    },
    {
      icon: <Icon icon="icon-park:deadline-sort" />,
      type: 20,
      name: "경매마감",
    },
    {
      icon: <Icon icon="bxs:purchase-tag" />,
      type: 25,
      name: "구매",
    },
    {
      icon: <Icon icon="bx:purchase-tag" />,
      type: 26,
      name: "구매취소",
    },
  ];
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
    let data = response?.data;
    console.log(data);
    let heart_item_list = [];
    for (var i = 0; i < data["hearts"].length; i++) {
      let find_index = data["items"].findIndex(
        (e) => e.pk == data["hearts"][i]?.item_pk
      );
      heart_item_list.push(data["items"][find_index]);
    }
    data["heart_items"] = heart_item_list;
    setDashboard(data);
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
  const getIconByHistoryType = (num) => {
    for (var i = 0; zHistoryFilter.length; i++) {
      if (zHistoryFilter[i].type == num) {
        return zHistoryFilter[i];
      }
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
                                  {item?.end_date}
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
                        {dashboard?.wallets &&
                          dashboard?.wallets.map((item, idx) => (
                            <div key={idx.id} className="tf-wallet">
                              <div className="icon">
                                <img
                                  src={backUrl + item?.img_src}
                                  alt="Binasea"
                                />
                                <span className={`label ${idx.cate}`}>
                                  베타
                                </span>
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
                            {dashboard?.history &&
                              dashboard?.history.map((item, idx) => (
                                <>
                                  {historyType == item?.type ||
                                  historyType == -1 ? (
                                    <>
                                      <div className="history-details tf-loadmore 3d anime">
                                        <div className="authorr">
                                          <div className="avatar">
                                            <img
                                              src={
                                                item?.user_profile_img
                                                  ? backUrl +
                                                    item?.user_profile_img
                                                  : defaultImageSrc
                                              }
                                              alt="images"
                                            />
                                          </div>
                                          <div className="content">
                                            <Link to="#" className="name">
                                              {item?.user_nickname}
                                            </Link>
                                            <div className="description">
                                              {item?.note}
                                            </div>
                                            <div className="date">
                                              <span className="month">
                                                {item?.date}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="category-filter"
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          {
                                            getIconByHistoryType(item?.type)
                                              .icon
                                          }
                                          <div style={{ marginLeft: "0.5rem" }}>
                                            {
                                              getIconByHistoryType(item?.type)
                                                .name
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              ))}
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
                                <Icon icon="material-symbols:search" />
                              </button>
                            </form>
                          </div>
                          <div className="remove-filter">
                            <span className="label">필터</span>
                            <span className="reset">Reset</span>
                          </div>
                          <ul className="filter-menu">
                            {zHistoryFilter.map((item, idx) => (
                              <>
                                <li
                                  className={
                                    item?.type == historyType ? "active" : ""
                                  }
                                  onClick={() => {
                                    setHistoryType(item?.type);
                                  }}
                                >
                                  <Link
                                    to="#"
                                    data-filter=".3d"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    {item?.icon}
                                    <div style={{ marginLeft: "1rem" }}>
                                      {item?.name}
                                    </div>
                                  </Link>
                                </li>
                              </>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="inner-content inventory favorite">
                      <h4 className="title-dashboard">좋아요</h4>
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
                        {dashboard?.heart_items &&
                          dashboard?.heart_items.map((item, idx) => (
                            <>
                              <div className="content-ranking">
                                <div className="col-rankingg">
                                  <div className="box-product-favorite">
                                    <Link to="#" className="bookmark">
                                      <Icon
                                        icon="mdi:cards-heart"
                                        style={{ color: theme.color.red }}
                                      />
                                    </Link>
                                    <div className="image">
                                      <img
                                        src={backUrl + item?.img_src}
                                        alt="Binasea"
                                      />
                                    </div>
                                    <Link to="#" className="name">
                                      {item?.name} #{item?.pk}
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-rankingg coin">
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
                                  <div className="author-pd">
                                    <div className="avatar">
                                      <img
                                        src={
                                          item?.ser_profile_img
                                            ? backUrl + item?.ser_profile_img
                                            : defaultImageSrc
                                        }
                                        alt="images"
                                      />
                                    </div>
                                    <Link to="#" className="name">
                                      {item?.nickname}
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-rankingg">
                                  {commarNumber(item?.price)}{" "}
                                  {item?.wallet_unit}
                                </div>
                                <div className="dot">
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
