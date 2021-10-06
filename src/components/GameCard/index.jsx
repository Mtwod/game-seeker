// import exampleGameImage from 'Cyberpunk2077_bgimg.jpg';
import { Link } from 'react-router-dom';
import './style.scss';

const GameCard = ({ game }) => (
  <li className="GameCard">
    <Link to="/">
      <img className="GameCard__image" src={game.background_image} alt="game" />
      <p className="GameCard__title">{game.name}</p>
      <p className="GameCard__platform">{game.parent_platforms[0].platform.name}</p>
    </Link>
  </li>
);

export default GameCard;
