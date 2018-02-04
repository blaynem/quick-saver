import moment from 'moment';

export default convertDate = (epochDate) => {
  const converted = moment(epochDate).format("MMM D, YYYY h:mm A")
  return converted;
}