// selecting element 
const productNameField = document.getElementById('product-name')
const productPriceField = document.getElementById('product-price')
const addBtn = document.getElementById('add-btn')
const productsList = document.getElementById('products-list')

// getting input field value
addBtn.addEventListener('click', () => {
    const productName = productNameField.value;
    const productPrice = productPriceField.value;

    if (!(productName && productPrice)) {
        return;
    }

    // insert data to storage
    insertDataToStorage(productName, productPrice)

    // show data to UI
    displayDataInUI()

    // clearing input value
    productNameField.value = ''
    productPriceField.value = ''
})


// getting data from local storage
const getDataFromStorage = () => {
    const cart = localStorage.getItem('product')
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart)
    } else {
        cartObject = {}
    }
    return cartObject;
}

const displayDataInUI = () => {
    const cart = getDataFromStorage()
    productsList.innerHTML = ''
    for (const product in cart) {
        const li = document.createElement('li')
        li.innerHTML = `${product} = ${cart[product]} TaKa`
        productsList.appendChild(li)
    }
}


// inserting data to local storage
const insertDataToStorage = (name, price) => {
    const cart = getDataFromStorage()
    cart[name] = price;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('product', cartStringified)
    // console.log(cartStringified);
}

displayDataInUI()