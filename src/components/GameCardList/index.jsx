import './style.scss';
import GameCard from 'components/GameCard';
import { useEffect, useState } from 'react';
import getSoonToBeReleasedGames from 'api/games';

const GameCardList = () => {
  const [games, setGames] = useState([]);

  useEffect(async () => {
    const fetchedGames = await getSoonToBeReleasedGames();
    setGames(fetchedGames);
  }, []);

  return (
    games.length === 0 ? (
      <p>Il n&apos;y a aucun jeu qui a été trouvé !</p>
    ) : (
      <ul className="GameCardList">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </ul>
    )
  );
};

export default GameCardList;
