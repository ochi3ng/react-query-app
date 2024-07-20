
// T-Shirts Data
const tshirts = [
    {
        id: 1,
        name: 'Classic White T-Shirt',
        price: 19.99,
        description: 'A classic white T-shirt made from high-quality cotton.',
        image: 'https://m.media-amazon.com/images/I/61C-skMeafL._AC_UL320_.jpg',
        category: 'T-Shirts'
    },
    {
        id: 2,
        name: 'Graphic Tee',
        price: 24.99,
        description: 'A stylish graphic tee with a unique design.',
        image: 'https://m.media-amazon.com/images/I/710o0VupScL._AC_UL320_.jpg',
        category: 'T-Shirts'
    },
    {
        id: 3,
        name: 'Black V-Neck T-Shirt for Men',
        price: 21.99,
        description: 'A sleek black V-neck T-shirt that pairs well with any outfit.',
        image: 'https://m.media-amazon.com/images/I/71nnt43KdKL._AC_SX385_.jpg',
        category: 'T-Shirts'
    },
    {
        id: 4,
        name: 'Long Sleeve T-Shirt for Men',
        price: 29.99,
        description: 'A comfortable long sleeve T-shirt perfect for cooler days.',
        image: 'https://m.media-amazon.com/images/I/81K23fySrLL._AC_UL320_.jpg',
        category: 'T-Shirts'
    },
    {
        id: 5,
        name: 'Striped T-Shirt for Men',
        price: 22.99,
        description: 'A trendy striped T-shirt that adds a touch of style to your wardrobe.',
        image: 'https://m.media-amazon.com/images/I/81VarT+SdzL._AC_UL320_.jpg',
        category: 'T-Shirts'
    }
];

// Dresses Data
const dresses = [
    {
        id: 6,
        name: 'Floral Maxi Dress',
        price: 49.99,
        description: 'A beautiful floral maxi dress perfect for summer days.',
        image: 'https://m.media-amazon.com/images/I/71qcTAgYDuL._AC_SX342_.jpg',
        category: 'Dresses'
    },
    {
        id: 7,
        name: 'Elegant Evening Gown',
        price: 89.99,
        description: 'An elegant evening gown with a sleek design for special occasions.',
        image: 'https://m.media-amazon.com/images/I/71eRCkyUhtL._MCnd_AC_UL320_.jpg',
        category: 'Dresses'
    },
    {
        id: 8,
        name: 'Casual Day Dress',
        price: 34.99,
        description: 'A casual day dress with a relaxed fit, ideal for everyday wear.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71eyTibOwhL._AC_UL165_SR165,165_.jpg',
        category: 'Dresses'
    },
    {
        id: 9,
        name: 'Chic Wrap Dress',
        price: 39.99,
        description: 'A chic wrap dress that can be dressed up or down.',
        image: 'https://m.media-amazon.com/images/I/71aBtOjU-OL._MCnd_AC_UL320_.jpg',
        category: 'Dresses'
    },
    {
        id: 10,
        name: 'Strapless Cocktail Dress',
        price: 54.99,
        description: 'A trendy strapless cocktail dress for evening events.',
        image: 'https://m.media-amazon.com/images/I/71ZuyRGge0L._MCnd_AC_UL320_.jpg',
        category: 'Dresses'
    }
];
//Suits data
const suits = [
    {
        id: 1,
        name: 'Classic Black Suit',
        price: 199.99,
        description: 'A classic black suit perfect for formal occasions.',
        image: 'https://example.com/images/classic-black-suit.jpg',
        category: 'Suits'
    },
    {
        id: 2,
        name: 'Navy Blue Suit',
        price: 219.99,
        description: 'A stylish navy blue suit that offers a modern look.',
        image: 'https://example.com/images/navy-blue-suit.jpg',
        category: 'Suits'
    },
    {
        id: 3,
        name: 'Gray Slim Fit Suit',
        price: 189.99,
        description: 'A sleek gray slim fit suit for a sophisticated appearance.',
        image: 'https://example.com/images/gray-slim-fit-suit.jpg',
        category: 'Suits'
    },
    {
        id: 4,
        name: 'Checked Suit',
        price: 249.99,
        description: 'A trendy checked suit that stands out from the crowd.',
        image: 'https://example.com/images/checked-suit.jpg',
        category: 'Suits'
    },
    {
        id: 5,
        name: 'Tuxedo Suit',
        price: 299.99,
        description: 'An elegant tuxedo suit for the most special occasions.',
        image: 'https://example.com/images/tuxedo-suit.jpg',
        category: 'Suits'
    }
];

