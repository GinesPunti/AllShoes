import React from 'react'
import { HeroSectionStyled, GalleryContainer ,Gallery1, Gallery2, Gallery3, TextSection, ButtonTienda, TextContainer } from './HeroSectionSyled'


export default function HeroSection() {
  return (
    <HeroSectionStyled  >
      <GalleryContainer>
        <Gallery1/>
        <div style={{width: "50%", height: "100%", display: "flex", flexDirection:"column"}}>
          <div style={{width: "100%", height: "50%", display: "flex", flexDirection:"row"} }> 
            <Gallery2/>
            <Gallery3/>
           </div>
           <TextContainer>
            <TextSection>Somos la tienda N° 1 en venta de zapatillas de Basquet</TextSection>
            <ButtonTienda onClick={e=>e.preventDefault()}>Conoce más</ButtonTienda>
           </TextContainer>
        </div>
      </GalleryContainer>
    </HeroSectionStyled>
  )
}
