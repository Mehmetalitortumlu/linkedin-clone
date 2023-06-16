import React from 'react';
import Divider from '../components/Divider';
import Post from '../components/Post/Post';
import NewPostAdd from '../components/Post/NewPostAdd';

const Content = () => {
    return (
        <main className='flex-1 md:px-5 mt-7 rounded-xl '>
           <NewPostAdd/>
            <Divider/>
            <Post/>
        </main>
    )
}

export default Content;
