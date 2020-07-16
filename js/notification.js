// addToCart
function winNotifyAddToCarts(){
// Truy cập node (lấy được các phần tử của cha)
nodeWinNotification.innerHTML = `
<div class="content">
<p> <i class="fas fa-check-circle"></i> Thêm vào giỏ hàng thành công </p>
</div>`;
setTimeout(function(){
    nodeWinNotification.innerHTML =``;
}, 2000);
}


