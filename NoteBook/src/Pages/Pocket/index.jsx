// import React,{useState,useEffect} from 'react'
import Sidebar from '../../Component/Sidebar'
// import Popup from '../../Component/Popup'
// import { useState } from 'react'
function index() {
//  const[GroupName,setGroupName]=useState();
//  const handlesendName=(newGroupName)=>{
//     const updateGroup=[...GroupName,newGroupName]
//     console.log(updateGroup);
//     setGroupName(updateGroup);
//     localStorage.setItem('GroupName',JSON.stringify(updateGroup))
//  };

  return (
    <div>
         <Sidebar/>
          {/* <Popup onSendName={handlesendName}/> */}
    </div>
  )
}
export  default index