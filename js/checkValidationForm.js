function isValidProductForm(nameProduct, afterSale, beforSale, imgProduct) {
    var isValid = true;
    if (nameProduct == null || nameProduct.length == 0) {
        alert('Tên sản phẩm không được để trống')
        isValid = false;
    }
    if (afterSale == null || afterSale.length == 0) {
        alert('Giá sản phẩm không được để trống')
        isValid = false;
    }
    if (afterSale < 0) {
        alert('Giá sản phẩm phải lớn hơn 0')
        isValid = false;
    }
    if (afterSale > beforSale) {
        alert('Giá bán phải lớn hơn hoặc bằng Giá gốc');
        isValid = false;
    }
    if (imgProduct == null || imgProduct.length == 0) {
        alert('Hình ảnh sản phẩm không được để trống');
        isValid = false;
    }
    return isValid;
}