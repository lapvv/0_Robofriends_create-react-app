import React, { useState } from 'react';

const InputControl = () => {
    const [text, setText] = useState('ТЕКСТ В ИНПУТЕ');

    return (
        <div>
            <h1>{text}</h1>
            <input type="text" value={text} onChange={event=>setText(event.target.value)} />
        </div>
    );
};

export default InputControl;