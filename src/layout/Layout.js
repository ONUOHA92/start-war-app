import React from 'react';
import Header from '../component/header/Header';
const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children} 
        </div>
    );
};

export default Layout;