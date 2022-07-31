import React, { useState } from 'react';

const InputControl = () => {
    const [text, setText] = useState('Text in input field');

    return (
        <div>
            <h1>{text}</h1>
            <input type="text" value={text} onChange={event=>setText(event.target.value)} />
        </div>
    );
};

export default InputControl;