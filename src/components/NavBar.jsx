import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/Slices/SearchSlice';


const NavBar = () => {

  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 '>
        <div>
            <h1 className='text-3xl  font-bold text-red-800'>Rosas dos Ventos 🍃 </h1>
        </div>

        <div>
            <input 
            type="search" 
            name="search" 
            id=""
            placeholder='Pesquise aqui...'
            autoComplete='off'
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' 
            />
        </div>
    </nav>
  )
}

export default NavBar