import { Link } from "react-router-dom"
import BackIcon from "../../assets/images/icons/BackIcon"
import "./NotFound.css"
const NotFound = () => {
    return (
                <article>
            <div className="notFoundPage">
                <h1>
                                404
                </h1>
                <p>Page not found :(</p>
                                <button>
                    <Link to="/">
                        <BackIcon color="white" />
                        Back to home</Link>
                </button>
            </div>
        </article>
    )
}

export default NotFound