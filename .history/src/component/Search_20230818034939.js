import React from "react";
import {BsSearch} from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";

const Search = () => {
    return (
        <div className="pl-[250px] pt-3">
            <div className="flex flex-row">
                <div className="">
                    <button 
                        type="button"
                        className = "w-[30px] h-[30px] rounded-[40px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500 font-interBold text-[25px] items-center pl-1">
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