import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams();
    const { error, isLoading, data: blog } = useFetch('https://reminiscent-lava-pawpaw.glitch.me/blogs/' + id);
    const history = useHistory();

    const handleClick = (e) => {
        fetch('https://reminiscent-lava-pawpaw.glitch.me/blogs/' + id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;