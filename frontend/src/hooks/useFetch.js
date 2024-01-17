import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";


export const useFetch = async (url) => {

    const [ data, setData ] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(()=> {
        const fetchData =async () => {
          try {
            const res = await makeRequest.get(url, 
            {
              headers: {
                Authorization : `Bearer ${import.meta.env.VITE_API_TOKEN}`
              }
            })
            setData(res.data.data)
            console.log(res.data.data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
      }, [url])
}