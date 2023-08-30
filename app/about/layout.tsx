import React from 'react';
import {dictionary} from "@/public/dictionary/dictionary";
import style from "@/public/styles/about.module.css";
import HeaderTitle from "@/ui-kit/title/HeaderTitle";
import Link from "next/link";


const AboutLayout = ({children} : {children : React.ReactNode}) => {
    const {title} = dictionary.en.about;
    return (
        <div className={style.layout}>
            <HeaderTitle title={title} className={style.title}/>
            <ul className={style.list}>
                <Link href={"/about"}>back</Link>
                <Link href={"/about/contacts"}>contacts</Link>
                <Link href={"/about/team"}>team</Link>
            </ul>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
};

export default AboutLayout;