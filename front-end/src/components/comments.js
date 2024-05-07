import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleComment from "./comment.js"

function Comments() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/api/comments')
            .then(response => {
                setData(response.data);
                console.log(response)
            })
            .catch(error => {
                console.error("Error fetching data: ", error)
            });

    }, []);

    return (
        <div>
            <h1>Comments</h1>

            {data.map((item, i) => (
                <SingleComment
                    index={i}
                    name={item.name}
                    text={item.text}
                />
            ))}

        </div>
    )
}

export default Comments;