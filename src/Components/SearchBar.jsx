import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
    return (
        <div className="d-flex justify-content-end mb-3">
            <div className="input-group mt-2" style={{ maxWidth: '300px' }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={onSearchChange}
                />
                <button className="btn btn-primary" type="button" onClick={onSearchSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
