import { useState } from "react";
import { useHistory } from "react-router-dom";
// import DatePicker from 'react-datepicker';

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ category, setCategory ] = useState('Finance');
    const [ isLoading, setIsLoading ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, category };

        setIsLoading(true);

        fetch('https://reminiscent-lava-pawpaw.glitch.me/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog', category)
            setIsLoading(false);
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h1>Create a blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={ (e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={ (e) => setAuthor(e.target.value)}
                />
                <label>Category</label>
                <select
                value={category}
                onChange={ (e) => setCategory(e.target.value)}
                >
                    <option value="finance">Finance</option>
                    <option value="sports">Sports</option>
                    <option value="foods">Foods</option>
                </select>
                { !isLoading && <button>Add Blog</button>}
                { isLoading && <button disabled >Saving blog ...</button>}
            </form>
        </div>
    );
}
 
export default Create;