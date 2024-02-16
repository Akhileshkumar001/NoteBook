import React, { useState } from 'react';
import './TextAreaInput.css';

const TextAreaInput = ({onSendText}) => {
  const [Texts, setText] = useState('');

  const handleTextChange= (e) => {
    setText(e.target.value);
  };

  const handleSendText = (event) => {
    event.preventDefault();
    if (Texts.trim() !== '') {
      onSendText(Texts);
      setText('');
    }
  };
   
  

  return (
    <form className="Text-input" >
      <textarea
        type="text"
        placeholder="Type a Text"
        value={Texts}
        onChange={handleTextChange}
      />
      <button onClick={handleSendText}>Send</button>
    </form>
  );
};

export default TextAreaInput;





