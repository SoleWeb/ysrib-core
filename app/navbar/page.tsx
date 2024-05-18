import NavbarHdrActions from "./navbarAction";
import BrandLogo from "./logo";
import {NavbarHdr} from "./navbar";

const Navbar = () => {
    return <div className="
    flex
    justify-between
    items-center
    px-10
    border-b
    h-20
    ">
        <BrandLogo />
        <NavbarHdr />
        <NavbarHdrActions />
    </div>;
}
 
export default Navbar;