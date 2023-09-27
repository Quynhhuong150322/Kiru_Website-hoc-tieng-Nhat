import React from "react";
import {BsSearch} from "react-icons/bs";

const Search = () => {
    return (
        <div className="pl-[250px]">
            <div className="h-[30px] w-[400px] bg-amber-200/70">
                <div className="flex flex-row">
                    <BsSearch/>
                    <p className="">Tìm kiếm...</p>
                </div>
            </div>
        </div>
    )
}
export default Search;