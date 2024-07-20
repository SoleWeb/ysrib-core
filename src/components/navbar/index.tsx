import BrandLogo from "./logo";
import {DesktopNavbar} from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

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
        <DesktopNavbar />
        <MobileNavbar />
    </nav>
    {/* Filler for NAV */}
    <div className="h-20"></div>
    </>;
}
 
export default Navbar;