import React from "react";

import style from "./searchList.module.scss";
import SearchItem from "../_item";

const SearchList = ({ result }) => {
 return (
    <div className={style.list__result}>
        { result.length > 0 && result.map(item => <SearchItem key={item.id} detail={item} />) }
    </div>
 );
}

export default SearchList;