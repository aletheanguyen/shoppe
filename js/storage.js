// Storage giả lập
function fakeProductInLocalStore(){
    var products = [];
    for(var i=0; i<10; i++){
        var product = createProduct(`Sản phẩm ${i}`,3000000,5000000,'https://assets.swappie.com/iPhone-8-Plus-256GB-Gold-1-1.png',uuidv4());
        products.push(product);
    }
    setProductsToStorage(products);
    return products;
}
// Xuất toàn bộ sản phẩm trong Storage 
function getProductsFromStorage() {
    var products = JSON.parse(localStorage.getItem('products'));
    if (products == null) {
        products = [];
    }
    return products;
}

// Lưu SP vào Storage 
function setProductsToStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Xuất toàn bộ sản phẩm trong Cart
function getProductsFromCarts() {
    var products = JSON.parse(localStorage.getItem('cart'));
    if (products == null||products.length==0) {
        products = [];
    }
    return products;
}

// Lưu SP vào Cart 
function saveProductToCarts(carts) {
    localStorage.setItem('cart', JSON.stringify(carts));
}

