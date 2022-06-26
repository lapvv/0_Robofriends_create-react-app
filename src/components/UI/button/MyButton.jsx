import React from 'react';
import MyStyle from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {
    return (
        <button className={MyStyle.MyBtn}>
            {props.children}
        </button>
    );
};

export default MyButton;