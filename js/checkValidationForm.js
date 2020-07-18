function isValidProductForm(nameProduct, afterSale, beforSale, imgProduct) {
    var isValid = true;
    if (nameProduct == '' || nameProduct.length == 0) {
        alert('Tên sản phẩm không được để trống')
        isValid = false;
    }
    else {
        if (isStringValidation(afterSale) == false || afterSale < 0) {
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

function isPhoneValidation(phonenumber) {
    var isPhonenumber = false;
    console.log(phonenumber);
    var firstNumberOfPhone = ["09","03","08","02","07","05","84"];
    if (isStringValidation(phonenumber) == true) {
        for (var i = 0; i < firstNumberOfPhone.length; i++) {
            var position = phonenumber.search(new RegExp(firstNumberOfPhone[i]));
            if (position == 0) {
                isPhonenumber = true;
            }
        }
    }
    return isPhonenumber;
}
function isStringValidation(string) {
    var result = true;
    if (string.length == 0 || string == null) {
        result = false;
    }
    return result;
}
function isEmailValidation(email) {
    var result = false;
    if (isStringValidation(email) == true) {
        if (email.includes('@') == true) {
            result = true;
        }
    }
    return result;
}
function isValidOrderForm(nameCustomer, phoneCustomer, emailCustomer) {
    var isValid = true;
    var nodeNameCustomerError = document.getElementById('nameCustomerError');
    var nodePhoneCustomerError = document.getElementById('phoneCustomerError');
    var nodeEmailCustomerError = document.getElementById('emailCustomerError');
    if (isStringValidation(nameCustomer) == false) {
        isValid = false;
        nodeNameCustomerError.style.display = 'block';
    }
    if (isPhoneValidation(phoneCustomer) == false) {
        nodePhoneCustomerError.style.display = 'block';
        isValid = false;
    }
    if (isEmailValidation(emailCustomer) == false) {
        nodeEmailCustomerError.style.display = 'block';
        isValid = false;
    }
    return isValid;
}