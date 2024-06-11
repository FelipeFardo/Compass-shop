import type { Product } from '../@types/product'

const product01: Product = {
  id: 'produto-01',
  name: 'Syltherine',
  description: 'Stylish cafe chair',
  price: 2500000,
  priceOld: 3500000,
  discountPrice: 30,
  imageUrl: '../../../assets/images/product_02.png',
}

const product02: Product = {
  id: 'produto-02',
  name: 'Leviosa',
  description: 'Stylish cafe chair',
  price: 2500000,
  imageUrl: '../../../assets/images/product_02.png',
}

const product03: Product = {
  id: 'produto-01',
  name: 'Lolito',
  description: 'Luxury big sofa',
  price: 7000000,
  priceOld: 14000000,
  discountPrice: 50,
  imageUrl: '../../../assets/images/product_03.png',
}

const product04: Product = {
  id: 'produto-04',
  name: 'Respira',
  description: 'Outdoor bar table and stool',
  price: 500000,
  new: true,
  imageUrl: '../../../assets/images/product_04.png',
}

function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export function getProducts(): Product[] {
  const products = []
  for (let i = 0; i < 28; i++) {
    const elements = [product01, product02, product03, product04]
    const randomElement = getRandomElement(elements)
    products.push({
      ...randomElement,
      id: `${i}`,
    })
  }

  console.log(products)
  return products
}
