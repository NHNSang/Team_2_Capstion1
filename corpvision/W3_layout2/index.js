document.querySelector(".btn__mode__moon").onclick = function (){
    document.querySelector(".btn__mode__moon").style.display = "none";
    document.querySelector(".btn__mode__sun").style.display = "block";

    document.getElementById("myBody").style.backgroundColor = "#151421";
    document.getElementById("myBody").style.color = "#fff";


    document.getElementById("themeChallenges").style.background= "transparent";
    document.getElementById("themeGallery").style.background= "transparent";
    document.getElementById("themeFeedBack").style.background= "transparent";
    document.getElementById("themeNew").style.background= "transparent";
    // // document.querySelector(".challenges_icon").style.background = "transparent";
    // document.querySelector("#themeIcon").style.background = "transparent";
    // document.querySelector("#themeIconA").style.background = "transparent";
    // document.querySelector("#themeIconB").style.background = "transparent";
    // document.querySelector(".card_background").style.background = "transparent";
    // document.querySelector("#themecard").style.background = "transparent";
    // document.querySelector("#cardtheme").style.background = "transparent";








}
document.querySelector(".btn__mode__sun").onclick = function (){
    document.querySelector(".btn__mode__sun").style.display = "none";
    document.querySelector(".btn__mode__moon").style.display = "block";

    document.getElementById("myBody").style.backgroundColor = "#fff";

}