import React from 'react';
import style from "./MyModal.module.css";

const MyModal = (children) => {
    return (
        <div className={style.MyModal}>
            <div className={style.MyModal_content}>{children}</div>
        </div>
    );
};

export default MyModal;