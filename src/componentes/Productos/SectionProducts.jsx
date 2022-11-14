import React from 'react'
import Product from './Product'
import { SectionProductStyled } from './SectionProductStyled'
import { useSelector } from 'react-redux'


export default function  SectionProducts() {
  const {selectedCategorie}= useSelector(state=> state.categories)
  const {products}= useSelector(state=> state.products)
  return (
    <SectionProductStyled>
    {
    products.map((product)=>{
      return (product.category === selectedCategorie || !selectedCategorie) ? <Product key={product.id} {...product}/> : null
    })
    }
    </SectionProductStyled>
  )
}
