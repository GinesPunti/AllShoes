import React from 'react'
import { CategorieContainer, SectionShopStyled} from './ShopStyled'
import Categoria from './Categoria'
import { useSelector } from 'react-redux'


export default function Shop() {
  const { categories} = useSelector(state => state.categories )
  return (
    <SectionShopStyled>
      <CategorieContainer>
        {
          categories.map(category => 
          <Categoria key={category.id} {...category}/>)
        }
      </CategorieContainer>

    </SectionShopStyled>
  )
}
