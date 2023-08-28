import React from 'react';
import style from "@/public/styles/about.module.css";
import {dictionary} from "@/public/dictionary/dictionary";
import Image from "next/image";
import {aboutPictures} from "@/public/pictures/aboutPictures";

const About = () => {
    const {content} = dictionary.en.about;
    return (
        <div className={style.about}>
            <span className={style.text}>{content}</span>
            <Image src={aboutPictures["decor1"]} alt={"decor1"} className={style.image} width={1600} height={1600}/>
        </div>
    );
};

export default About;

