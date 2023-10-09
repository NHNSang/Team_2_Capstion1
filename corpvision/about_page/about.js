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