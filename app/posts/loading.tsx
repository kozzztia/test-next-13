import React from 'react';
import Image from "next/image";
import loading from "../../public/pictures/loading.gif"
const Loading = () => {
    return (
            <Image src={loading} alt={"loading"} className={"loading"}/>
    );
};

export default Loading;