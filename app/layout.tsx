import '../public/styles/globals.css';
import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import React from "react";
import LayoutHeader from "@/components/layout/RootLayout/Header/LayoutHeader";
import LayoutFooter from "@/components/layout/RootLayout/Footer/LayoutFooter";
import LayoutMain from "@/components/layout/RootLayout/Main/LayoutMain";


const roboto = Roboto({weight: "400", subsets: ["cyrillic"]})



export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en, ru">
        <body className={roboto.className}>
        <LayoutHeader/>
        <LayoutMain>
            {children}
        </LayoutMain>
        <LayoutFooter/>
        </body>
        </html>
    )
}
