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