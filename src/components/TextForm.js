import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    setText(text.toLowerCase());
  };
  const ClearText = () => {
    // console.log("Uppercase was clicked");
    setText("");
  };
  
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am a copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={ClearText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
      <div className="container my-5">
      <h2>Text Summary</h2>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes read </p>
    </div>
    <h2>Preview</h2>
    <p>{text}</p>
    </>

  );
}
