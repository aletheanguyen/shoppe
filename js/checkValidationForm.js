function isValidProductForm(nameProduct, afterSale, beforSale, imgProduct) {
    var isValid = true;
    if (nameProduct == '' || nameProduct.length == 0) {
        alert('Tên sản phẩm không được để trống')
        isValid = false;
    }
    else {
        if (afterSale == null || afterSale == 0 || afterSale < 0) {
            alert('Giá sản phẩm phải lớn hơn 0')
            isValid = false;
        }
        else {
            if (afterSale > beforSale) {
                alert('Giá bán phải nhỏ hơn hoặc bằng Giá gốc');
                isValid = false;
            }
            else {
                if (imgProduct == null || imgProduct.length == 0) {
                    alert('Hình ảnh sản phẩm không được để trống');
                    isValid = false;
                }
            }
        }
    }
    return isValid;
}


function isValidOrderForm(nameCustomer, phoneCustomer, emailCustomer, totalAmounts) {
    var isValid = true;
    if (nameCustomer == '' || nameCustomer.length == 0) {
        alert('Tên người nhận không được để trống');
    }
    
}