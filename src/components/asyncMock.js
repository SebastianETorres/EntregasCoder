const products = [
    {
        id: '1',
        nombre: 'HTML',
        precio: 1300,
        categoria: 'programacion',
        img: "https://firebasestorage.googleapis.com/v0/b/entregafinalnjs.appspot.com/o/html5.png?alt=media&token=5391136c-8fd4-4e07-a4a5-58a917d7a7c3",
        stock: '10',
        descripcion:'Aprenderas HTML, un lenguaje de estructuracion por etiquetas.'
    },
    {
        id: '2',
        nombre: 'CSS',
        precio: 1200,
        categoria: 'programacion',
        img: "https://firebasestorage.googleapis.com/v0/b/entregafinalnjs.appspot.com/o/css.png?alt=media&token=c0ddcf9e-9e87-4531-a5a5-00669fac9226",
        stock: '10',
        descripcion:'Aprenderas CSS, un lenguaje de renderizado de elementos estructurados .'
    },
    {
        id: '3',
        nombre: 'Sparta' ,
        precio: 3000,
        categoria: 'ciberseguridad',
        img: "https://firebasestorage.googleapis.com/v0/b/entregafinalnjs.appspot.com/o/cybersecure.png?alt=media&token=37ec1deb-212c-4fc7-bec1-09a64be0cf2c",
        stock: '5',
        descripcion:' Aprenderas Sparta, un lenguaje orientado a Ciberseguridad.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 500)
    })
}