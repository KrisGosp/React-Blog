import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [data, setData] = useState(null);

    useEffect(() => {
        // fetching data from db json 
        const abortControl = new AbortController();

        
                fetch(url, { signal: abortControl.signal })
                    .then(response => {
                        if (!response.ok) {
                            throw Error('Couldn\'t fetch the data')
                        }
                        return response.json();
                    })
                    .then(data => {
                        setData(data)
                        setIsLoading(false)
                        setError(null)
                    })
                    .catch(err => {
                        if (err.name === 'AbortError') {
                            console.log('errrrrrr')
                        } else {
                        setError(err.message)
                        setIsLoading(false)
                        }
                    })

                    return () => abortControl.abort();
        
        }, [url]);

        return { data, isLoading, error };
}

export default useFetch;