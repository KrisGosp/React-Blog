import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    // const [name , setName] = useState('Kris')
    //     const handleDelete = (id) => {
    //     const blogsAfterDelete = blogs.filter(blog => blog.id !== id);
    //     setBlogs(blogsAfterDelete)
    // }

    useEffect(() => {
// fetching data from db json 
        fetch('http://localhost:8888/blogs')
            .then(response => {
                if (!response.ok) {
                    throw Error('Couldn\'t fetch the data')
                }
                return response.json();
            })
            .then(data => {
                setBlogs(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false)
            })

}, [])

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