import { useState,useEffect } from 'react';

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending, setIspending]=useState(true);
    const [err,setErr]=useState(null);

    useEffect(()=>{
      const abortCont=new AbortController();

        setTimeout(()=>{
          fetch(url,{signal: abortCont.signal})
         .then(res=>{
           if(!res.ok){
             setErr(true);
           }else{
         return res.json();
           }
         }).then(db=>{
        //  console.log(db)
          setData(db);
          setIspending(false);
     }).catch(err=>{
      if(err.name==="AbortError"){
        console.log("fetched aborted");
      } else{
        setIspending("false");
        setErr("err.message");
       console.log(err.message);
      }
     })
    },2000);
    return ()=>abortCont.abort();
   },[url]);
return {data,isPending,err}   

}

export default useFetch
