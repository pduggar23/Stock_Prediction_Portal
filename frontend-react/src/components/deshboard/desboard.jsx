import React ,{useEffect} from 'react'
import axiosInstance from "../../axiosInstance";

const desboard = () => {
   useEffect(()=>{
        const fetchProtectedData = async () =>{
            try{
                const response = await axiosInstance.get('/protected-view/');
            }catch(error){
                console.error('Error fetching data:', error)
            }
        }
        fetchProtectedData();
    }, [])


  return (
    <div className='text-light'>deshboard</div>
  )
}

export default desboard;