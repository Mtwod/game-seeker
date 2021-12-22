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
      <p>No game was found!</p>
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
