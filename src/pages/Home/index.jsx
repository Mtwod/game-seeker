import ColorThemeSwitch from 'components/ColorThemeSwitch';
import GameCardList from 'components/GameCardList';
import Title from 'components/Title';
import './style.scss';

const Home = () => (
  <div className="Home">
    <header className="Home__header">
      <Title
        title="Game Seeker"
        subtitle="Bienvenue sur mon site de recherche de jeux vidéos."
      />
      <ColorThemeSwitch />
    </header>
    <GameCardList />
  </div>
);

export default Home;
