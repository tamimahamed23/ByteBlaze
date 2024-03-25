import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
          <div>
          <Navbar></Navbar>
          </div>
            <div className="min-h-[calc(100vh-316px)]">
            <Outlet></Outlet>
            </div>
           <div>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;