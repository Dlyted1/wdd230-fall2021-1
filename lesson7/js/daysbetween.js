//determine days between stored date and visit date... today
//determine todays date 
const millisecondsToDays = 8640000;  // divide the difference between dates in milliseconds
// last time visit... stored  in local storage
   //1.     localStrage.getItem('lastvisit')

const lastVisit = localStorage.getItem("lastvisit"); // || Date.now();  

//determine number of days

  (lastvist - Date.now() / millisecondsToDays);   // to round number    .toFixed(0)

  //display here like in windchill
  document.getElementById("lastvisit").innerHTML= lastVisit;

  //need to update the stored date
  localStorage.setItem("lastvisit", Date.now());



