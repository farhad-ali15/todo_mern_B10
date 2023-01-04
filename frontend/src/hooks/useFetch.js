import { useEffect, useState } from "react"
import axios from "axios"




const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    useEffect(() => {
        const res = axios.get(url).then(res => {
            setLoading(false)
            setData(res.data)

        }).catch((err) => {
            setLoading(false)
            setError(err.message)

        })

    }, [])
    return { data, error, loading }
}

export default useFetch;