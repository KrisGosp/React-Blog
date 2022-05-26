import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Whooops!</h2>
            <p>This page can't be found</p>
            <Link to={"/"}>You can go back to the homepage and try again!</Link>
        </div>
    );
}
 
export default NotFound;