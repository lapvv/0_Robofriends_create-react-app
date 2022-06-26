import React from 'react';
import MyStyle from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={MyStyle.MyBtn}>
            {children}
        </button>
    );
};

export default MyButton;