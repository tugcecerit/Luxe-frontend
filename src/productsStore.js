const productsArray = [
    {
        id:'price_1NB6svGOdmVmyxIf9mLSbGev',
        title: 'Table',
        price: 950.00
    },
    {
        id:'price_1NB70HGOdmVmyxIf23OafbpY',
        title: 'Chair',
        price: 450.00
    },
    {
        id:'price_1NB76OGOdmVmyxIfF1aLkWHr',
        title: 'Sofa',
        price: 2500.00
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    if(productData === undefined) {
        console.log("Product data does not exist for ID: " + id)
        return undefined
    }
    return productData;
}

export { productsArray, getProductData };