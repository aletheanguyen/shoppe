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
                    <span class="afterSale">${product.afterSale}đ</span>
                    <span class="beforSale">${product.beforSale}đ</span>
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
                    <span class="afterSale">${product.afterSale}đ</span>
                    <span class="beforSale">${product.beforSale}đ</span>
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
                        value="" placeholder = "Nhập link hình ảnh sản phẩm (Khuyến khích ảnh dạng hình vuông">
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
function displayOnCarts(carts) {
    if (carts.length == 0 || carts == null) {
        nodeCarts.innerHTML =
            `<div class="notification">
                        <h1 class="title">Giỏ hàng của bạn đang trống. Quay lại để lựa chọn sản phẩm yêu thích nhé!</h1>
                        <i class="fas fa-store fa-3x"></i>
                        <a class="btn btn-primary" href="index.html">Quay lại trang chủ</a>
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
    totalAmountsHtml();
    return cartsHtml;
}
// Tạo HTML Product Card - Hiển thị trong cart
function renderCartHtml(cart) {
    var product = findProductfromLocalStorage(cart.idProduct);
    // var totalAmount = totalAmountInCart(cart);
    var totalAmount = cart.quantityProduct*product.afterSale;
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
                <span class="afterSale">${product.afterSale}đ</span>
                <span class="beforSale">${product.beforSale}đ</span>
            </div>
            <div class="detailInfor">
                <input type="number" min="1" id="quantityProduct" onchange="changeQuantityInCart('${cart.idProduct}')" value="${cart.quantityProduct}">
            </div>
            <div class="detailInfor">
                <span>${totalAmount}đ</span>
            </div>
            <div class="detailInfor">
                <i class="fas fa-trash" onclick="onClickDeleteInCarts('${cart.idProduct}')"></i>
            </div>
            </div>
        </div>`
    return cartHtml;
}

function totalAmountsHtml(){
    var totalAmounts= totalAmountInCarts();
    var totalAmountsHtml=
    `
    <div class="cart">
        <div class="detailInfor">
            </div>
            <div class="detailInfor"></div>
            <div class="detailInfor">
            </div>
            <div class="detailInfor">
            </div>
            <div class="detailInfor">
                <span>đ</span>
            </div>
            <div class="detailInfor">
                <i class="fas fa-trash" onclick="onClickDeleteInCarts('')"></i>
            </div>
            </div>
        </div>
    `;
    return totalAmountsHtml;
    }