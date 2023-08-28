import React from 'react';
import {Metadata} from "next";
import Link from "next/link";
import style from "../../../public/styles/posts.module.css"
import {dictionary} from "@/public/dictionary/dictionary";


type nameParamType = {
    params : {
        name : string;
    }
}



export const metadata: Metadata = {
    title: 'name',
    description: 'Generated by create next app',
}

const Page = ({params: {name}} : nameParamType) => {
    const {back} = dictionary.en.posts
    return (
        <div className={style.post}>
            <span className={style.posts__text}>{name}</span>
            <Link href={"/posts"} className={style.link}>{back}</Link>
        </div>
    );
};

export default Page;