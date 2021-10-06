import API_CONFIG from 'api/config';
import date from 'utils/date';

const getSoonToBeReleasedGames = async () => {
  const gamesUrl = `${API_CONFIG.BASE_URL
    + API_CONFIG.CATEGORIES.GAMES
    + API_CONFIG.KEY
    + API_CONFIG.PAGE_SIZE
    + API_CONFIG.PAGE_NUMBER(1)
    + API_CONFIG.ORDER.RELEASED
    + API_CONFIG.DATES(date.today, date.add(1, 'year'))}`;

  const response = await fetch(gamesUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  const soonToBeReleasedGames = data.results;

  return soonToBeReleasedGames;
};

export default getSoonToBeReleasedGames;
