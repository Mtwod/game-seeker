import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';
const todayDate = dayjs().format(dateFormat);

const date = {
  today: todayDate,
  add: (number, dayMonthOrYear = 'day', startDate = todayDate) => dayjs(startDate)
    .add(number, dayMonthOrYear)
    .format(dateFormat),
  substract: (number, dayMonthOrYear, startDate) => dayjs(startDate)
    .substract(number, dayMonthOrYear)
    .format(dateFormat),
};

export default date;
