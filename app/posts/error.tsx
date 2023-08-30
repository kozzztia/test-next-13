"use client"

import React from 'react';
import Image from "next/image";
import errorPic from "@/public/pictures/error.gif"
import Link from "next/link";

const ErrorWrapper = ({error} : {error : Error}) => {
    return (
        <>
            <Image src={errorPic} alt={error.name} className={"error"}/>
            <p className={"error"}>{error.message}</p>
            <Link href={"/posts"}>back</Link>
        </>
    );
};

export default ErrorWrapper;