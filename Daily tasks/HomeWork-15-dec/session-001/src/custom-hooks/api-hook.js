import { useEffect, useState } from "react"


export const useFetch = (url) =>{
    const [pks, setPks] = useState([])
    const [loading, setLoading] = useState(true)
    const getPks = () => {
        fetch(url)
            .then(res=>res.json())
            .then(({results})=>{
                setTimeout(()=>setPks(results), 2000)
            })
            .catch(err=> {console.log(err)})
    }
    useEffect(()=>{
        getPks()
    }, [])

    useEffect(()=>{
        if(pks.length>0 && loading){
            setLoading(false)
        }
    }, [pks])

    return [loading, pks]
}