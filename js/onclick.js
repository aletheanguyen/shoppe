// Sửa thông tin SP
function onClickEditProduct(idProduct) {
    if (idProduct == null || idProduct == '') {
        displayOnPopUp('');
    }
    else {
        var product = findProductfromLocalStorage(idProduct);
        displayOnPopUp(product);
    }
}
// Tạo SP mới
function onClickSaveProduct(idProduct) {
    // lấy giá trị về biến
    var nodeNameProduct = document.getElementById('nameProduct');
    var nodeAfterSale = document.getElementById('afterSale');
    var nodeBeforSale = document.getElementById('beforSale');
    var nodeImgProduct = document.getElementById('imgProduct');
    var nameProduct = nodeNameProduct.value;
    var afterSale = nodeAfterSale.value;
    var beforSale = nodeBeforSale.value;
    var imgProduct = nodeImgProduct.value;
    var products = getProductsFromStorage();

    if (isValidProductForm(nameProduct, afterSale, beforSale, imgProduct) == true) {
        if (idProduct == null || idProduct == '') {
            var idProduct = uuidv4();
            var newProduct = createProduct(nameProduct, afterSale, beforSale, imgProduct, idProduct);
            products.push(newProduct);
        }
        else {
            products = editProduct(products, idProduct, nameProduct, afterSale, beforSale, imgProduct);
        }
        setProductsToStorage(products);
    }
    displayOffPopUp();
    displayStock(products);
}

// Xóa SP đang chọn
function onClickDeleteInProducts(idProduct) {
    var products = getProductsFromStorage();
    products = deleteProduct(products, idProduct);
    setProductsToStorage(products);
    displayStock(products);
    // sau đó render lại trong kho SP 
}

// Xóa SP khỏi Cart
function onClickDeleteInCarts(idProduct){
    var products = getProductsFromCarts();
    console.log(products);
    products = deleteProduct(products, idProduct);
    saveProductToCarts(products);
    displayOnCarts(products);
}

function onClickCancel() {
    displayOffPopUp();
}

function onClickAddToCart(idProduct) {
    // Create cart in Storage
    if(getProductsFromCarts() == null|| getProductsFromCarts().length ==0||isProductInCart(idProduct)==false){
    var updateCarts = addNewProductToCarts(idProduct);
    }
    else{
    var updateCarts = addMoreToCarts(idProduct);
        }
    saveProductToCarts(updateCarts);
    setTimeout(function(){
        winNotifyAddToCarts();
    });
    }

