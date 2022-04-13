import "./styles.scss";
import logo from "../../assets/Logo.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Partners
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Stories
          </a>
        </li>
      </ul>
      <button aria-label="download" type="button" className="nav__btn">
        Download for free
      </button>
    </nav>
  );
};
export default Nav;