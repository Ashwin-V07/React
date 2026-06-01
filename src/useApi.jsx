import React, { useEffect, useState } from 'react'

export default function useApi() {
    let [Data, setData] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return [Data]
}
