import React from 'react';
import style from "../style.module.css"
import {dictionary} from "@/public/dictionary/dictionary";
import HeaderTitle from "@/ui-kit/title/HeaderTitle";
import HeaderLink from "@/ui-kit/links/HeaderLink";
const LayoutHeader = () => {
    const {header} = dictionary.en;
    return (
        <header className={style.header}>
            <HeaderTitle title={header.title} className={style.title}/>
            {
                header.navigation.map((item)=> <HeaderLink key={item.id} title={item.title} link={item.link} className={style.link}/>)
            }
        </header>
    );
};

export default LayoutHeader;