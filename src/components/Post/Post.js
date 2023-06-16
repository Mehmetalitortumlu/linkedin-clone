import React, { useEffect } from 'react'
import { UsePost } from '../../context/PostContext';
import { CommentIcon, LikeIcon, SendIcon, ShareIcon } from '../../icon/icon';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';

const Post = () => {
    const { post, setPost } = UsePost();

    useEffect(() => {
        const q = query(collection(db, 'feed'), orderBy('timeStamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const postsData = snapshot.docs.map((doc) => doc.data());
            setPost(postsData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className='mt-5 bg-white border rounded-lg'>

            {
                post && post.map((post, i) => (
                    <div key={i}>
                        <div className='flex justify-between p-3'>
                            <div className='flex items-center'>
                                <img src="https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg" className='w-12 h-12 rounded-full mr-2' alt="" />

                                <div className='flex flex-col justify-center'>
                                    <div className='flex items-center space-x-1'>
                                        <span className='text-sm'>Mehmet ALİ  </span>
                                        <div className='w-1 h-1 rounded-full bg-gray-500' />
                                        <span className='text-gray-400'>1.</span>
                                    </div>
                                    <span className='text-xs text-gray-500'>front-end develeoper</span>
                                    <span className='text-xs text-gray-400'>1 saat . </span>
                                </div>
                            </div>

                            <div className='flex space-x-1 md:p-3'>
                                <div className='w-1 h-1 bg-gray-400 rounded-full' />
                                <div className='w-1 h-1 bg-gray-400 rounded-full' />
                                <div className='w-1 h-1 bg-gray-400 rounded-full' />
                            </div>

                        </div>

                        <div>
                            <p className='mt-4 leading-8 text-sm md:p-3'>
                                Merhaba, <br /> <br />
                                {post.postAdd}</p>
                            <div>
                                <img src="https://img.chip.com.tr/rcman/Cw640h419q95gm/images/galeri/splash/20150814133523968100.jpg" className='w-full' alt="icon" />
                            </div>

                            <div className='flex justify-between py-3 pe-2 items-center border-b'>
                                <div className='flex py-2 px-3'>

                                    <img className='-m-1 cursor-pointer' src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" />

                                    <img className='-m-1 cursor-pointer' src="https://static.licdn.com/sc/h/41j9d0423ck1snej32brbuuwg" alt="funny" />
                                    <img className='-m-1 cursor-pointer' src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="love" />

                                    <span className='ml-2 text-sm text-gray-400'>6.100</span>
                                </div>
                                <div className='flex space-x-2'>
                                    <span className='text-xs text-gray-400 cursor-pointer'>112 yorum .</span>
                                    <span className='text-xs text-gray-400 cursor-pointer'>375 paylaşım</span>
                                </div>
                            </div>

                            {/* icon */}
                            <div className='flex items-center justify-between md:px-6 py-3'>

                                <div className='flex items-center space-x-3 hover:bg-gray-200 rounded-full lg:px-4 py-1'>
                                    <LikeIcon className="w-6 h-6" />
                                    <span className='text-gray-400 font-semibold text-sm'>Beğen</span>
                                </div>

                                <div className='flex items-center space-x-3 hover:bg-gray-200 rounded-full lg:px-4 py-1'>
                                    <CommentIcon className="w-6 h-6" />
                                    <span className='text-gray-400 font-semibold text-sm'>Yorum Yap</span>
                                </div>

                                <div className='flex items-center space-x-3 hover:bg-gray-200 rounded-full lg:px-4 py-1'>
                                    <ShareIcon className="w-6 h-6" />
                                    <span className='text-gray-400 font-semibold text-sm'>Paylaş</span>
                                </div>

                                <div className='flex items-center space-x-3 hover:bg-gray-200 rounded-full lg:px-4 py-1'>
                                    <SendIcon className="w-6 h-6" />
                                    <span className='text-gray-400 font-semibold text-sm'>Gönder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }

        </div>
    )
}

export default Post;
