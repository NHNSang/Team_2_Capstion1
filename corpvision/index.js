document.querySelector(".btn__mode__moon").onclick = function (){
    document.querySelector(".btn__mode__moon").style.display = "none";
    document.querySelector(".btn__mode__sun").style.display = "block";

    document.getElementById("myBody").style.backgroundColor = "#151421";
    document.getElementById("myBody").style.color = "#fff";


    document.getElementById("themeChallenges").style.background= "transparent";
    document.getElementById("themeGallery").style.background= "transparent";
    document.getElementById("themeFeedBack").style.background= "transparent";
    document.getElementById("themeNew").style.background= "transparent";
    document.querySelector(".challenges_icon").style.background = "transparent";
    document.querySelector("#themeIcon").style.background = "transparent";
    document.querySelector("#themeIconA").style.background = "transparent";
    document.querySelector("#themeIconB").style.background = "transparent";
    document.querySelector(".card_background").style.background = "transparent";
    document.querySelector("#themecard").style.background = "transparent";
    document.querySelector("#cardtheme").style.background = "transparent";








}
document.querySelector(".btn__mode__sun").onclick = function (){
    document.querySelector(".btn__mode__sun").style.display = "none";
    document.querySelector(".btn__mode__moon").style.display = "block";

    document.getElementById("myBody").style.backgroundColor = "#fff";

}


// Switch theme
// document.querySelector(".btn__mode").onclick = function (){
//     document.getElementById("myBody").classList.toggle("dark_mode");
//     // document.getElementById("themeChallenges").classList.toggle("dark_mode");
//     document.getElementById("themeChallenges").style.backgroundColor = "#100F19";
//     document.getElementById("themeGallery").style.backgroundColor = "#100F19";
//     document.getElementById("themeFeedBack").style.backgroundColor = "#100F19";
//     document.getElementById("themeNew").style.backgroundColor = "#151421";

//     // document.getElementById("button_moon").style.display = "none";
//     // document.getElementById("button_sun").style.display = "block";
// }


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

    /**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

*/

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
    //khi button được click thì tìm đến thẻ body có id là myBody
    // dùng classlist để gọi thuộc tính class của thẻ body
    //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
    document.getElementById("myBody").classList.toggle("dark");
  };
  

  