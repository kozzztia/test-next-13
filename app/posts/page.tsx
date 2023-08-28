import React from 'react';
import Posts from "@/components/viewer/Posts";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'posts',
    description: 'Generated by create next app',
}
const Page = () => {
    return <Posts/>
};

export default Page;