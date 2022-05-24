import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { error, isLoading, data: blogs } = useFetch('http://localhost:8888/blogs')

    // const [name , setName] = useState('Kris')
    //     const handleDelete = (id) => {
    //     const blogsAfterDelete = blogs.filter(blog => blog.id !== id);
    //     setBlogs(blogsAfterDelete)
    // }

    return (
     <div className="home">
         {error && <div>{ error }</div>}
         {isLoading && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All you ever need to know"/>} 
         {/* <BlogList blogs={blogs.filter((blog) => blog.author == 'Kris' )} title="All I wrote" /> */}
         {/* we pass blogs as prop so we can then access it from other components */}
         {/* add button to choose the author */}
         {/* <button onClick={() => setName('drugo ime')}>Change name</button>
         <p>{ name }</p> */}
     </div>
    );
}
 
export default Home;