import { createContext, useContext, useState } from "react";


const PostContext = createContext();


export const PostProvider = ({ children }) => {
    const [postAdd, setPostAdd] = useState("")

    const [post, setPost] = useState([]);

    const values = {
        postAdd,
        setPostAdd,
        setPost,
        post
    }
    return <PostContext.Provider value={values}>
        {children}
    </PostContext.Provider>
}


export const UsePost=() => useContext(PostContext);