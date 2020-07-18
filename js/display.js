// Hiển thị DS SP
function displayProducts(productsArr) {
    nodeProducts.innerHTML = renderProductsHtml(productsArr);
}

// Tạo HTML ProductS Card - Hiển thị cho KH

function renderProductsHtml(productsArr) {
    var productsHtml = '';
    for (var i = 0; i < productsArr.length; i++) {
        var productHtml = renderProductHtml(productsArr[i]);
        var productsHtml = productsHtml + productHtml;
    }
    return productsHtml;
}
// Tạo HTML Product Card - Hiển thị cho KH
function renderProductHtml(product) {
    var productHtml =
        `<div class="productCard">
            <img src = "${product.imgProduct}"
        alt = "">
            <div class="nameProduct">
                <p>${product.nameProduct}</p>
            </div>
            <div class="price">
                <p>
                    <span class="afterSale">${Number(product.afterSale).toLocaleString('vi')}đ</span>
                    <span class="beforSale">${Number(product.beforSale).toLocaleString('vi')}đ</span>
                </p>
            </div>
            <div class="button">
                <button class="btn btn-primary" onclick="onClickAddToCart('${product.idProduct}')">Đưa vào giỏ</button>
            </div>
    </div >`;
    return productHtml;
}

// Hiển thị DS SP - Hiển thị cho Nhân viên
function displayStock(productsArr) {
    nodeStock.innerHTML = renderStockHtml(productsArr);
}

// Tạo HTML ProductS Card - Hiển thị cho NV
function renderStockHtml(productsArr) {
    var productsHtml = '';
    for (var i = 0; i < productsArr.length; i++) {
        var productHtml = renderProductInstockHtml(productsArr[i]);
        var productsHtml = productsHtml + productHtml;
    }
    return productsHtml;
}
// Tạo HTML Product Card - Hiển thị Danh sách SP cho NV
function renderProductInstockHtml(product) {
    var productHtml =
        `<div class="productCard">
        <div class="setting">
            <span onclick="onClickDeleteInProducts('${product.idProduct}')" class="material-icons">
                delete
                </span>                
        </div>
            <img src = "${product.imgProduct}"
        alt = "">
            <div class="nameProduct">
                <p>${product.nameProduct}</p>
            </div>
            <div class="price">
                <p>
                    <span class="afterSale">${Number(product.afterSale).toLocaleString('vi')}đ</span>
                    <span class="beforSale">${Number(product.beforSale).toLocaleString('vi')}đ</span>
                </p>
            </div>
            <div class="button">
                <button class="btn btn-primary" onclick="onClickEditProduct('${product.idProduct}')">Chỉnh sửa</button>
            </div>
    </div >`;
    return productHtml;
}

//Ẩn Danh sách  - xóa HTML
function displayOffPopUp() {
    nodePopUp.innerHTML = '';
}

//Hiển thị thông tin SP trên Popup
function displayOnPopUp(product) {
    if (product == '') {
        nodePopUp.innerHTML =
            `<div class="container">
                <div class="content" >
                    <h1 class="title">Nhập thông tin sản phẩm</h1>
                    <div class="item">
                        <label for="name">Tên sản phẩm</label>
                        <input type="text" id="nameProduct" name="name" value="" placeholder = "Nhập tên sản phẩm">
                    </div>
                    <div class="item">
                        <label for="afterSale">Giá bán</label>
                        <input type="number" id="afterSale" name="afterSale" value="" placeholder = "Nhập giá bán">
                    </div>
                    <div class="item">
                        <label for="beforSale">Giá gốc</label>
                        <input type="number" id="beforSale" name="beforSale" value="" placeholder = "Nhập giá gốc">
                    </div>
                    <div class="item">
                        <label for="imgProduct">Hình ảnh sản phẩm</label>
                        <input type="url" id="imgProduct" name="imgProduct"
                        value="" placeholder = "Nhập link hình ảnh sản phẩm (Khuyến khích ảnh dạng hình vuông)">
                    </div>
                    <div class="button-item">
                        <button class="btn btn-primary" onclick="onClickSaveProduct('')">Tạo sản phẩm mới</button>
                        <button class="btn btn-outline" onclick="onClickCancel()">Hủy</button>
                    </div>
                </div>
            </div>`;
    }
    else {
        nodePopUp.innerHTML =
            `<div class="container">
            <div class="content" >
                <h1 class="title">Chỉnh sửa thông tin sản phẩm</h1>
                <div class="item">
                    <label for="name">Tên sản phẩm</label>
                    <input type="text" id="nameProduct" name="name" value="${product.nameProduct}">
                </div>
                <div class="item">
                    <label for="afterSale">Giá bán</label>
                    <input type="number" id="afterSale" name="afterSale" value="${product.afterSale}">
                </div>
                <div class="item">
                    <label for="beforSale">Giá gốc</label>
                    <input type="number" id="beforSale" name="beforSale" value="${product.beforSale}">
                </div>
                <div class="item">
                    <label for="imgProduct">Hình ảnh sản phẩm</label>
                    <input type="url" id="imgProduct" name="imgProduct"
                    value="${product.imgProduct}">
                </div>
                <div class="button-item">
                    <button class="btn btn-primary" onclick="onClickSaveProduct('${product.idProduct}')">Lưu</button>
                    <button class="btn btn-outline" onclick="onClickCancel()">Hủy</button>
                </div>
            </div>
        </div>`};
}

