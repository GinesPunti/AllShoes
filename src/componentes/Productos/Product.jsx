import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cart/cart-action'
import { ProductCard, ButtonBuy } from './SectionProductStyled'

export default function Product({category, img, price, name, id}) {
  const dispatch= useDispatch()
  return (
    <ProductCard>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{price} USD</p>
      <ButtonBuy onClick={e=> dispatch(addProduct({img,price,name,id}))}>Añadir al carrito</ButtonBuy>
    </ProductCard>
    )
}
