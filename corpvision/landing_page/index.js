window.addEventListener('scroll', function() {
    var headerCorp = document.getElementById('headerCorp');
    var colorNavBrandH2 = document.getElementById('navBrandH2');
    var colorNavBrandSpan = document.getElementById('navBrandSpan');
    var colorbtnMode = document.getElementById('btnMode');
    var colorNavLink = document.querySelectorAll(".nav-link");

    if (window.scrollY > 50) {
        headerCorp.classList.add('header__fix');
        colorNavBrandH2.classList.add('text-black');
        colorNavBrandSpan.classList.add('text-black');
        colorbtnMode.classList.add('text-black');

        colorNavLink.forEach(function(link) {
            link.classList.add('text-black');
        });
    } else {
        headerCorp.classList.remove('header__fix');
        colorNavBrandH2.classList.remove('text-black');
        colorNavBrandSpan.classList.remove('text-black');
        colorbtnMode.classList.remove('text-black');

        colorNavLink.forEach(function(link) {
            link.classList.remove('text-black');
        });
    }
});
// Theme
document.querySelector(".btn__mode__moon").onclick = function (){
    document.querySelector(".btn__mode__moon").style.display = "none";
    document.querySelector(".btn__mode__sun").style.display = "block";

    document.getElementById("myBody").style.backgroundColor = "#151421";
    document.getElementById("myBody").style.color = "#fff";


    document.getElementById("themeChallenges").style.background= "transparent";
    document.getElementById("themeGallery").style.background= "transparent";
    document.getElementById("themeFeedBack").style.background= "transparent";
    document.getElementById("themeNew").style.background= "transparent";
    // document.querySelector(".challenges_icon").style.background = "transparent";
    document.querySelector("#themeIcon").style.background = "transparent";
    document.querySelector("#themeIconA").style.background = "transparent";
    document.querySelector("#themeIconB").style.background = "transparent";
    // document.querySelector(".card_background").style.background = "transparent";
    document.querySelector("#themecard").style.background = "transparent";
    document.querySelector("#cardtheme").style.background = "transparent";








}
document.querySelector(".btn__mode__sun").onclick = function (){
    document.querySelector(".btn__mode__sun").style.display = "none";
    document.querySelector(".btn__mode__moon").style.display = "block";

    document.getElementById("myBody").style.backgroundColor = "#fff";
    document.getElementById("myBody").style.color = "#212529";

}
// tạo cửa sổ overlay cho nút search
// gán sự kiện theo dõi cho btnSearch> khi click sẽ thực hiện function được định nghĩa bên dưới
document.getElementById('btnSearch').addEventListener('click', function(){    
    //khai báo biến searchOverlay 
var searchOverlay = document.getElementById('searchOverlay');
    // sử dụng mệnh đề if
if(searchOverlay.style.transform === 'scale(0)') {
    searchOverlay.style.transform = 'scale(100%)';
}
else {
    searchOverlay.style.transform = 'scale(100%)';
}
});
// tạo cửa sổ overlay cho nút search

// chức năng tắt nút close khi không cần search nữa
document.getElementById('btnCloseOverlaySearch').addEventListener('click', function(){
    // đã gán biến cho overlaySearch ở trên với biến toàn cục nên có thể sử dụng
    searchOverlay.style.display = 'none';
});

// bấm vào menu để thả nav xuống
var btnMenu = document.getElementById('btnMenu');
var contentMenu = document.getElementById('navbarNav');

btnMenu.addEventListener('click', function() {
    if(navbarNav.classList.contains('d-none')) {
        contentMenu.classList.remove('d-none')
    } else {
        contentMenu.classList.add('d-none')
    }
});


// js click btn to watch video of AboutUs page
var btnWatchVideo = document.getElementById('btnWatchVideo');
var contentVideo = document.querySelector('.video__media');
btnWatchVideo.addEventListener('click', function(){
    contentVideo.style.display = 'block'
    document.querySelector('#backgroundVideo').classList.add('bg__video')
    document.querySelector('#backgroundVideo .iframe__video').style.opacity = '1'


    });