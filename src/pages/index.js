import Blog01 from "./Blog01";
import Blog from "./Blog";
import BlogDetails01 from "./BlogDetails01";
import BlogDetails02 from "./BlogDetails02";
import Collection from "./Collection";
import Contact from "./Contact";
import Create from "./Create";
import Dashboard from "./Dashboard";
import Explore from "./Explore";
import Explore02 from "./Explore02";
import Explore03 from "./Explore03";
import Explore04 from "./Explore04";
import Faqs from "./Faqs";
import HelpCenter from "./HelpCenter";
import Home01 from "./Home01";
import Home02 from "./Home02";
import Home from "./Home";
import Home04 from "./Home04";
import Home05 from "./Home05";
import Home06 from "./Home06";
import ItemDetails01 from "./ItemDetails01";
import ItemDetails02 from "./ItemDetails02";
import LiveAutions01 from "./LiveAutions01";
import LiveAutions02 from "./LiveAutions02";
import Login from "./Login";
import Ranking from "./Ranking";
import SignUp from "./SignUp";
import Wallet from "./Wallet";
import MItemEdit from './Manager/MItemEdit';
import MItemList from './Manager/MItemList';
import MLogin from './Manager/MLogin';


const routes = [
  { path: '/', component: <Home /> },
  { path: '/home', component: <Home /> },
  // { path: '/home-v2', component: <Home02 />},
  // { path: '/home-v4', component: <Home04 />},
  // { path: '/home-v5', component: <Home05 />},
  // { path: '/home-v6', component: <Home06 />},
  { path: '/explore', component: <Explore /> },
  // { path: '/explore-v2', component: <Explore02 />},
  // { path: '/explore-v3', component: <Explore03 />},
  // { path: '/explore-v4', component: <Explore04 />},
  // { path: '/collection', component: <Collection />},
  // { path: '/live-auctions-v1', component: <LiveAutions01 />},
  // { path: '/live-auctions-v2', component: <LiveAutions02 />},
  { path: '/item-details-v1', component: <ItemDetails01 /> },
  { path: '/item-details-v2', component: <ItemDetails02 /> },
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/ranking', component: <Ranking /> },
  { path: '/help-center', component: <HelpCenter /> },
  { path: '/faqs', component: <Faqs /> },
  { path: '/wallet', component: <Wallet /> },
  { path: '/login', component: <Login /> },
  { path: '/signup', component: <SignUp /> },
  { path: '/create', component: <Create /> },
  // { path: '/blog-v1', component: <Blog01 />},
  { path: '/blog', component: <Blog /> },
  { path: '/blog-details-v1', component: <BlogDetails01 /> },
  { path: '/blog-details-v2', component: <BlogDetails02 /> },
  { path: '/contact', component: <Contact /> },

]
const zManagerRoute = [
  { path: '/manager', component: <MLogin />, title: "관리자로그인", non_layout: true },
  { path: '/manager/login', component: <MLogin />, title: "관리자로그인", non_layout: true },
  { path: '/manager/edit/:table/:pk', component: <MItemEdit />, title: "" },
  { path: '/manager/list/:table/:pk', component: <MItemList />, title: "" },
  { path: '/manager/list/:table', component: <MItemList />, title: "" },
];
export {
  routes, zManagerRoute
};