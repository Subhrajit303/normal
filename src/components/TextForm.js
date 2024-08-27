import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copiede", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    };

    const [text, setText] = useState(" ");
    return (
        <>
            <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743" }} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} type="button" onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Upper Case</button>
                <button disabled={text.length === 0} type="button" onClick={handleLoClick} className="btn btn-primary mx-2 my-2">Upper Case</button>
                <button disabled={text.length === 0} type="button" onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").length} minitues read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>
    );
}
