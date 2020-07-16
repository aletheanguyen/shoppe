// Tạo đối tượng SP
function createProduct(nameProduct, afterSale, beforSale, imgProduct, idProduct) {
    var product = new Object();
    product.nameProduct = nameProduct;
    product.afterSale = afterSale;
    product.beforSale = beforSale;
    product.imgProduct = imgProduct;
    product.idProduct = idProduct;
    return product;
}
// Tạo mã SP 
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

//Xóa SP có ID(x) ra khỏi 1 mảng
function deleteProduct(products, idProduct) {
    var updateProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].idProduct == idProduct) {
        }
        else {
            updateProducts.push(products[i]);
        }
    }
    return updateProducts;
}
// Tìm SP có chứa ID(x) trong 1 mảng 
function findProduct(productsArr, idProduct) {
    var product = '';
    for (var i = 0; i < productsArr.length; i++) {
        if (productsArr[i].idProduct == idProduct) {
            product = productsArr[i];
        }
    }
    return product;
}
// Tìm SP trong localstorage
function findProductfromLocalStorage(idProduct) {
    var productsArr = getProductsFromStorage();
    var product = findProduct(productsArr, idProduct);
    return product;
}
// Sửa sản phẩm có ID(x) trong 1 mảng
function editProduct(productsArr, product) {
    for (var i = 0; i < productsArr.length; i++) {
        if (productsArr[i].idProduct == product.idProduct) {
            productsArr[i].nameProduct = product.nameProduct;
            productsArr[i].afterSale = product.afterSale;
            productsArr[i].beforSale = product.beforSale;
            productsArr[i].imgProduct = product.imgProduct;
        }
    }
    return productsArr;
    ;
}
// Check sản phẩm trong giỏ hàng
function isProductInCart(idProduct) {
    var carts = getProductsFromCarts();
    var result = false;
    for (var i = 0; i < carts.length; i++) {
        if (carts[i].idProduct == idProduct) {
            result = true;
        }
    }
    return result;
}
// Thêm sản phẩm vào Giỏ hàng
function addMoreToCarts(idProduct) {
    var carts = getProductsFromCarts();
    console.log(carts);
    for (var i = 0; i < carts.length; i++) {
        if (carts[i].idProduct == idProduct) {
            carts[i].quantityProduct++;
        }
    }
    return carts;
}
function addNewProductToCarts(idProduct) {
    var carts = getProductsFromCarts();
    console.log(carts);
    var cart = createCart(idProduct);
    console.log(cart);
    carts.push(cart);
    return carts;
}
// Tạo đối tượng Giỏ hàng
function createCart(idProduct) {
    var cart = new Object();
    cart.idProduct = idProduct;
    cart.quantityProduct = 1;
    return cart;
}
// Thay đổi số lượng sản phẩm trong Giỏ hàng
function changeQuantityInCart(idProduct,newQuantity) {
    var newCarts = saveNewQuantity(idProduct,newQuantity);
    saveProductToCarts(newCarts);
    displayOnCarts(newCarts);
}
// Lưu giá trị số lượng mơi trong Giỏ hàng
function saveNewQuantity(idProduct,newQuantity) {
    var carts = getProductsFromCarts();
    for (var i = 0; i < carts.length; i++) {
        if (carts[i].idProduct == idProduct) {
            carts[i].quantityProduct = newQuantity;
        }
    }
    return carts;
}


// Tính tổng tiền các sản phẩm trong Giỏ hàng
function totalAmountInCarts() {
    var carts = getProductsFromCarts();
    var totalAmounts = 0;
    for (var i = 0; i < carts.length; i++) {
        var totalAmount = totalAmountInCart(carts[i]);
        var totalAmounts = totalAmounts + totalAmount;
    }
    return totalAmounts;
}

//Tổng tiền của 1 SP trong giỏ hàng
function totalAmountInCart(cart){
    var product = findProductfromLocalStorage(cart.idProduct);
    var totalAmount = product.afterSale * cart.quantityProduct;
    return totalAmount;
}