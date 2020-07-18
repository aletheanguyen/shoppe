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
    var afterSale = Number(nodeAfterSale.value);
    var beforSale = Number(nodeBeforSale.value);
    var imgProduct = nodeImgProduct.value;
    var products = getProductsFromStorage();
    console.log(`gia Ban la: ${afterSale}, giá gốc là: ${beforSale}`);

    
    if (isValidProductForm(nameProduct, afterSale, beforSale, imgProduct) == true) {
        var newProduct = createProduct(nameProduct, afterSale, beforSale, imgProduct, idProduct);
        console.log(newProduct);
        if (newProduct.idProduct == null || newProduct.idProduct == '') {
            newProduct.idProduct = uuidv4();
            products.push(newProduct);
        }
        else {
             products = editProduct(products, newProduct);
        }
        setProductsToStorage(products);
        displayOffPopUp();
    }
    displayStock(products);
}

// Xóa SP đang khỏi LocalStorage
function onClickDeleteInProducts(idProduct) {
    var products = getProductsFromStorage();
    products = deleteProduct(products, idProduct);
    setProductsToStorage(products);
    displayStock(products);
    onClickDeleteInCarts(idProduct);
    
    // sau đó render lại trong kho SP 
}

// Xóa SP khỏi Cart
function onClickDeleteInCarts(idProduct){
    var products = getProductsFromCarts();
    products = deleteProduct(products, idProduct);
    saveProductToCarts(products);
    renderCartPage();
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

function onClickCreateOrderInLocalStorage(){
    var nodeNameCustomer = document.getElementById('nameCustomer');
    var nameCustomer = nodeNameCustomer.value;
    var nodePhoneCustomer = document.getElementById('phoneCustomer');
    var phoneCustomer = nodePhoneCustomer.value;
    var nodeEmailCustomer = document.getElementById('emailCustomer');
    var emailCustomer = nodeEmailCustomer.value;
    var nodeBirthdayCustomer = document.getElementById('birthdayCustomer');
    var birthdayCustomer = nodeBirthdayCustomer.value;
    var nodeRecieveDay = document.getElementById('recieveDay');
    var recieveDay = nodeRecieveDay.value;
    var totalAmounts = totalAmountInCarts();
    
    if(isValidOrderForm(nameCustomer, phoneCustomer, emailCustomer) == true){
        var order = createOrder(nameCustomer, phoneCustomer, emailCustomer, birthdayCustomer, recieveDay, totalAmounts);
        saveOrderToLocalStorage(order);
        displayWinOrder(order);
        localStorage.removeItem('cart');
        renderCartPage();
    }
}


