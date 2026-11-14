const btn = document.getElementById("like");
let likes = 128;
btn.onclick = function (){
btn.classList.toggle("liked");
if (btn.classList.contains("liked")) {

likes = likes + 1;
btn.textContent = "💗 " + likes;
console.log("Thanks for ordering");

}else {

likes = likes - 1;
btn.textContent = "♡ " + likes; 
}
}

