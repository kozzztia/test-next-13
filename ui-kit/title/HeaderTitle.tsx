import React from 'react';
import style from "./style.module.css"
const HeaderTitle = ({ title , className} : {title : string, className? : string}) => {
    return (
        <h2 className={`${className} ${style.headerTitle}`}>
            {title}
        </h2>
    );
};

export default HeaderTitle;