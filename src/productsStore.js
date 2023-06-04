const productsArray = [
    {
        id:'price_1NB6svGOdmVmyxIf9mLSbGev',
        img:'/Black Circle Table.png',
        title: 'Black Circle Table',
        price: 950.00,
        description: "A mono-material table, with contemporary lines and characterized by a strong personality.The distinctive features of Luxe's architecture are fully manifested in this table."
    },
    {
        id:'price_1NENNbGOdmVmyxIfP1ZagA65',
        img:'/Modern Ceramic Table.png',
        title: 'Modern Ceramic Table',
        price: 1350.00,
        description: "Modern Ceramic Table with base in lacquered rigid polyurethane, 6 mm ceramic top with hand-brushed concrete finishes."
    },
    {
        id:'price_1NEOeOGOdmVmyxIfP4WPaXnw',
        img:'/Jungle Table.png',
        title: 'Jungle Table',
        price: 1550.00,
        description: "Jungle table makes you feel you are in a forest and enjoying your meal. It made with glass and real wood."
    },
    {
        id:'price_1NENStGOdmVmyxIfQief2rmE',
        img:'/Walnut Table.png',
        title: 'Walnut Table',
        price: 2450.00,
        description: "The top has 30° bevelled edges and can be made of marble or Canaletto walnut, in different colors, and is joined to a titanium lacquered MDF under-top, both supported by a metal structure."
    },
    {
        id:'price_1NENoNGOdmVmyxIfOBOF8s1i',
        img:'/Large Table.png',
        title: 'Large Table',
        price: 2950.00,
        description: "Table with cylindrical bases in solid wood with cylindrical profiles in metal and top in solid wood or marble. Available in different dimensions."
    },
    {
        id:'price_1NB70HGOdmVmyxIf23OafbpY',
        img:'/Modern Chair.png',
        title: 'Modern Chair',
        price: 450.00,
        description: "Thanks to its matt finish, available in five different shades, it can be inserted harmoniously in every environment, both indoor and outdoor."
    },
    {
        id:'price_1NENrqGOdmVmyxIf1BrjuOy4',
        img:'/Z Chair.png',
        title: 'Z Chair',
        price: 600.00,
        description: "Armchair with epoxy painted steel structure, seat in acrylic cord. Feet in satin finish aluminum."
    },
    {
        id:'price_1NENvjGOdmVmyxIfzPlZpeT8',
        img:'/Glass Chair.png',
        title: 'Glass Chair',
        price: 800.00,
        description: "Made entirely by hand in polycarbonate. It is supported by a black pedestal that allows rotation."
    },
    {
        id:'price_1NEO2MGOdmVmyxIfO0E9LBht',
        img:'/Black Armchair.png',
        title: 'Black Armchair',
        price: 950.00,
        description: "Armchair with swivel base in painted steel laminate. Internal frame in tubulars steeland steel profiles. Internal frame upholstery in bayfit flexible cold shaped polyrethane foam, polyester fibre cover. Covering in fabric or leather."
    },
    {
        id:'price_1NEO64GOdmVmyxIfuNxd6aXu',
        img:'/Ghost Armchair.png',
        title: 'Ghost Armchair',
        price: 750.00,
        description:"It is not an ordinary style and it is stunning. Ghost armchair is a monolithic chair in 12mm thick curved glass. Everyone loves it!"
    },
    {
        id:'price_1NB76OGOdmVmyxIfF1aLkWHr',
        img:'/Night Sofa.png',
        title: 'Night Sofa',
        price: 2500.00,
        description: "Night sofa is a 3-seater sofa made with a chromed or painted structure and upholstered cushions with fabric or leather upholstery."
    },
    {
        id:'price_1NEOA2GOdmVmyxIfngYii9oe',
        img: "/Italian Sofa.png",
        title: 'Italian Sofa',
        price: 2950.00,
        description: "It's made in padded polyurethane tufted seat obtained with cable system conceived of the designer. One of the best!"
    },
    {
        id:'price_1NEODbGOdmVmyxIfmxTlGBL3',
        img:'/Leather Sofa.png',
        title: 'Leather Sofa',
        price: 1850.00,
        description: "Leather Sofa is a modular sofa with metal feet and upholstery in fabric or leather."
    },
    {
        id:'price_1NEOYLGOdmVmyxIfGnFvQao3',
        img:'/Chester Sofa.png',
        title: 'Chester Sofa',
        price: 2850.00,
        description: "Modern Chester sofa with contemporary taste. It has very soft touch and available in velvet and leather."
    },
    {
        id:'price_1NEOaZGOdmVmyxIf0AleKACK',
        img:'/Velvet Sofa.png',
        title: 'Velvet Sofa',
        price: 3550.00,
        description: "Velvet is a sofa available in the fixed or modular version that allows you to create different configurations. Base and feet in painted zinc finish."
    },
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