import NavbarHdrActions from "./navbarAction";
import BrandLogo from "./logo";
import {NavbarHdr} from "./navbarHdrMenu";

const Navbar = () => {
    return <><nav className="
    flex
    justify-between
    items-center
    px-10
    border-b
    h-20
    fixed
    bg-background/90
    backdrop-blur-md
    w-full
    z-50
    ">
        <BrandLogo/>
        <NavbarHdr />
        <NavbarHdrActions />
    </nav>
    {/* Filler for NAV */}
    <div className="h-20"></div>
    </>;
}
 
export default Navbar;