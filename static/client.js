window.onload = function() {
    console.log("y bother inspecting this beautiful site..\nCTRL+SHIFT+I again and just go back\nyou wont find anything good here\nanyways ur wish")
    let t = 56;
    document.getElementById("jokebtn").addEventListener("click", getFunnyJoke);
    document.onkeydown = function(ev) {
        switch(ev.key) {
            case " ":
                document.getElementById("jokebtn").click();
                break;
            case "r":
                window.location.reload();
                break;
            case "c":
                window.open("https://cark.ga", "Cark", "resizable,scrollbars,status");
                break;
            default:
                break;
        }
    }
    document.getElementById("keymodaltrig").onclick = function() {
        document.getElementById("keymodal").style.display = "block";
    }
    document.getElementById("close").onclick = function() {
        document.getElementById("keymodal").style.display = "none";
    }
    function getFunnyJoke() {
        let n = Math.floor(Math.random() * t) + 1;
        if (n>t || n<=0) return;
        document.getElementById("joke").src = `img/${n}.png`;
    }
}