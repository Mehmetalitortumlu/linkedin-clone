import React from 'react'

const NavListItem = ({ name, Icon }) => {
  
    return (
        <li >
            <a href={(name.toLowerCase())} className=" cursor-pointer">

              <div className="flex flex-col items-center  text-gray-500 hover:text-black" >
                    <span> <Icon /> </span>
                    <span className='text-xs hidden md:block'>{name}</span>
                </div>

            </a>
        </li>
    )
}

export default NavListItem
