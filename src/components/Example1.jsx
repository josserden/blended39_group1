import React, { useState, useEffect } from 'react';

export default function Example1() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${res.status}`,
                    );
                }

                return res.json();
            })
            .then(posts => {
                setData(posts);
                setError(false);
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="App">
            <h1>Jsonplaceholder Posts</h1>

            {loading && <h2>Loading ...</h2>}

            {error && (
                <h3>{`There is a problem fetching the post data - ${error}`}</h3>
            )}

            <ul>
                {data &&
                    data.map(({ id, title }) => (
                        <li key={id}>
                            <h3>{title}</h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
