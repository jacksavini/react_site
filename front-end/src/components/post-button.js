import React, { useState } from "react";

function PostButton() {

    const [name, setName] = useState("");
    const [text, setText] = useState("")

    const likes = 0;
    const dislikes = 0;

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
        // Construct the comment object
        const comment = { name, text, likes, dislikes };
        
        if(name == "" || text == ""){
            return
        }

        // Make a POST request to the server
        fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Comment posted:", data);
            // Handle success, if needed
        })
        .catch(error => {
            console.error("Error posting comment:", error);
            // Handle error, if needed
        });
    };

    return (
        <form onSubmit={handleSubmit}>
          {/* Input field for name */}
          <label>
            Name  .
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br /><br />
          {/* Input field for email */}
          <label>
            Text  .
            <input type="text" value={text} onChange={handleTextChange} />
          </label>
          <br /><br />
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      );
}

export default PostButton;
