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
const api = 'https://jsonplaceholder.typicode.com/posts';
const gatData = async (): Promise<dataType[]> => {
    const data : Response = await fetch(api)
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
                    posts.map(item  => <li key={item.id} ><Link  href={`/posts/${item.id}`}>{item.title}</Link></li>)
                }

            </ul>
        </div>
    );
};

export default Posts;