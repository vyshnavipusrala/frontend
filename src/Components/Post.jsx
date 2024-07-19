import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const Post = ({ _id, title, summary, image, content, createdAt, author }) => {
    const formattedDate = format(new Date(createdAt), 'MMMM d, yyyy');

    return (
        <div>
            <div className="card mb-3 mx-auto p-4 mt-4" style={{ maxWidth: "700px" }}>
                <div className="row g-0 d-flex align-items-center h-100">
                    <div className="col-md-4 h-100">
                        <Link to={`/post/${_id}`}>
                            {image ? (
                                <img src={`https://backend-2-uerp.onrender.com${image}`} className="img-fluid rounded-start" alt={title} />
                            ) : (
                                <img src="https://tse4.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&P=0&h=180" className="img-fluid rounded-start" alt="default" />
                            )}
                        </Link>

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <Link to={`/post/${_id}`} className="text-decoration-none text-dark">
                                <h5 className="card-title ">{title}</h5>
                            </Link>
                            <p className="card-text mb-1">
                                <a className="author text-decoration-none text-secondary fw-bold">
                                    {author.Username}
                                </a>
                                <span className="text-muted"> | </span>
                                <time className="text-muted">{formattedDate}</time>
                            </p>
                            <p className="card-text">{summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
