import ColorThemeSwitch from 'components/ColorThemeSwitch';
import GameCardList from 'components/GameCardList';
import Header from 'components/Header';
import './style.scss';

const Home = () => (
  <div className="Home">
    <header className="Home__header">
      <Header
        title="Game Seeker"
        subtitle="Welcome on my video game website!"
      />
      <ColorThemeSwitch />
    </header>
    <GameCardList />
  </div>
);

export default Home;
