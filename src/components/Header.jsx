import React from 'react'
import foto from '../assets/artesano.png';


const Header = () => {
  return (
    <div className='pb-9'>
        <img src={foto} alt="" className=' w-full rounded-lg '/>
    </div>
  )
}

export default Header