//Shoes data
const shoes = [
    {
        id: 1,
        name: 'Running Sneakers',
        price: 59.99,
        description: 'Comfortable running sneakers designed for optimal performance.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51X7WS8DlxL._AC_SR300,375,0,C_BR3_.jpg',
        category: 'Shoes'
    },
    {
        id: 2,
        name: 'Casual Loafers',
        price: 44.99,
        description: 'Stylish casual loafers that pair well with any outfit.',
        image: 'https://m.media-amazon.com/images/I/610c+Jxx6MS._AC_UL320_.jpg',
        category: 'Shoes'
    },
    {
        id: 3,
        name: 'Formal Dress Shoes',
        price: 89.99,
        description: 'Elegant formal dress shoes made from premium leather.',
        image: 'https://m.media-amazon.com/images/I/616FUqUtu3L._AC_UL320_.jpg',
        category: 'Shoes'
    },
    {
        id: 4,
        name: 'Hiking Boots',
        price: 129.99,
        description: 'Durable hiking boots for all your outdoor adventures.',
        image: 'https://m.media-amazon.com/images/I/81H40fKRNdL._AC_UL320_.jpg',
        category: 'Shoes'
    },
    {
        id: 5,
        name: 'Slip-On Sandals',
        price: 24.99,
        description: 'Comfortable slip-on sandals perfect for the beach.',
        image: 'https://m.media-amazon.com/images/I/61ddtK82pdL._AC_UL320_.jpg',
        category: 'Shoes'
    },
    {
        id: 6,
        name: 'Basketball Shoes',
        price: 99.99,
        description: 'High-performance basketball shoes for the court.',
        image: 'https://m.media-amazon.com/images/I/61ykNR5YqgL._AC_SX395_.jpg',
        category: 'Shoes'
    },
    {
        id: 1,
        name: 'Running Sneakers',
        price: 59.99,
        description: 'Comfortable running sneakers designed for optimal performance.',
        image: 'https://m.media-amazon.com/images/I/61EfGGO4W7L._AC_UL320_.jpg',
        category: 'Shoes'
    },
    {
        id: 2,
        name: 'Casual Loafers',
        price: 44.99,
        description: 'Stylish casual loafers that pair well with any outfit.',
        image: 'https://m.media-amazon.com/images/I/81bavcH-C0L._AC_UL320_.jpg',
        category: 'Shoes'
    },
    {
        id: 3,
        name: 'Formal Dress Shoes',
        price: 89.99,
        description: 'Elegant formal dress shoes made from premium leather.',
        image: 'https://m.media-amazon.com/images/I/81Rx3gIDiXL._AC_SY395_.jpg',
        category: 'Shoes'
    },
    {
        id: 4,
        name: 'Hiking Boots',
        price: 129.99,
        description: 'Durable hiking boots for all your outdoor adventures.',
        image: 'https://m.media-amazon.com/images/I/61VXdGdXktL._AC_UL320_.jpg',
        category: 'Shoes'
    },
    {
        id: 5,
        name: 'Slip-On Sandals',
        price: 24.99,
        description: 'Comfortable slip-on sandals perfect for the beach.',
        image: 'https://m.media-amazon.com/images/I/51cJzkYkZlL._AC_UL320_.jpg',
        category: 'Shoes'
    },
    {
        id: 6,
        name: 'Basketball Shoes',
        price: 99.99,
        description: 'High-performance basketball shoes for the court.',
        image: 'https://m.media-amazon.com/images/I/61qRmqdP3OL._AC_UL320_.jpg',
        category: 'Shoes'
    }
];

const data = {
    tshirts,
    dresses,
    suits,
    shoes
};

export default data;
