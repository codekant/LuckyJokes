window.onload = function() {
    console.log("y bother inspecting this beautiful site..\nCTRL+SHIFT+I again and just go back\nyou wont find anything good here\nanyways ur wish")
    let t = 56;
    document.getElementById("jokebtn").addEventListener("click", getFunnyJoke);
    function getFunnyJoke() {
        let n = Math.floor(Math.random() * t) + 1;
        if (n>t || n<=0) return;
        document.getElementById("joke").src = `img/${n}.png`;
    }
}