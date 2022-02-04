import { useQuery } from 'react-query';
import axios from 'axios';
import { ReactQueryDevtools } from 'react-query/devtools';

import React from 'react';

export default function Example3() {
    const { isLoading, error, data } = useQuery('posts', () => {
        return axios.get(
            `https://jsonplaceholder.typicode.com/posts?_limit=10`,
        );
    });

    return (
        <>
            <div className="App">
                <h1>Jsonplaceholder Posts</h1>
                {isLoading && <h2>Loading ...</h2>}

                {error && (
                    <h3>{`There is a problem fetching the post data - ${error}`}</h3>
                )}

                <ul>
                    {data &&
                        data.data.map(({ id, title }) => (
                            <li key={id}>
                                <h3>{title}</h3>
                            </li>
                        ))}
                </ul>
            </div>

            <ReactQueryDevtools />
        </>
    );
}
