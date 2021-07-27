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
  const dateObj = new Date(date);
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  const prettyMonth = month.toString().length === 1 ? `0${month}` : month;  
  const prettyDay = day.toString().length === 1 ? `0${day}` : day;
  return `${prettyDay} ${monthMapper[prettyMonth]} ${year}`;
}

export const keys = {
  "API_Key": "c995fb727761e93018c1",
  "API_Secret": "778666d8f3362758f35d530f7f4036278403bc9b958839ad0a0886ae4e7aa340",
  "JWT": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhNTZkNGZkMy1lZjU4LTQ3ZjMtOGE0OC1iZjllMDdiMTI1N2IiLCJlbWFpbCI6Imp1c3RpbkBwb2xsdXRlcm9mbWluZHMuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZX0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImM5OTVmYjcyNzc2MWU5MzAxOGMxIiwic2NvcGVkS2V5U2VjcmV0IjoiNzc4NjY2ZDhmMzM2Mjc1OGYzNWQ1MzBmN2Y0MDM2Mjc4NDAzYmM5Yjk1ODgzOWFkMGEwODg2YWU0ZTdhYTM0MCIsImlhdCI6MTYyNzMwODM5N30.Xz1KsFhGGVjA1DfsHpZdH8rR052oXi0QHZrnBRaDZJ8"
}