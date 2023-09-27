import React from "react";
import {BsSearch} from "react-icons/bs";

const Search = () => {
    return (
        <div className="h-[500px]">
            <div className="h-[35px] w-[400px] bg-amber-200/70 rounded-full pl-11">
                <div className="flex flex-row gap-2 items-center pt-1 ">
                    <BsSearch className="text-amber-400"/>
                    <p className="text-amber-400">Tìm kiếm...</p>
                </div>
            </div>
        </div>
    )
}
export default Search;