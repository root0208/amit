import React,{useState} from 'react'

export default function TextForm(props) {

  const handleOnclick =()=>{
    console.log("Uppercase was clicked");
  }

  const [text, setText] = useState('Enter text here');
  // text = "new Text";//Wrong way to change the state 
  // setText = "new Text";//Correct way to change the state 

  return (
    <div>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchage} id="myBox" rows="8"></textarea>
        </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}
