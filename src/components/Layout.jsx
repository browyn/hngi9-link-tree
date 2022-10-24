import React from 'react';
import { Footer } from '.';

const Layout = ({ children }) => {
    return (
        <>
            <main>
                <div className="link-tree-pageContent" id="">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;