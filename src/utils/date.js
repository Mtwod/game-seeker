import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';

const datePick = (operator, number, dayMonthYear) => {
  if (operator === 'add') {
    return dayjs().add(number, dayMonthYear).format(dateFormat);
  }
  if (operator === 'substract') {
    return dayjs().substract(number, dayMonthYear).format(dateFormat);
  }
  throw new Error('Invalid parameter');
};

export default datePick;
