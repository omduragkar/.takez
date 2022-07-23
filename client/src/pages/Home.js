import React from 'react'
import {useNavigate} from "react-router-dom"
const Home = () => {
    const history = useNavigate();
    // const usermain = useSelector(state => state.usermain);
    // useEffect(() => {
    //     if(usermain.userinfo)
    //     {
    //         history("/mynotes")
    //     }
    // }, [history, usermain.userinfo])
    
    return (
        <div className='m-3'>
            <div className='flex flex-col sm:flex-col-reverse p-5 sm:p-20 md:px-36 md:flex-row'>
                <div className='flex-1'>
                <img src='/images/mobile1.svg' className='w-full ' alt="mainimg1"/>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center space-y-5 md:space-y-10'>
                    <p className='headmain text-center'>Keep up your Notes Secure!</p>
                    <div className='flex gap-2 md:gap-5'>
                        <button  onClick={()=>{history("/auth/login")}} className="btn" >Login</button>
                        <button  onClick={()=>{history("/auth/signup")}} className="btn" >Signup</button> 
                    </div>
                </div>
            </div>
            <div>
                <div className='flex-1 flex flex-col justify-center items-center space-y-5 md:space-y-10'>
                    <p className='headmain text-center'>Already Registered? Take me to Dashboard!</p>
                    <div className='flex gap-2 md:gap-5'>
                        <button onClick={()=>{history("/dashboard")}} className="btn" >Dashboard</button> 
                    </div>
                </div>

            </div>
            <div className='my-10'>
                <div className=''>
                    <p className='text-center'>By Om Duragkar&copy;</p>
                    
                </div>

            </div>
        </div>
    )
}

export default Home
