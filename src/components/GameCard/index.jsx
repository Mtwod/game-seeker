import exampleGameImage from 'Cyberpunk2077_bgimg.jpg';
import { Link } from 'react-router-dom';
import './style.scss';

const GameCard = () => (
  <li className="GameCard">
    <Link to="/">
      <img className="GameCard__image" src={exampleGameImage} alt="example game" />
      <p className="GameCard__title">Cyberpunk 2077</p>
      <p className="GameCard__platform">Playstation?</p>
    </Link>
  </li>
);

export default GameCard;
