import { useState } from "react";
import { useEffect } from "react";
//import axios from "axios";
import { axiosBaseReqAdd } from "../axiosBaseReqAdd";


const useFetchCat = (url) => {

    const [dataCat,setDataCat] = useState([]);
    const [loadingCat,setLoadingCat] = useState(false);
    const [errorCat, setErrorCat] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try{
            setLoadingCat(true);
            const res = await axiosBaseReqAdd.get(url);   
            setDataCat(res.data.data);   
          }
          catch(err){
            console.log(err)
            setErrorCat(true);
          }
           setLoadingCat(false);
        };
        fetchData();
       },[url])

    return {dataCat, loadingCat , errorCat};
}

export default useFetchCat;