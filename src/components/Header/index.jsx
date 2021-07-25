import { Link } from 'react-router-dom';
import './style.scss';

const Header = ({ title, subtitle }) => (
  <div className="Header">
    <h1 className="Header__title">
      <Link to="/" className="Header__title__link">
        {title}
      </Link>
    </h1>
    <p className="Header__subtitle">{subtitle}</p>
  </div>
);

export default Header;
