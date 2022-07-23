import { CircularProgress, Typography } from '@mui/material'
import {useNavigate} from "react-router-dom"
import React, { useEffect, useRef, useState } from 'react'
import TaskSlider from '../components/dashboard/taskSlider/TaskSlider'
import Toppanel from '../components/dashboard/Toppanel'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = ({data}) => {
  const [dragging, setDrag] = useState(false);
  const user = useSelector(state=>state.userInfo);
  const selectordata = useSelector(state=>state);
  const dispatch = useDispatch();
  const [list, setList] = useState([...data]);
  const [finalDrag, setFinalDrag] = useState(null);
  const currDragItem = useRef();
  const history = useNavigate();
  const currDragNode = useRef();

  var handleDragEnd = ()=>{
    currDragNode.current.classList.toggle("bg-slate-200");
    currDragNode.current.classList.toggle("bg-white");
    currDragNode.current.removeEventListener('dragend', handleDragEnd)
    currDragItem.current = null;
    currDragNode.current = null;
    setDrag(false);
  }

  var handleEnd =(e, data)=>{
    let edottar = e.target;
    let currdragNodetar = currDragNode.current;
    const currentItem = currDragItem.current
    console.log({finalDrag, edottar,currdragNodetar, currentItem, data})
    if(finalDrag){
      let newList = list.map(li=>{
        if(li.id == data.boxId)
        {
          li.list = li.list.filter(newl=>newl.id != data.id);
          return li;
        }else if(li.id == finalDrag){
          li.list = [{...data, boxId:finalDrag}, ...li.list];
          return li;
        }else{
          return li;
        }
      })
      setList(newList);
      setFinalDrag(null);
    }else{
      
      setFinalDrag(null);
    }

  }
  var handleDragEnter = (e, params)=>{
    const currentItem = currDragItem.current
    // let edottar = e.target;
    // let currdragNodetar = currDragNode.current;
    // let prevtar = params.boxId;
    // let prevtar = 0 
    let curr =e.currentTarget;

    curr = curr.id?curr.id: curr.parentNode.parentNode.id;
    console.log({
      currentItem,
      params,
      curr
    });

    if(currentItem.boxId != curr){
      console.log("Other space");
      setFinalDrag(curr);
    }else{ 
      setFinalDrag(null);
      console.log("Entering Space");
    }
  }
  const handleDragStart = (e, params)=>{
    console.log("Drag Start", params);
    currDragItem.current = params;
    currDragNode.current = e.target;
    currDragNode.current.addEventListener('dragend', handleDragEnd)
    setTimeout(()=>{
      setDrag(true);
    },0)
    currDragNode.current.classList.toggle("bg-white");
    currDragNode.current.classList.toggle("bg-slate-200");
  }
  useEffect(()=>{
    if(!user.isLogin){
      history("/auth/login")
    }

  },[history, user.isLogin, dispatch, user.token]);
  return (
    <div className='ml-52 -mt-10 flex flex-col h-screen pb-10'>
      <>
      {
        selectordata?.loader?.loading?
          <CircularProgress/>
        :
        <>
          <Toppanel user={user}/>
          <div className='mt-5 h-full'>
            <Typography variant='h4' className='p-6'>Projects</Typography>
            <div className='flex flex-col md:flex-row justify-evenly gap-3 px-5 h-full pb-5'>
              {
                list.map(rows=>(

                  <TaskSlider 
                    handleDragStart={handleDragStart}
                    handleDragEnter={handleDragEnter}
                    handleDragEnd={handleDragEnd}
                    dragging={dragging}
                    index={rows.box}
                    rowsData={rows}
                    handleEnd={handleEnd}
                    setList={setList}
                  />
                ))
              }
            </div>
          </div>
        </>
        
      }
        
      </>

    </div>
  )
}

export default Dashboard