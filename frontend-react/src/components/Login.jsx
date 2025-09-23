import React,{useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Login = () => {
  const navigate=useNavigate();
  const [form, setForm] = useState({
      username: '',
      password: '',
    })

    const [loading, setLoading] = useState(false);
    const {isLoggedIn,setIsLoggedIn} =useContext(AuthContext);

    const handleRegistration = async (e) => {
    e.preventDefault()
    setLoading(true)

    const userData = {
      username: form.username,
      password: form.password,
    }
    try{
      const responce =await axios.post('http://127.0.0.1:8000/api/v1/token/',userData);
      localStorage.setItem("accessToken",responce.data.access);
      localStorage.setItem("refreshToken",responce.data.refresh);
      console.log("loggin succesfully");
      setIsLoggedIn(true)
      navigate('/dashboard')
    }
    catch(error){
      console.log("sahi daal");
    }
    finally{
      setLoading(false);
    }
    
  }
  return (
     <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">Login To Account</h3>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
                
              </div>

          

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Set password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                
              </div>

              

              {loading ? (
                <button
                  type="submit"
                  className="btn btn-info d-block mx-auto"
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin /> Loggin In...
                </button>
              ) : (
                <button type="submit" className="btn btn-info d-block mx-auto">
                 Login 
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login