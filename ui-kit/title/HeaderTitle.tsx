import React from 'react';
import style from "./style.module.css"
const HeaderTitle = ({Tag = "h2" , title , className} : {Tag?: string , title : string, className? : string}) => {
    return (
        <Tag className={`${className} ${style.headerTitle}`}>
            {title}
        </Tag>
    );
};

export default HeaderTitle;