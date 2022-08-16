import iconLogo from "../../images/logo.svg";
import "./Header.scss";

const Header = () => {
    return(
        <header className="header">
            <div className="logo">
                <img src={iconLogo} alt="Softfone" />
            </div>
        </header>
    )
}

export default Header;