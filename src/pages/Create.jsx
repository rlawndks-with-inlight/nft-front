import React, { useState } from "react";
import PropTypes from "prop-types";
import PageTitle from "../components/pagetitle/PageTitle";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useNavigate } from "react-router-dom";
import icon1 from "../assets/images/svg/metamask.svg";
import icon2 from "../assets/images/svg/coinbase.svg";
import icon3 from "../assets/images/svg/torus.svg";
import icon4 from "../assets/images/svg/fortmatic.svg";
import icon5 from "../assets/images/svg/drap-upload.svg";
import img1 from "../assets/images/collection/add-collection.jpg";
import img from "../assets/images/product/product1.png";
import ico1 from "../assets/images/icon/rain1.svg";
import ico2 from "../assets/images/icon/rain2.svg";
import ico3 from "../assets/images/icon/ethe.svg";
import avt from "../assets/images/author/author1.png";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { backUrl, defaultImageSrc } from "../data/Data";
import $ from "jquery";
import { commarNumber } from "../functions/utils";
import theme from "../styles/theme";
import Swal from "sweetalert2";
Create.propTypes = {};

function Create(props) {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({});
  const [wallets, setWallets] = useState([]);
  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const types = [
    { val: 0, name: "일반판매" },
    { val: 1, name: "경매판매" },
  ];
  const defaultObj = {
    wallet: {},
    category_pk: undefined,
    img: {
      content: undefined,
      url: "",
    },
    name: "",
    price: "",
    note: "",
    end_date: "",
    property_list: [],
    type: 0,
  };
  const [values, setValues] = useState(defaultObj);
  useEffect(() => {
    async function isAdmin() {
      const { data: response } = await axios.get("/api/getmyinfo");
      if (response?.data?.pk > 0) {
        await localStorage.setItem("auth", JSON.stringify(response?.data));
        let obj = response?.data;
        setAuth(obj);
      } else {
        toast.error("로그인을 해주세요.");
        localStorage.removeItem("auth");
        navigate("/login");
      }
    }
    isAdmin();
    if (window && window.flutter_inappwebview) {
    }
    getWallets();
  }, []);
  const getWallets = async () => {
    const { data: response } = await axios.get(`/api/items?table=wallet`);
    setWallets(response?.data);
    const { data: response2 } = await axios.get(
      `/api/items?table=item_property`
    );
    setProperties(response2?.data);
    const { data: response3 } = await axios.get(
      `/api/items?table=item_category`
    );
    setCategories(response3?.data);
  };
  const onCreate = async () => {
    if (
      !values.wallet?.pk ||
      !values.category_pk ||
      !values.img.content ||
      !values.name ||
      !values.price ||
      !values.note ||
      (values.type==1 && !values.end_date)
    ) {
      toast.error("필수값을 입력해 주세요.");
      return;
    }
    Swal.fire({
      title: `상품을 생성 하시겠습니까?`,
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let formData = new FormData();
        formData.append("table", "item");
        formData.append("content", values.img.content);
        formData.append("category_pk", values.category_pk);
        formData.append("wallet_pk", values.wallet?.pk);
        formData.append("name", values.name);
        formData.append("price", parseInt(values.price));
        formData.append("note", values.note);
        formData.append("end_date", values.end_date);
        formData.append("property_list", JSON.stringify(values.property_list));
        const { data: response } = await axios.post(
          "/api/additembyuser",
          formData
        );
        if (response?.result > 0) {
          toast.success("성공적으로 저장 되었습니다. \n심사 후 등록됩니다.");
          navigate("/explore");
        } else {
          toast.error(response?.message);
        }
      }
    });
  };
  const onChangeValues = (event) => {
    let { name, value, files } = event.target;

    if (name == "img") {
      setValues({
        ...values,
        ["img"]: {
          content: files[0],
          url: URL.createObjectURL(files[0]),
        },
      });
      $(".img").val("");
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const onClickWallet = (item) => {
    setValues({ ...values, wallet: item });
  };
  const onClickProperties = (pk) => {
    let property_list = [...values.property_list];
    if (property_list.includes(pk)) {
      let find_index = property_list.findIndex((e) => e == pk);
      property_list.splice(find_index, 1);
    } else {
      property_list.push(pk);
    }
    setValues({ ...values, ["property_list"]: property_list });
  };
  return (
    <div>
      <PageTitle none="none" title="생성하기" />
      <section className="tf-add-nft">
        <div className="tf-container">
          <div className="row ">
            <div className="col-xl-9 col-lg-8 ">
              <div className="add-nft-inner">
                <h6 className="title">지갑 선택</h6>
                <p className="sub">지갑을 선택해 주세요.</p>
                <ul className="blockchain-button">
                  {wallets &&
                    wallets.map((item, idx) => (
                      <>
                        <li
                          onClick={() => {
                            onClickWallet(item);
                          }}
                          style={{
                            background: `${
                              values.wallet?.pk == item?.pk
                                ? theme.color.background1
                                : ""
                            }`,
                          }}
                        >
                          <Link to="#">
                            <img
                              src={backUrl + item?.img_src}
                              alt={item?.name}
                              style={{ width: "14px", height: "14px" }}
                            />
                            {item?.name}
                          </Link>
                        </li>
                      </>
                    ))}
                </ul>
                <fieldset className="propertise">
                  <label className="mb8">카테고리 선택</label>
                  <p className="sub">카테고리를 선택해 주세요. (단일 선택)</p>
                  <ul
                    className="propertise-list"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {categories &&
                      categories.map((item, idx) => (
                        <>
                          <li
                            onClick={() =>
                              setValues({
                                ...values,
                                ["category_pk"]: item?.pk,
                              })
                            }
                          >
                            <Link
                              to="#"
                              style={{
                                background: `${
                                  values.category_pk == item?.pk
                                    ? theme.color.background1
                                    : ""
                                }`,
                              }}
                            >
                              {item.name}
                            </Link>
                          </li>
                        </>
                      ))}
                  </ul>
                </fieldset>
                <Tabs className="tf-tab">
                  <TabPanel>
                    <div className="tab-create-item">
                      <h6 className="title">이미지 업로드</h6>
                      <p className="sub">NFT 이미지를 업로드 해주세요.</p>

                      <div className="drag-upload">
                        <input
                          type="file"
                          name="img"
                          className="img"
                          onChange={onChangeValues}
                        />
                        {values?.img?.url ? (
                          <>
                            <img
                              src={values?.img?.url}
                              alt="Binasea"
                              style={{ width: "150px", height: "auto" }}
                            />
                          </>
                        ) : (
                          <>
                            <img src={icon5} alt="Binasea" />
                            <h6 className="title">
                              아이템을 드래그 해서 생성하세요.
                            </h6>
                            <p className="sub-title">
                              PNG, GIF, WebP, MP4 Or MP3. Maximum File Size 100
                              Mb.
                            </p>
                          </>
                        )}
                      </div>

                      <h6 className="title">NFT 설명</h6>
                      <p className="sub mb22"></p>

                      <fieldset>
                        <label>NFT 이름</label>
                        <input
                          type="text"
                          name="name"
                          onChange={onChangeValues}
                          value={values.name}
                          placeholder="교환 가능한 로고 티셔츠"
                        />
                      </fieldset>

                      <fieldset>
                        <label>간단한 설명을 입력하세요.</label>
                        <textarea
                          id="note"
                          name="note"
                          onChange={onChangeValues}
                          value={values.note}
                          rows="4"
                          tabindex="4"
                          aria-required="true"
                          required=""
                        ></textarea>
                      </fieldset>

                      <fieldset className="propertise">
                        <label className="mb8">속성 선택</label>
                        <p className="sub">
                          사용할 속성을 선택해 주세요. (다중 선택)
                        </p>
                        <ul
                          className="propertise-list"
                          style={{ display: "flex", flexWrap: "wrap" }}
                        >
                          {properties &&
                            properties.map((item, idx) => (
                              <>
                                <li onClick={() => onClickProperties(item?.pk)}>
                                  <Link
                                    to="#"
                                    style={{
                                      background: `${
                                        values.property_list.includes(item?.pk)
                                          ? theme.color.background1
                                          : ""
                                      }`,
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              </>
                            ))}
                        </ul>
                      </fieldset>
                      <fieldset className="propertise">
                        <label className="mb8">판매 타입 선택</label>
                        <p className="sub">타입을 선택해 주세요. (단일 선택)</p>
                        <ul
                          className="propertise-list"
                          style={{ display: "flex", flexWrap: "wrap" }}
                        >
                          {types &&
                            types.map((item, idx) => (
                              <>
                                <li
                                  onClick={() =>
                                    setValues({
                                      ...values,
                                      ["type"]: item?.val,
                                    })
                                  }
                                >
                                  <Link
                                    to="#"
                                    style={{
                                      background: `${
                                        values.type == item?.val
                                          ? theme.color.background1
                                          : ""
                                      }`,
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              </>
                            ))}
                        </ul>
                      </fieldset>
                      <div className="set-item">
                        <fieldset>
                          <label className="mb8">
                            {values.type == 1 ? "시작 입찰가" : "상품 가격"}
                          </label>
                          <input
                            type="text"
                            placeholder="숫자를 입력해 주세요."
                            name="price"
                            onChange={onChangeValues}
                            value={values.price}
                          />
                        </fieldset>
                        {/* <fieldset>
                          <label className="mb8">
                            Select royalties amount, %
                          </label>
                          <input type="text" placeholder="E.G. 0,01 Eth" />
                        </fieldset> */}
                      </div>
                      {values.type == 1 ? (
                        <>
                          <div className="set-item">
                            <fieldset>
                              <label className="mb8">경매 마감일</label>
                              <input
                                type="date"
                                placeholder="숫자를 입력해 주세요."
                                name="end_date"
                                onChange={onChangeValues}
                                value={values.end_date}
                              />
                            </fieldset>
                            {/* <fieldset>
                          <label className="mb8">
                            Select royalties amount, %
                          </label>
                          <input type="text" placeholder="E.G. 0,01 Eth" />
                        </fieldset> */}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {/* <ul className="collection-list">
                        <li>
                          <div className="list">
                            <div className="infor">
                              <p>제품 업데이트</p>
                              <h6>플랫폼에서 메시지 수신</h6>
                            </div>

                            <div className="button-toggle">
                              <input type="checkbox" id="switch" />
                              <label htmlFor="switch"></label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list">
                            <div className="infor">
                              <p>미리 알림</p>
                              <h6>예약 알림, 가격 알림 수신</h6>
                            </div>
                            <div className="button-toggle mt0">
                              <input type="checkbox" id="switch1" />
                              <label htmlFor="switch1"></label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list">
                            <div className="infor">
                              <p>프로모션 및 팁</p>
                              <h6>쿠폰, 프로모션, 설문 조사 받기</h6>
                            </div>
                            <div className="button-toggle">
                              <input type="checkbox" id="switch2" />
                              <label htmlFor="switch2"></label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list">
                            <div className="infor">
                              <p>계정 지원</p>
                              <h6>계정, 여행, 법적 경고에 대한 메시지 수신</h6>
                            </div>
                            <div className="button-toggle">
                              <input type="checkbox" id="switch3" />
                              <label htmlFor="switch3"></label>
                            </div>
                          </div>
                        </li>
                      </ul> */}

                      <div className="bottom-button">
                        <Link
                          to="#"
                          className="tf-button active"
                          onClick={onCreate}
                        >
                          생성하기
                        </Link>
                        <Link
                          to="#"
                          className="tf-button"
                          onClick={() => setValues(defaultObj)}
                        >
                          모두 삭제
                        </Link>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <h5 className="title-preview">아이템 미리보기</h5>
              <div className="sc-product style1">
                <div className="top">
                  <Link to="#" className="tag">
                    {values.name} #1
                  </Link>
                  <div className="wish-list">
                    <Link to="#" className="heart-icon"></Link>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img
                      src={values.img.url ? values.img.url : defaultImageSrc}
                      alt="images"
                    />
                  </div>
                </div>
                <div className="bottom">
                  <div className="details-product">
                    <div className="author">
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
                      <div className="content">
                        <div className="position">작성자</div>
                        <div className="name">
                          {" "}
                          <Link to="#">{auth?.nickname}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="current-bid">
                      <div className="subtitle">현재 입찰가</div>
                      <div className="price">
                        <span className="cash">
                          {commarNumber(values.price)}{" "}
                          {values.wallet?.unit ?? "---"}
                        </span>
                        <span className="icon">
                          {values.wallet?.img_src ? (
                            <>
                              <img
                                src={backUrl + values.wallet?.img_src}
                                alt="images"
                                style={{ width: "16px" }}
                              />
                            </>
                          ) : (
                            <></>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-button">
                    <Link
                      to="#"
                      data-toggle="modal"
                      data-target="#popup_bid"
                      className="tf-button"
                    >
                      {" "}
                      <span className="icon-btn-product"></span> 입찰하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Create;
