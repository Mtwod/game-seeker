const order = {
  RELEASED: '&ordering=released',
  RELEASED_INVERSED: '&ordering=-released',
  RATING: '&ordering=rating',
  RATING_INVERSED: '&ordering=-rating',
};

const categories = {
  GAMES: 'games',
};

const API_CONFIG = {
  BASE_URL: 'https://api.rawg.io/api/',
  CATEGORIES: categories,
  KEY: `?key=${process.env.REACT_APP_RAWG_API_KEY}`,
  PAGE_SIZE: '&page_size=9',
  PAGE_NUMBER: (pageNumber) => `&page=${pageNumber}`,
  ORDER: order,
  DATES: (startDate, endDate) => `&dates=${startDate},${endDate}`,
};

export default API_CONFIG;
