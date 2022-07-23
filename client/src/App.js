
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

export default function App() {
  const data =[
    {
      box:"TODO",
      title:"To do",
      id:Math.random()*1.56 + Math.random()*163,
      list:localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[
        {
          title:"Design- App",
          description:"For this saljfnalskfnlkasnflkandflsanflkam",
          id:Math.random()*1.56 + Math.random()*133
        },
        
      ]
    },
    {
      box:"INPROGRESS",
      title:"In Progress",
      id:Math.random()*1.56 + Math.random()*173,

      list:[
        {
          title:"Develop- App",
          description:"For this saljfnalskfnlkasnflkandflsanflkam",
          id:Math.random()*1.89 + Math.random()*7 
        },
        
      ]
      
    },
    {
      box:"COMPLETED",
      title:"Completed",
      id:Math.random()*1.56 + Math.random()*191,
      list:[
        {
          title:"Deploy- App",
          description:"For this saljfnalskfnlkasnflkandflsanflkam",
          id:Math.random()*1.92 + Math.random()*11564 
        }
      ]
      
    }
  ]
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <div className='mt-10'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='auth'>
              <Route path='login' element={<Auth login={true}/>}/>
              <Route path='signup' element={<Auth login={false}/>}/>
            </Route>
            <Route path='dashboard' element={<Dashboard data={data}/>}/>
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}
