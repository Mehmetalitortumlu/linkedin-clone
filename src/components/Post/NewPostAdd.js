import React from 'react';
import { UsePost } from '../../context/PostContext';
import { CalendarIcon, CloseIcon, ImageIcon, NewsPaperIcon, VideoIcon } from '../../icon/icon';
import Modal from 'react-modal';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        height: "600px"
    },
};

const NewPostAdd = () => {
    const { postAdd, setPostAdd, } = UsePost();

    const sendPost = async () => {
        if (postAdd !== "") {
            const postId=uuidv4()
            try {
                const docRef = await addDoc(collection(db, "feed"), {
                    id: postId,
                    displayName: "Mehmet",
                    userName: "@ali_tortumlu",
                    postAdd,
                    timeStamp: Timestamp.now(),
                    avatar: "https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg",
                    images: "https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg"
                });
                setPostAdd('')
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };


    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onClick = () => {
        sendPost()
        setTimeout(() => {
            closeModal()
        }, 400);
    }

    return (
        <div className='border px-3 rounded-lg bg-white py-1'>

            <div className='flex py-2 '>
                <img src="https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg" className='w-12 h-12 rounded-full mr-2' alt="" />
                <input onClick={openModal} className='w-full rounded-full  border border-gray-500 ps-5' value={postAdd} onChange={(e) => setPostAdd(e.target.value)} placeholder='Gönderi başlat' type="text" />
            </div>

            {/* modal */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>

                <div className='flex justify-between items-center'>

                    <div className='flex items-center'>
                        <img src="https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg" className='w-12 h-12 rounded-full mr-2' alt="" />
                        <div className='flex flex-col justify-center'>
                            <span className='font-bold text-lg'>Mehmet Ali Tortumlu </span>
                            <span className='text-sm text-gray-500'>Herhangi biri gönderisi</span>
                        </div>
                    </div>

                    <button onClick={closeModal}><CloseIcon className="w-9 h-9 hover:bg-gray-300 rounded-full p-2 transform transition-colors duration-200" /></button>
                </div>

                <div className='flex py-2 '>

                    <textarea onClick={openModal} className='w-full  outline-none text-xl ps-2 h-60 overflow-hidden' value={postAdd} onChange={(e) => setPostAdd(e.target.value)} placeholder='Ne hakkında konuşmak istiyorsunuz ?' type="text" />

                </div>
                <div className='flex justify-between'>
                    <button className='bg-green-500 rounded-full px-8 py-2' onClick={onClick}>Ekle</button>
                </div>
            </Modal>

            {/* modal */}

            {/* icon */}
            <div className='flex justify-between md:px-4 '>

                <div className='flex items-center hover:bg-gray-300 py-3 px-2 rounded-md'>
                    <ImageIcon className="w-5 h-5 text-primary-base" />
                    <span className='text-sm text-gray-500 ps-3'>Fotoğraf</span>
                </div>

                <div className='flex items-center hover:bg-gray-300 py-3 px-2 rounded-md'>
                    <VideoIcon className="w-6 h-6 text-green-500" />
                    <span className='text-sm text-gray-500 ps-3'>Video</span>
                </div>

                <div className='flex items-center hover:bg-gray-300 py-3 px-2 rounded-md'>
                    <CalendarIcon className="w-5 h-5 text-orange-400" />
                    <span className='text-sm text-gray-500 ps-3'>Etkinlik</span>
                </div>

                <div className='flex items-center hover:bg-gray-300 py-3 px-2 rounded-md'>
                    <NewsPaperIcon className="w-5 h-5 text-orange-600" />
                    <span className='text-sm text-gray-500 ps-3'>Yazı yaz</span>
                </div>
            </div>

        </div>
    )
}

export default NewPostAdd;
