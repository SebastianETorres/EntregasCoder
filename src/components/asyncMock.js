import ht from './imgs/html5.png'
import cs from './imgs/css.png'
import SP from './imgs/cybersecure.png'

const products = [
    {
        id: '1',
        nombre: 'HTML',
        precio: 1300,
        categoria: 'programacion',
        img: ht,
        stock: '10',
        descripcion:'Aprenderas HTML, un lenguaje de estructuracion por etiquetas.'
    },
    {
        id: '2',
        nombre: 'CSS',
        precio: 1200,
        categoria: 'programacion',
        img: cs,
        stock: '10',
        descripcion:'Aprenderas CSS, un lenguaje de renderizado de elementos estructurados .'
    },
    {
        id: '3',
        nombre: 'Sparta' ,
        precio: 3000,
        categoria: 'ciberseguridad',
        img: SP,
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