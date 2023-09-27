import React from "react";
import {BsSearch} from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";

const Search = () => {
    return (
        <div className="pl-[250px] pt-3">
            <div className="flex flex-row gap-10">
                <div className="pl-10">
                    <button 
                        type="button"
                        className = "w-[30px] h-[30px] rounded-full  bg-amber-300/25  font-interBold text-[25px] items-center pl-[2px]">
                        <BiArrowBack/>
                    </button>
                </div>
                <div className="h-[35px] w-[400px] bg-amber-200/70 rounded-[10px] pl-5">
                    <div className="flex flex-row gap-2 items-center pt-1 ">
                        <BsSearch className="text-amber-400"/>
                        <p className="text-amber-400">Tìm kiếm...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;