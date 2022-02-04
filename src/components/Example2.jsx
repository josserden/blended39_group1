import useFetch from 'react-fetch-hook';

import React from 'react';

export default function Example2() {
    const { isLoading, data, error } = useFetch(
        'https://jsonplaceholder.typicode.com/possts?_limit=10',
    );

    return (
        <div className="App">
            <h1>Jsonplaceholder Posts</h1>
            {isLoading && <h2>Loading ...</h2>}

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
