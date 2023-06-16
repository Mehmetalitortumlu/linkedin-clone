import React from 'react';
import { BookmarksIcon, PlusIcos, PremiumIcon } from '../icon/icon';

const ProfileDetail = () => {
    return (
        <div className='w-56 flex-col rounded-t-lg hidden md:flex'>

            <div className='relative mt-7 border rounded-t-lg bg-white'>
                <img src="https://static.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" className='rounded-t-lg' alt="bg" />

                <div className='absolute top-5 left-20'>
                    <img src="https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg" className='rounded-full w-16 h-16 border-2 border-white' alt="" />
                </div>

                <div className='mt-12 flex flex-col items-center'>
                    <span className='font-semibold '>Mehmet Ali Tortumlu</span>
                    <span className='text-xs leading-6 text-gray-500 mb-3'>Frontend Developer</span>
                </div>

                <div className='py-2 border-t'>
                    <div className='flex justify-between text-sm text-gray-500 px-2  items-center pt-1 '>
                        <span>Kişi profilinizi görüntüledi</span>
                        <span className='text-primary-base'>42</span>
                    </div>
                    <div className='flex justify-between text-sm text-gray-500 px-2 leading-8'>
                        <span>Gönderiniz için Gösterim</span>
                        <span className='text-primary-base'>1453</span>
                    </div>
                </div>

                <div className='w-full border-t border-b py-2 px-2 flex flex-col hover:bg-gray-100 group'>
                    <span className='text-xs text-gray-500'>Özel araç ve içgörülere erişin</span>

                    <div className='flex'>
                        <PremiumIcon/>
                        <span className='text-xs ps-2 text-gray-500 leading-6 underline font-semibold group-hover:text-primary-base'>  Premium'u Yeniden Etkinleştir </span>
                    </div>
                </div>

                <div className='px-2 flex py-2 items-center'>
                    <BookmarksIcon/>
                    <span className='text-sm text-gray-500 ps-4'>Öğelerim</span>
                </div>

            </div>


            <div className='border rounded-md mt-2 bg-white sticky top-28'>
                <ul className='text-sm font-semibold text-blue-500 border-b px-2'>
                    <li className='mt-2'>
                        Gruplar
                    </li>
                    <li className='flex justify-between items-center py-2'>
                        Etkinlikler
                       <PlusIcos/>
                    </li>
                    <li className='mb-2'>
                        Takip edilen hashtagler
                    </li>
                </ul>
                <div className='py-2 text-sm text-center text-gray-500'>
                    Daha fazla keşfet
                </div>
            </div>

        </div>
    )
}

export default ProfileDetail;
