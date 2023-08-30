import React from 'react';
import {Metadata} from "next";
import Link from "next/link";
import style from "../../../public/styles/posts.module.css"
import {dictionary} from "@/public/dictionary/dictionary";
import HeaderTitle from "@/ui-kit/title/HeaderTitle";

type nameParamType = {
    params : {
        name : string;
    }
}

type dataType = {
    userId : number;
    id :number;
    title : string;
    body : string;
}
const getData = async (id: string) =>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data.json()
}


export  const generateMetadata = async ({params: {name}} : nameParamType) : Promise<Metadata>  => {
    return {title : `post : ${name}`}
}


const Page = async ({params: {name}} : nameParamType) => {
    const {back} = dictionary.en.posts;
    const {title ,id, userId, body} :dataType  = await getData(name);
    return (
        <div className={style.post} key={id}>
            <HeaderTitle title={`${name} : ${title}`}/>
            <div>{body}</div>
            <Link href={"/posts"} className={style.link}>{back}</Link>
        </div>
    );
};

export default Page;