const productsArray = [
    {
        id:'price_1NB6svGOdmVmyxIf9mLSbGev',
        img:'https://www.mdfitalia.com/upload/gallery/_x500/nvl-table-tavolo-design-2-min.jpg',
        title: 'Table',
        price: 950.00
    },
    {
        id:'price_1NB70HGOdmVmyxIf23OafbpY',
        img:'https://www.mdfitalia.com/upload/gallery/_x500/sign-matt-sedia-design-8.jpg',
        title: 'Chair',
        price: 450.00
    },
    {
        id:'price_1NB76OGOdmVmyxIfF1aLkWHr',
        img:'https://cb.scene7.com/is/image/Crate/PacificSofaBnchBCSOSSS21_3D/$web_pdp_main_carousel_med$/220824124632/pacific-track-arm-sofa-with-wood-legs.jpg',
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