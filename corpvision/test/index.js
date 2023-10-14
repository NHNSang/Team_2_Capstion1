document.querySelector("#dark").onclick = function () {
    document.getElementById("themDark").style.backgroundColor = "#000"
    document.getElementById("sectionA").style.backgroundColor = "transparent"

    document.getElementById("light").style.display = "block";
    document.getElementById("dark").style.display = "none";


}