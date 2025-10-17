import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='w-[100%] bg-[#000]'>

    <div className='container2 mx-auto h-[108px]  flex justify-between items-center'>
      <div className='text-white flex gap-[136px] items-center '>
        <div className='poppins-bold text-[24px]'>24 TNN</div>
        <div className='flex gap-[40px]'>
          <Link to="/" className='poppins-medium text-[15px]'>Form</Link>
          <Link to="/" className='poppins-medium text-[15px]'>Əməkdaşlıqlar</Link>
          <Link to="/" className='poppins-medium text-[15px]'>Haqqımızda</Link>
          <Link to="/" className='poppins-medium text-[15px]'>Tədbir</Link>
        </div>
      </div>

      <div className=' flex justify-center items-center gap-[50px]'>
        <div>
          <button className='bg-[#FF8800] w-[110px] h-[36px] text-white rounded-[7px] p-[5px] poppins-medium '>
            Abunə olun
          </button>
        </div>
        <div className='flex gap-5 items-center'>
          <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.83325 11C1.83325 16.0627 5.93717 20.1667 10.9999 20.1667C16.0627 20.1667 20.1666 16.0627 20.1666 11C20.1666 5.93725 16.0627 1.83333 10.9999 1.83333C5.93717 1.83333 1.83325 5.93725 1.83325 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.9165 1.87917C11.9165 1.87917 14.6665 5.5 14.6665 11C14.6665 16.5 11.9165 20.1208 11.9165 20.1208M10.0831 20.1208C10.0831 20.1208 7.33314 16.5 7.33314 11C7.33314 5.5 10.0831 1.87917 10.0831 1.87917M2.41064 14.2083H19.589M2.41064 7.79167H19.589" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </div>
      </div>

      <div className='flex gap-5'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 19.5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>

    </div>
    </nav>
  )
}

export default Header