import React from 'react'
import Navbar from '../components/NavBar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import Header from '../components/Header'


const Home = () => {
  return (
    <>
      < Navbar />
      < Header />
      < CategoryMenu />
      < FoodItems />
      < Cart />
    </>
  )
}

export default Home