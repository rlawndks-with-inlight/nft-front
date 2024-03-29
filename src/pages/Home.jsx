import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dataCategory from "../assets/fake-data/data-category";
import TopSeller from "../components/topseller/TopSeller";
import dataSeller from "../assets/fake-data/data-topseller";
import dataCollection from "../assets/fake-data/data-collection";
import Banner03 from "../components/banner/Banner03";
import LiveAutions3 from "../components/liveautions/LiveAutions3";
import dataLiveaution from "../assets/fake-data/data-liveaution";
import Category from "../components/category/Category";
import Collection from "../components/collection/Collection";
import dataBanner2 from "../assets/fake-data/data-banner-2";
import Explore2 from "../components/explore/Explore2";
import dataExplore from "../assets/fake-data/data-explore";
import Create2 from "../components/create/Create2";
import axios from "axios";
import { toast } from "react-hot-toast";
import { backUrl } from "../data/Data";
import HotPick from "../components/hotpick/HotPick";
import Loading from "../components/Loading";
Home.propTypes = {};

function Home(props) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getHomeContent();
  }, []);
  const getHomeContent = async () => {
    setLoading(true);
    const { data: response } = await axios.get("/api/gethomecontent");
    let obj = response?.data;
    if (obj["setting"]) {
      let setting_keys = Object.keys(obj["setting"]);
      obj["banner"] = [];
      obj["bottom"] = [];
      for (var i = 0; i < setting_keys.length; i++) {
        if (obj["setting"][setting_keys[i]]) {
          if (setting_keys[i].includes("banner_img")) {
            obj["banner"].push({
              img: backUrl + obj["setting"][setting_keys[i]],
              heading: "NFT를 수집 및 판매합니다.",
              desc: "NOWNFT에서 원하는 NFT를 찾아보세요.",
            });
          }
          if (setting_keys[i].includes("bottom_img")) {
            obj["bottom"].push({
              img: backUrl + obj["setting"][setting_keys[i]],
            });
          }
        }
      }
    }
    setPost(obj);
    setLoading(false);
  };
  return (
    <div className="home-3">
      <div id="page">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Banner03 data={post?.banner ?? []} />

            <Category data={post?.item_category ?? []} />

            {/* <LiveAutions3 data={dataLiveaution} />

            <TopSeller data={dataSeller} /> */}

            <HotPick category_list={post?.item_category} is_limit={true} />
            {/* <Collection data={dataCollection} /> */}
            <Create2 data={post?.bottom ?? []} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
