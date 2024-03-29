// import exampleGameImage from 'Cyberpunk2077_bgimg.jpg';
import { Link } from 'react-router-dom';
import './style.scss';
import extractListFromArray from 'utils/arrayOfObject';

const GameCard = ({ game }) => (
  <li className="GameCard">
    <Link to="/">
      <img className="GameCard__image" src={game.background_image} alt="game" />
      <p className="GameCard__imageHover">
        {`Release date : ${game.released}`}
        {`\nGenres : ${extractListFromArray(game.genres, 'name')}`}
      </p>
      <p className="GameCard__title">{game.name}</p>
      <p className="GameCard__platform">
        {extractListFromArray(game.parent_platforms.map((platform) => platform.platform), 'name')}
      </p>
    </Link>
  </li>
);

export default GameCard;
