// propertyToExtract must be a string

const extractListFromArray = (array, propertyToExtract) => {
  if (array.length === 0) return 'Not specified';
  return array
    .reduce((previousValue, currentValue) => {
      previousValue.push(currentValue[propertyToExtract]);
      return previousValue;
    }, [])
    .join(', ');
};

export default extractListFromArray;
