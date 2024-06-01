import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleComment from "./comment.js";
import url from "./url.js"

function Comments() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url + '/api/comments')
            .then(response => {
                console.log('Response data:', response.data);
                if (Array.isArray(response.data)) {
                    setData(response.data.reverse());
                } else {
                    console.error('Response is not an array:', response.data);
                    setError("Unexpected response format.");
                }
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setError("Failed to fetch comments. Please try again later.");
            });
    }, []);

    return (
        <div className="center">
            <br />
            {error && <p className="error">{error}</p>}
            {data.length > 0 ? (
                data.map((item, i) => (
                    <SingleComment
                        key={i}
                        name={item.name}
                        text={item.text}
                    />
                ))
            ) : (
                <p>No comments available</p>
            )}
        </div>
    );
}

export default Comments;