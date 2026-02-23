console.log('loaded');
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");
const mypopover = document.getElementById("mypopover");

btn.addEventListener("click", function() {
    msg.textContent = "世界に羽ばたこう！";
    //page color change 
    document.body.style.backgroundColor = "pink";
    //show images
    mypopover.style.display = "block";
});