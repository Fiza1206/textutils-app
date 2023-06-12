import React,{useState} from 'react'
export default function Textform(props) {
  const handleUpClick=()=>{
   // console.log("Upper Case was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Upper Case","success")
  }
  const handleLowerClick=()=>{
   let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lower Case","success")
  }
  const handleclrClick=()=>{
    let newText='';
     setText(newText);
     props.showalert("Cleared","success")
   }
  const handleOnChange=(event)=>{
    //console.log("Upper Case was on change");
    setText(event.target.value)
  }
  const handlebackClick = () => {
    let newText = text.slice(0, -1); // Remove the last character from the text
    setText(newText);
    props.showalert("Backspace","success")
  }
 const handleCopy=()=>{
  let newText=document.getElementById("myBox");
  newText.select();
  navigator.clipboard.writeText(newText.value)
  props.showalert("Text Copied","success")

 }
 const handlePaste=()=>{
  let newText=document.getElementById("myBox");
  newText.select();
  let text=navigator.clipboard.readText(newText.value);
  newText.value=text;
  props.showalert(" Text Pasted","success")
 }
 const handleSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showalert("Extre Space is removed", "success")
 }
  const[text,setText]=useState("");
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" style={{backgroundColor :props.mode==='dark'?'gray':'white', color :props.mode==='dark'?'white':'black'}} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleclrClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handlebackClick}>Backspace</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handlePaste}>Paste Text</button>
<button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Space</button>
    </div>
    <div className="container my-3" style={{color :props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{text.trim() ? text.trim().split(' ').length : 0} and Number of Characters: {text.replace(/ /g, '').length}</p>
      <p>{0.008 * text.split(" ").length}Minutes to count words</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to Preview here"}</p>
    </div>
    </>
  )
}
