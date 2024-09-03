import { useState } from "react";
import { useEffect } from "react";
//import axios from "axios";
import { axiosBaseReqAdd } from "../axiosBaseReqAdd";


const useFetch = (url) => {
  
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
          try{
            setLoading(true);
            const res = await axiosBaseReqAdd.get(url);   
            setData(res.data.data);   
          }
          catch(err){
            console.log(err)
            setError(true);
          }
          setLoading(false);
        };
        fetchData();
      },[url])
      
    return {data, loading , error};
  
}

export default useFetch;