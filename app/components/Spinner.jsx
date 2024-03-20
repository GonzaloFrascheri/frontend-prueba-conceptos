import React from 'react'
import Image from 'next/image'
import Loading from './Loading.webp'


const Spinner = () => {
  return (
    <div className='w-full h-screen flex item-center justify-center'>
      <Image src={Loading} alt='loading...' />
    </div>
  )
}

export default Spinner
