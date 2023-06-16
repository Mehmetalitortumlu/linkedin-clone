import React from 'react';
import { LinkedinsIcon } from '../../icon/icon';
import ActivityFooterList from './ActivityFooterList';

const ActivityPanelFooter = () => {
    const activityFooterList = [
        {
            name: "Hakkında"
        },
        {
            name: "Erişilebilirlik"
        },
        {
            name: "Yardım Merkezi"
        },
        {
            name: "Gizlilik ve Koşullar"
        },
        {
            name: "Reklam Tercihleri"
        },
        {
            name: "Reklam"
        },
        {
            name: "Ticari Hizmetler "
        },
        {
            name: "LinkedIn uygulamasını yükle "
        },
        {
            name: "Daha Fazla"
        }
    ]
    return (
        <div className='flex flex-col items-center sticky top-20'>
            <ul className='flex flex-wrap gap-x-6 text-gray-400 text-sm justify-center mt-4'>
                {
                    activityFooterList.map(({ name }) => (
                        <ActivityFooterList key={name} name={name} />
                    ))
                }
            </ul>
            
            <div className='flex items-center'>
                <span><LinkedinsIcon className="w-14 h-14 text-primary-base -ml-2"/></span>
                <span className='text-sm text-gray-500 ml-2'>LinkedIn Corporation © 2023</span>
            </div>
            </div>
    )
}

export default ActivityPanelFooter;
