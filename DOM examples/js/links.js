console.log("totally spies");
const body = document.querySelector('body');
body.style.backgroundColor = "#B90000";
const links = document.querySelectorAll("a");
for(let i = 0; i < links.length; i++){
// console.log(links[i]);
links[i].style.color = "black";
}