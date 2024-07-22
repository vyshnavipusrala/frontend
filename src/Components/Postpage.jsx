import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams ,Link} from "react-router-dom";
import { format } from 'date-fns';
import { UserContext } from "./Usercontext";
import Editpage from "./Editpage";
 


const Postpage = () => {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);


    useEffect(() => {
        fetch(`https://blog-backend-8di5.onrender.com/post/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched post info:", data); //  
                setPostInfo(data);
            })
            .catch(error => {
                console.error("Error fetching post info:", error);
            });
    }, [id]);

    if (!postInfo) return 'Loading...';
    const imageUrl = `https://blog-backend-8di5.onrender.com${postInfo.image}`;
    const formattedDate = format(new Date(postInfo.createdAt), 'MMMM d, yyyy');
    return (
        <div>
            <Navbar />
            <div className="container mt-4 d-flex justify-content-center">
                <h1>{postInfo.title}</h1>
            </div>
            <div className="container d-flex justify-content-center">
                <time className="text-muted">{formattedDate}</time>

            </div >
            <div className="container   d-flex justify-content-center">
                <p>by @{postInfo.author.Username}</p>
            </div>
            {userInfo.id === postInfo.author._id && (
                  <div className="container  d-flex  justify-content-center">
                    <Link to={`/edit/${postInfo._id}`} element={<Editpage/>} className='text-decoration-none text-white bg-primary p-2 border border-black rounded-2"'> Edit Post</Link>
                    </div>
            )}
            <div className="container mt-2 d-flex justify-content-center  ">
                <img src={imageUrl} alt="Post" className="img-fluid  w-50" />
            </div>
            <div className="content mt-2 p-4 text-dark rounded text-center" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
};

export default Postpage;