// Hiển thị thông tin danh sách SP trong Cart
function displayOnCarts() {
    var carts = getProductsFromCarts();
    if (carts.length == 0 || carts == null) {
        nodeCarts.innerHTML =
            `<div class="notification">
                        <h1 class="title">Giỏ hàng của bạn đang trống. Quay lại để lựa chọn sản phẩm yêu thích nhé!</h1>
                        <i class="fas fa-store fa-3x"></i>
                        <a class="btn btn-primary" href="/index.html">Quay lại trang chủ</a>
                    </div>`;
    }
    else {
        nodeCarts.innerHTML = renderCartsHtml(carts);
    }
}
// Tạo HTML DS toàn bộ SP trong cart
function renderCartsHtml(carts) {
    var cartsHtml = ``;
    for (var i = 0; i < carts.length; i++) {
        var cartHtml = renderCartHtml(carts[i]);
        cartsHtml = cartHtml + cartsHtml;
    }
    cartsHtml = cartsHtml + totalAmountsHtml();
    return cartsHtml;
}
// Tạo HTML Product Card - Hiển thị trong cart
function renderCartHtml(cart) {
    var product = findProductfromLocalStorage(cart.idProduct);
    // var totalAmount = totalAmountInCart(cart);
    var totalAmount = cart.quantityProduct * product.afterSale;
    var cartHtml =
        `<div class="cart">
        <div class="detailInfor">
                <div class="img-item">
                    <img src="${product.imgProduct}"
                        alt="" class="img">
                </div>
            </div>
            <div class="detailInfor"><span>${product.nameProduct}</span></div>
            <div class="detailInfor">
                <span class="afterSale">${Number(product.afterSale).toLocaleString('vi')}đ</span>
                <span class="beforSale">${Number(product.beforSale).toLocaleString('vi')}đ</span>
            </div>
            <div class="detailInfor">
                <input type="number" min="1" id="quantityProduct" onchange="changeQuantityInCart('${cart.idProduct}',this.value)" value="${cart.quantityProduct}">
            </div>
            <div class="detailInfor">
                <span>${Number(totalAmount).toLocaleString('vi')}đ</span>
            </div>
            <div class="detailInfor">
                <i class="fas fa-trash" onclick="onClickDeleteInCarts('${cart.idProduct}')"></i>
            </div>
            </div>
        </div>`
    return cartHtml;
}

function totalAmountsHtml() {
    var totalAmounts = Number(totalAmountInCarts()).toLocaleString('vi');
    var totalAmountsHtml =
        `<div class="cart">
        <div class="detailInfor"></div>
        <div class="detailInfor"></div>
        <div class="detailInfor"></div>
        <div class="detailInfor">
            <h1>Tổng</h1>
        </div>
        <div class="detailInfor" id = "totalAmounts" >
            <h1>${totalAmounts}đ</h1>
        </div>
        <div class="detailInfor"></div>
        </div>`;
    return totalAmountsHtml;
}

function displayBuyerInformation() {
    if (getProductsFromCarts().length == 0) {
        nodeBuyerInformation.innerHTML = ``;
    }
    else {
        nodeBuyerInformation.innerHTML =
            `<div class="container">
        <div class="content">
        <h1 class="title">Mua hàng</h1>
        <div class="form">
            <div class="customerInfo">
                <label for="hoTen">Họ tên</label>
                <input type="text" name="hoTen" id="nameCustomer">
                <p id="nameCustomerError" class="error">Tên người nhận không được bỏ trống</p>
            </div>
            <div class="customerInfo">
                <label for="phonenumber">Số điện thoại</label>
                <input type="number" name="phonenumber" id="phoneCustomer">
                <p id="phoneCustomerError" class="error">SĐT người nhận không hợp lệ</p>
            </div>
            <div class="customerInfo">
                <label for="email">Email</label>
                <input type="email" name="email" id="emailCustomer">
                <p id="emailCustomerError" class="error" >Email người nhận không hợp lệ</p>
            </div>
            <div class="customerInfo">
                <label for="birthday">Ngày sinh</label>
                <input type="date" name="birthday" id="birthdayCustomer">
            </div>
            <div class="customerInfo">
                <label for="recieveDate">Thời gian nhận hàng trong ngày 8-18h
                </label>
                <input type="number" min=8 max=18 name="recieveday" id="recieveDay">
            </div>
            <div class="order">
                <button class="btn btn-primary" onclick="onClickCreateOrderInLocalStorage()">Mua hàng</button>
            </div>
        </div>
    </div>
    </div>
    </div>`
    }
}

function displayWinOrder(order) {
    nodePopUpWinOrder.innerHTML =
        `<div class="container">
        <div class="content">
            <div class="imgCongrate">
                <img src="../img/chuc mung.gif" alt="">
            </div>
            <div class="desc">
                <h1 class="title">Đặt hàng thành công</h1>
                <p>
                    Thông tin đơn hàng:<br>
                    Người nhận: ${order.nameCustomer}<br>
                    Số điện thoại người nhận:${order.phoneCustomer}<br>
                    Tổng giá trị đơn hàng: ${order.totalAmounts}
                </p>
                <div class="button-item">
                    <button class="btn btn-primary" onclick="onClickOffPopUp()">OK</button>
                </div>
            </div>

        </div>
    </div>`;
}

function onClickOffPopUp(){
    nodePopUpWinOrder.innerHTML =``;
}