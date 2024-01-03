import React from 'react'
import loader from '../../images/loader.gif'

const Loader = () => {
    return (
        <div className='w-full h-dvh flex justify-center items-center'>
            <img className='w-20' src={loader} alt='loader'/>    
        </div>
    )
}

export default Loader
