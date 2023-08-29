import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {Outlet} from 'react-router-dom';
import "./MainLayout.css"

export default function MainLayout() {
  return (
      <>
        <div className="wrapper">
          <Header/>
          <Outlet/>
        </div>
        <div className="footer-site"><Footer/></div>
      </>
  );
}