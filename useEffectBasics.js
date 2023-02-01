import React,{useState,useEffect} from 'react'

const useEffectBasics = () => {
    const[value,setvalue]=useState(0);
    useEffect(()=>{
        console.log("call useeffect");
        if (value>0){
            document.title=`New Messaage(${value})`;
        }
    });
    console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn"onClick={()=>setvalue(value+1)}>click me</button>
    </>
  )
}

export default useEffectBasics;