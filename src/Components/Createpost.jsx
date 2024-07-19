import { useState } from "react";
import Navbar from "./Navbar";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";

const Createpost = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
  
    const [files, setFiles] = useState(null);
    const [redirect, setRedirect] = useState(false);

    async function createnewpost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
         
        if (files) {
            data.append("file", files[0]);
        }
        const response = await fetch('https://backend-2-uerp.onrender.com/post', {
            method: 'POST',
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
        return <Navigate to={'/'} />
    }

    return (
        <div>
            <Navbar />
            <div className="container justify-content-center align-items-center">
                <div className="p-3 rounded">
                    <h2 className="text-secondary">Create New Post</h2>
                    <form onSubmit={createnewpost}>
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
                            Create Blog
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Createpost;
