import React from 'react';
import style from "@/public/styles/posts.module.css";
import Link from "next/link";
import {dictionary} from "@/public/dictionary/dictionary"
import HeaderTitle from "@/ui-kit/title/HeaderTitle";

const Posts = () => {
    const { createNewPost, text } = dictionary.en.posts
    return (
        <div className={style.posts}>
            <span className={style.posts__text}>{text}</span>
            <Link href={"posts/create"} className={style.link}>{createNewPost}</Link>
        </div>
    );
};

export default Posts;