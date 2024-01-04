import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../images/no-connection.png'

const NotFound = () => {
  return (
    <div>
      <div className='w-full h-dvh bg-gray-500 flex justify-center items-center'>

        <div className='w-[768px] flex flex-col justify-center items-center text-center p-5 bg-gray-300 rounded-3xl'>
          
          <h1 className='text-9xl'>404</h1>
          <h1 className='font-bold text-3xl mb-3'>Oops, Page Not Found!</h1>
          <p className='mb-3'>Sorry, the page you are looking for does not exist, If you think something is broken, report a problem</p>
          <div className='flex gap-3 flex-wrap justify-center'>
            <Link to="/" className='px-[30px] py-[6px] rounded-2xl bg-blue-500 text-white'>Return Home</Link>
            <button className='border-2 border-blue-500 px-[30px] py-[6px] rounded-2xl text-blue-500'>Report Problem</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NotFound
