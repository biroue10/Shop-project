import React from "react";
import { debounce } from "lodash";

const SearchInput = ({ onQueryChange }) => {
    const handleQueryChange = debounce((newQuery) => {
        onQueryChange(newQuery);
    }, 1000);

    return (
        <input
            type="text"
            placeholder="Search products"
            onChange={(e) => handleQueryChange(e.target.value)}
            className="mx-auto w-full max-w-md my-4 px-4 py-2 rounded-md border"
        />
    );
};

export default SearchInput;