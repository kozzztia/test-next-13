import React from 'react';
import AboutLayout from "@/components/layout/AboutLayout/AboutLayout";


const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <AboutLayout>
            {children}
        </AboutLayout>
    );
};

export default Layout;