import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useParams, Navigate } from "react-router-dom";

const Editpost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState(null);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            const response = await fetch(`https://backend-2-uerp.onrender.com/post/${id}`);
            const post = await response.json();
            setTitle(post.title);
            setSummary(post.summary);
            setContent(post.content);
        }
        fetchPost();
    }, [id]);

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        if (files) {
            data.append("file", files[0]);
        }
        const response = await fetch(`https://backend-2-uerp.onrender.com/post/${id}`, {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    function handleFileChange(e) {
        setFiles(e.target.files);
    }

    if (redirect) {
        return <Navigate to={`/post/${id}`} />
    }

    return (
        <div>
            <Navbar />
            <div className="container justify-content-center align-items-center">
                <div className="p-3 rounded">
                    <h2 className="text-secondary">Edit Post</h2>
                    <form onSubmit={updatePost}>
                        <div className="form-group">
                            <label htmlFor="title"><b>Title</b></label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="summary"><b>Summary</b></label>
                            <input
                                type="text"
                                className="form-control"
                                id="summary"
                                placeholder="Enter Summary"
                                value={summary}
                                onChange={e => setSummary(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="file"><b>Upload Image</b></label>
                            <input
                                type="file"
                                className="form-control"
                                id="file"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="form-group">
                            <label><b>Content</b></label>
                            <ReactQuill
                                value={content}
                                onChange={setContent}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" style={{ width: "50%", margin: "0 auto", display: "block" }}>
                            Update Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Editpost;
