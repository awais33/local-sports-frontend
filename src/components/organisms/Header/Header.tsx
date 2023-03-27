import ButtonComponent from "../../atoms/Button/Button";
// import Image from "../../atoms/Image";
import TextLink from "../../molecules/TextLink";
import { HeaderProps } from "./@types";

const Header = ({ variant = 'warning', decoration = 'none', onClick }: HeaderProps) => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            {/* <Image className="navbar-brand" src="cricket logo.png" alt="logo" /> */}
            One Match
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <TextLink className="nav-link" variant={variant} decoration={decoration} text="Home" onClick={onClick} ></TextLink>
              </li>
              <li className="nav-item">
                  <TextLink className="nav-link" variant={variant} decoration={decoration} text="About" onClick={onClick} ></TextLink>
              </li>
              <li className="nav-item">
                  <TextLink className="nav-link" variant={variant} decoration={decoration} text="Contact" onClick={onClick} ></TextLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <ButtonComponent Children="Contact Us" className="btn btn-warning" />
            </form>
          </div>
      </nav>
  
  );
};

export default Header;