import React from "react";
import {BsSearch} from "react-icons/bs";

const Search = () => {
    return (
        <div className="h-[500px]">
            <div className="h-[30px] w-[400px] bg-amber-200/70">
                <div className="flex flex-row gap-2 items-center">
                    <BsSearch className="text-amber-400"/>
                    <p className="text-amber-400">Tìm kiếm...</p>
                </div>
            </div>
        </div>
    )
}
export default Search;