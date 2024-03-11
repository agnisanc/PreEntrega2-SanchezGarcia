const products = [
    {id: '1' , name: 'Collar de plata Jericó', category: 'Plata', type: 'Pura', price: 75000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/CP00137.jpg'},
    {id: '2' , name: 'Collar de plata Lisboa', category: 'Plata', type: '925', price: 45000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/CP00143.jpg'},
    {id: '3' , name: 'Collar de plata Luxor', category: 'Plata', type: '950' , price: 55000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/COB00108.jpg'},
    {id: '4' , name: 'Anillo de plata Zanzíbar' , category: 'Plata', type: 'Pura', price: 40000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/AP00113.jpg'},
    {id: '5' , name: 'Anillo de plata Praga' ,  category: 'Plata', type: '950' , price: 35000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/AP00118.jpg'},
    {id: '6' , name: 'Collar de oro Atenas' , category: 'Oro', type: '24K', price: 90000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/CO00104.jpg'},
    {id: '7' , name: 'Collar de oro Cartago' , category: 'Oro', type: '18K', price: 80000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/CO00102.jpg'},
    {id: '8' , name: 'Collar de oro Tánger' , category: 'Oro', type: '14K', price: 70000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/CO00101.jpg'},
    {id: '9' , name: 'Anillo de oro Tenochtitlan' , category: 'Oro', type: '24K', price: 60000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/AO00106.jpg'},
    {id: '10' , name: 'Anillo de oro Tebas' , category: 'Oro', type: '18K', price: 50000, stock: 5, image: 'https://santarellijoyas.com/storage/product_images/AO00133.jpg'},
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 300)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 300)
    })
}