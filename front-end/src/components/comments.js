import React, { useEffect, useState } from "react";
import axios from "axios";

function Comments() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/api/products')
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
            <h1>Data from Database</h1>
            <p>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </p>
        </div>
    )
}

export default Comments;