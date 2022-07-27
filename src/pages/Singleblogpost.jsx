import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Singleblogpost() {
    const {id} = useParams();
    const [post, setPost] = useState({});
    
    const fetchPost = async () => {

        try {
             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data =  await response.json()
        setPost(data)

        }catch (err) {
            console.log(err)
        }

       

    }

    useEffect(() => {
        fetchPost();
    }, [])
  return (
    <section className='container'>
        <h3>PWC Blog Post: {id}</h3>
        <h1>{post.title}</h1>
        <hr/>
        <div className="postbody">
            <p>{post.body}</p>
        </div>
    </section>
  )
}

export default Singleblogpost;