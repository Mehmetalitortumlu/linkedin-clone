import React from 'react'
import { ArrowRightIcon, InfoIcon, PlusIcos } from '../../icon/icon';

const ActivitiyHeader = () => {
    return (
        <div className='flex flex-col justify-center border-2 bg-white py-4 px-2 mt-7 '>

            <div className='flex justify-between px-3 pb-4'>
                <h3>Akışınıza ekleyin</h3>
                <span><InfoIcon className="w-5 h-5" /></span>
            </div>

            <div className='flex items-start'>
                <img src="https://media.licdn.com/dms/image/D560BAQF1qacnq4fcWQ/company-logo_100_100/0/1685569443955?e=1694044800&v=beta&t=zVzZ6fZgNiawH3o0kz_gWotL75xEswiDZKX3pFU3JzQ" alt="profile" className='w-11 h-11 rounded-full' />

                <div className='flex flex-col items-start ps-3'>
                    <h4 className='text-sm text-gray-600 font-semibold'>Department of Information and Communications Tecnology</h4>
                    <span className='text-xs text-gray-500'>Şirket . Devlet Yönetimi</span>

                    <button className='bg-white text-gray-500 px-4 py-1 rounded-full flex items-center border border-gray-400 hover:bg-gray-200 hover:border hover:border-black mt-2'>
                        <span className='pe-2'> <PlusIcos /> </span>
                        <span>Takip Et </span>
                    </button>
                </div>

            </div>

            <div className='flex items-start mt-3'>
                <img src="https://media.licdn.com/dms/image/C4E0BAQHI-Y2d9EJrow/company-logo_100_100/0/1678979128998?e=1694044800&v=beta&t=iUoFBKsrb44MWz0yv5hfTXxXHD-IorWND4BMZ_y_zmI" alt="profile" className='w-11 h-11 rounded-full' />

                <div className='flex flex-col items-start ps-3'>
                    <h4 className='text-sm text-gray-600 font-semibold'>Mehmet Ali</h4>
                    <span className='text-xs text-gray-500'>Web developer</span>

                    <button className='bg-white text-gray-500 px-4 py-1 rounded-full flex items-center border border-gray-400 hover:bg-gray-200 hover:border hover:border-black mt-2'>
                        <span className='pe-2'> <PlusIcos /> </span>
                        <span>Takip Et </span>
                    </button>
                </div>

            </div>


            <div className='flex items-start mt-3'>
                <img src="https://media.licdn.com/dms/image/C4E0BAQHI-Y2d9EJrow/company-logo_100_100/0/1678979128998?e=1694044800&v=beta&t=iUoFBKsrb44MWz0yv5hfTXxXHD-IorWND4BMZ_y_zmI" alt="profile" className='w-11 h-11 rounded-full' />

                <div className='flex flex-col items-start ps-3'>
                    <h4 className='text-sm text-gray-600 font-semibold'>Mehmet Ali</h4>
                    <span className='text-xs text-gray-500'>Web developer</span>

                    <button
                        className='bg-white text-gray-500 px-4 py-1 rounded-full flex items-center border border-gray-400 hover:bg-gray-200 
                    hover:border
                      hover:border-black mt-2'>
                        <span className='pe-2'> <PlusIcos /> </span>
                        <span>Takip Et </span>
                    </button>
                </div>

            </div>

            <div className='flex items-center w-9/12 hover:bg-gray-200 mt-2'>
                <span className=' ps-4 text-sm text-gray-500'>Tüm tavsiyeleri görüntüle</span>
                <ArrowRightIcon className={"w-7 h-7 "} />
            </div>

        </div>
    )
}

export default ActivitiyHeader;
