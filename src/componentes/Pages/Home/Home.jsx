import React from 'react'
import Footer from '../../Footer/Footer'
import HeroNav from '../../HeroNav/HeroNav'
import HeroSection from '../../HeroSection/HeroSection'
import Productos from '../../Productos/SectionProducts'
import Shop from '../../Shop/Shop'

export default function Home 
() {
  return (
    <div>
        <HeroNav/>
        <HeroSection/>
        <Shop/>
        <Productos/>
        <Footer/>
    </div>

  )
}
