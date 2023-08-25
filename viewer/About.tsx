import React from 'react';
import style from "@/public/styles/about.module.css";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'test',
    description: 'Generated by create next app',
}

const About = () => {
    return (
        <div className={style.about}>
            about
        </div>
    );
};

export default About;
