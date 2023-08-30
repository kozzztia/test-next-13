import React from 'react';
import style from "@/public/styles/posts.module.css";
import Link from "next/link";
import {dictionary} from "@/public/dictionary/dictionary"

type dataType = {
    userId : number;
    id :number;
    title : string;
    body : string;
}

const gatData = async ():Promise<dataType[]> => {
    const data  = await fetch('https://jsonplaceholder.typicode.com/posts');
    return data.json()
}
const Posts = async () => {
    const posts : dataType[] = await gatData()
    const { createNewPost, text } = dictionary.en.posts;
    return (
        <div className={style.posts}>
            <span className={style.posts__text}>{text}</span>
            <Link href={"posts/create"} className={style.link}>{createNewPost}</Link>
            <ul>
                {
                    posts.map(item  => <li><Link key={item.id} href={`/posts/${item.id}`}>{item.title}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Posts;