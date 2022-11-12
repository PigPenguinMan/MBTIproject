import { Outlet } from "react-router-dom";
import NavBarComp from "../components/NavBarComp";

const Layout = () => {
    return ( 
        <div className="Layout">
            <NavBarComp></NavBarComp>
            
            <Outlet/>
        </div>
     );
}
 
export default Layout;