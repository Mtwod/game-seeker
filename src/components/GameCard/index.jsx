import exampleGameImage from 'Cyberpunk2077_bgimg.jpg';
import './style.scss';

const GameCard = () => (
  <div className="GameCard">
    <img className="GameCard__image" src={exampleGameImage} alt="example game" />
    <p className="GameCard__title">Cyberpunk 2077</p>
    <p className="GameCard__platform">Playstation?</p>
    <a href="/" className="GameCard__detailLink">Voir en détails</a>
  </div>
);

export default GameCard;
