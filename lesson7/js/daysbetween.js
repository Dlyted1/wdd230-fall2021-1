//determine days between stored date and visit date... today
//determine todays date
const todaysDate = new Date(); 
const millisecondsToDays = 8640000;  // divide the difference between dates in milliseconds
// last time visit... stored  in local storage
   //1.     localStrage.getItem('lastvisit')

const lastVisit = localStorage.getItem("lastvisit") || Date.now(); 
  if (lastVisit == 0) {
    message = 'Welcome to your 1st visit!'

  }

  else {

//determine number of days

  (lastvisit - Date.now() / millisecondsToDays)
     // to round number    .toFixed(0)
  }
  //display here like in windchill
  document.getElementById("lastvisit").innerHTML= lastVisit;

  //need to update the stored date
  localStorage.setItem("lastvisit", Date.now());



