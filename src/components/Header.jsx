import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='w-[100%] h-[108px] bg-[#000] flex justify-between items-center'>
      <div className='text-white flex gap-15 '>
        <div className=''>24 TNN</div>
        <div className='flex gap-5'>
          <Link to="/">Form</Link>
          <Link to="/">Əməkdaşlıqlar</Link>
          <Link to="/">Haqqımızda</Link>
          <Link to="/">Tədbir</Link>
        </div>
      </div>
      <div className=' flex justify-center items-center gap-[10px]'>
        <div>
          <button className='bg-[#FF8800] text-white rounded-[7px] p-[10px] '>
            Abunə olun
          </button>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div></div>

    </nav>
  )
}

export default Header