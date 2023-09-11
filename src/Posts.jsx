import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts(){
    const [post,setPost] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return(
        <div className="">
            <h3>Posts: {post.length} </h3>
            {
                // eslint-disable-next-line react/jsx-key
                post.map(post  => <Post post = {post}> </Post>)
            }
        </div>
    )
}