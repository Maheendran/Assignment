
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { Routing } from './Allroutes/Routing';
import './App.css';
import { Appcontext } from './AppContex';
import { Navbar } from './components/Navbar';

function App() {
  
  const[updated,setUpdated]=useState([])
  const[alldata,setAlldata]=useState([])
  const[loading,setLoading]=useState(false)
  const[count,setCount]=useState(1)
  useEffect(()=>{
    setLoading(true)
   axios.get(`https://api.jikan.moe/v4/anime?page=${count}`).then((res)=>{
 
      const Update=res.data.data
      setAlldata(Update)
      setUpdated(Update)
    })
  },[count])
useEffect(()=>{
setInterval(()=>{
  setLoading(false)
},2000)
})



const handleclick=(e)=>{
  const update=alldata.filter((item)=>item.genres[0].name==e)
return setUpdated(update)
}

const handlebackpage=()=>{
 

    setCount((count)=>count-1)
  
 
}

const handlefrontpage=()=>{
  setCount((count)=>count+1)
}


  return (
  <>
   <Appcontext.Provider 
   value={{updated,handleclick,updated,
   alldata,loading,
   handlebackpage,handlefrontpage,count}}>
  <Navbar/>
  <Routing/>
  </Appcontext.Provider>
  </>
  );
}

export default App;
