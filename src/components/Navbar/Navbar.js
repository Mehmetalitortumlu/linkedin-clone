import React, { useEffect, useState } from 'react';
import { BusinessIcon, DropdownIcon, HomeIcon, LinkedinIcon, MessagesIcon, NetWorkIcon, NotificationIcon, SearchIcon } from '../../icon/icon';
import NavListItem from './NavListItem';

const Navbar = () => {
    const [input, setInput] = useState(false);

    const NavList = [
        {
            name: "Ana Sayfa",
            icon: HomeIcon
        },
        {
            name: "Ağım",
            icon: NetWorkIcon
        },
        {
            name: "İş İlanları",
            icon: BusinessIcon
        },
        {
            name: "Mesajlaşma",
            icon: MessagesIcon
        },
        {
            name: "Bildirimler",
            icon: NotificationIcon
        },

    ];

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth > 768) {
                setInput(false);
            } else {
                setInput(true);
            }
        };

        // İlk render sırasında kontrol etmek için
        checkWindowSize();

        // Window boyutu değiştiğinde kontrol etmek için event listener ekle
        window.addEventListener("resize", checkWindowSize);

        // Component kaldırıldığında event listener'ı kaldır
        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    return (
        <nav className='max-w-full mx-auto bg-white border-b sticky top-0 md:py-1 z-10'>

            <div className='max-w-6xl mx-auto bg-white flex items-center '>

                <a href="/" >
                    <LinkedinIcon className="w-10 h-10 text-primary-base" />
                </a>

                <div className=' items-center bg-blue-50 px-3 h-8 ml-1 rounded-md w-20 hover:w-80 lg:w-64 me-auto hidden lg:flex focus-within:border-2 focus-within:w-80 focus-within:border-black'>
                    <SearchIcon className={"w-5 h-5"} />

                    <div>
                        <input type="text" className='bg-transparent outline-none w-full ml-2 ' placeholder='Arama yap' />
                    </div>

                </div>

                <div className='flex items-center lg:hidden hover:bg-blue-100 border rounded-md'>
                    <span onClick={() => setInput(input === false ? true : false)}>
                        <SearchIcon className={"w-7 h-7 "} />
                    </span>

                    <input className={`${input === true ? "relative w-full py-2 z-10 bg-transparent outline-none" : "hidden"}`} placeholder="ara" />
                </div>


                <div className='ps-5 mx-auto'>
                    <ul className='flex items-center space-x-6 md:space-x-6 '>
                        {!input && NavList.map(({ name, icon }) => (
                            <NavListItem name={name} Icon={icon} key={name} />
                        ))}

                        <li>
                            <img src="https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg" alt="profile" className='w-7 h-7 rounded-full' />
                            <span className='text-xs text-gray-900 hidden md:block'>
                                Ben
                            </span>
                        </li>

                        <li className='flex flex-col items-center'>
                            <DropdownIcon />
                            <span className='text-xs hidden md:block'>İş için</span>
                        </li>
                        <li className='h-12 border border-gray-200'>

                        </li>
                        <li className='md:pe-20'>
                            <span className='text-xs underline text-oranges hidden md:block'>
                                Premium'u Yeniden <br /> etkinleştir
                            </span>
                        </li>
                    </ul>

                </div>



            </div>

        </nav>
    )
}

export default Navbar
