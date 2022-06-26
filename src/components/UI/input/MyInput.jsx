import React from 'react';
import MyInputStyle from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={MyInputStyle.myInput} {...props}>
            
        </input>
    );
});

export default MyInput;