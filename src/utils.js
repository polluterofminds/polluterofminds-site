const monthMapper = {
  "01": "January", 
  "02": "February", 
  "03": "March", 
  "04": "April", 
  "05": "May", 
  "06": "June", 
  "07": "July", 
  "08": "August", 
  "09": "September", 
  "10": "October", 
  "11": "November", 
  "12": "December"
}

export const prettyDate = (date) => {
  console.log(date)
  const dateObj = new Date(date);
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  const prettyMonth = month.toString().length === 1 ? `0${month}` : month;  
  const prettyDay = day.toString().length === 1 ? `0${day}` : day;
  return `${prettyDay} ${monthMapper[prettyMonth]} ${year}`;
}