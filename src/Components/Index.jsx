import React, { useEffect, useState } from "react";
import Post from "./Post";
import SearchBar from "./SearchBar";

const Index = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async (search = "") => {
        const response = await fetch(`https://blog-backend-8di5.onrender.com/post?search=${search}`);
        const posts = await response.json();
        setPosts(posts);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        fetchPosts(searchTerm);
    };

    return (
        <div>
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} />
            {posts.length > 0 ? (
                posts.map(post => (
                    <Post key={post._id} {...post} />
                ))
            ) : (
                <p>No posts found</p>
            )}
        </div>
    );
};

export default Index;
