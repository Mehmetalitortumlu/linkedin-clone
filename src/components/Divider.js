import React from 'react'

const Divider = () => {
    return (
        <div className='my-1 flex'>
        <div className=' w-7/12 lg:w-8/12 border-b xl:w-8/12 border-gray-400 ' />
        <span className='text-xs ps-1 text-gray-500'> Sıralama ölçütü</span> <span className='text-xs ps-2 font-semibold'>En önemli</span>
        </div>

    )
}

export default Divider
