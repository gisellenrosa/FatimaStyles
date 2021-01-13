
window.addEventListener('scroll', function(){
    console.log(window.scrollY)
    const nav = document.querySelector('nav');
    nav.classList.toggle('stick', window.scrollY > 165);
    
    
})



const bannerStatus = 1;
const bannerTime = 4000;
function bannerLoop() {
    if (bannerStatus === 1) {
        document.getElementById("imageban3").style.opacity = "1";
        setTimeout(function() {
            document.getElementById("imageban1").style.right = "0px";
            document.getElementById("imageban1").style.zIndex = "1000";
            document.getElementById("imageban2").style.right = "-1200px";
            document.getElementById("imageban2").style.zIndex = "1500";
            document.getElementById("imageban3").style.right = "1200px";
            document.getElementById("imageban3").style.zIndex = "500";

        }, 500);
        
        setTimeout(function() {
            document.getElementById("imageban2").style.opacity = "1";
        }, 1000);
        bannerStatus = 2;
    }
    
    else if (bannerStatus === 2) {
        document.getElementById("imageban3").style.opacity = "1";
        setTimeout(function() {
            document.getElementById("imageban2").style.right = "0px";
            document.getElementById("imageban2").style.zIndex = "1000";
            document.getElementById("imageban3").style.right = "-1200px";
            document.getElementById("imageban3").style.zIndex = "1500";
            document.getElementById("imageban1").style.right = "1200px";
            document.getElementById("imageban1").style.zIndex = "500";

        }, 500);
    
        setTimeout(function() {
        document.getElementById("imageban3").style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
    }
        
}



