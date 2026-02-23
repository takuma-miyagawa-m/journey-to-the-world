console.log('loaded');
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  msg.textContent = "世界に羽ばたこう！";
  //page color change 
    document.body.style.backgroundColor = "pink";
});