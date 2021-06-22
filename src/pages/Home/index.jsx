import GameCardList from 'components/GameCardList';
import Title from 'components/Title';

const Home = () => (
  <div className="Home">
    <Title
      title="Game Seeker"
      subtitle="Bienvenue sur mon site de recherche de jeux vidéos."
    />
    <GameCardList />
  </div>
);

export default Home;
