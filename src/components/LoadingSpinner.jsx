import React from 'react'



const LoadingSpinner=()=>{
    return(
        <div className='fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50'>
            <div className='animate-spin rounded-full h-20 w-20 border-b-2 border-white'></div>
        </div>
    )
}


export default LoadingSpinner;