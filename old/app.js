const product = document.getElementById('product')
const price = document.getElementById('price')
const products = document.getElementById('products')


function getValue() {
    const productName = product.value;
    const productPrice = price.value;
    product.value = ''
    price.value = ''
    setDataToLocalStorage(productName, productPrice)
    products.textContent = ''
    displayProducts();
}

function setDataToLocalStorage(name, price) {
    const cart = getStorageData()
    if (cart[name]) {
        return;
    }
    cart[name] = price
    const cartStr = JSON.stringify(cart)
    localStorage.setItem('products', cartStr)
}
const displayProducts = () => {
    const cart = getStorageData();
    for (const product in cart) {
        const li = document.createElement('li');
        li.innerHTML = `${product} = ${cart[product]}$`;
        products.appendChild(li);
    }
}
displayProducts();

function getStorageData() {
    const cart = localStorage.getItem('products')
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart)
    } else {
        cartObject = {}
    }

    return cartObject;
}
const removeItem = () => {
    products.textContent = ''
    localStorage.removeItem('products');
}