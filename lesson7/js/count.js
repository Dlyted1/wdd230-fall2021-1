var n = localStorage.getItem('on_load_counter');
 
if (n === null) {
    n = 0;
}
 
n++;
 
localStorage.setItem("on_load_counter", n);
 
document.getElementById('counter').innerHTML = n;


const lastVisit = localStorage.getItem('lastvisit') || Date.now();





