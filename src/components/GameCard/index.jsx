import exampleGameImage from 'Cyberpunk2077_bgimg.jpg';
import './style.scss';

const GameCard = () => (
  <li className="GameCard">
    <a href="/">
      <img className="GameCard__image" src={exampleGameImage} alt="example game" />
      <p className="GameCard__title">Cyberpunk 2077</p>
      <p className="GameCard__platform">Playstation?</p>
    </a>
  </li>
);

export default GameCard;
