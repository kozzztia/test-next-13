import React from 'react';
import Link from "next/link";
import style from "./style.module.css"
const HeaderLink = ({title , link , className}  :{title :string , link : string , className?: string;}) => {
    return (
        <Link href={link} className={`${className} ${style.headerLink}`}>{title}</Link>
    );
};

export default HeaderLink;