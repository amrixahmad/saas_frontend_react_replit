import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../auth/Config';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL + '/user/register', { email, password });
      // Redirect to login or show success message
      navigate('/admin', { replace: true });
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.response && error.response.data && error.response.data.detail === "User already registered") {
        setErrorMessage('User already registered');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  return (    

    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome!</h1>
                <p className="lead">
                  Let's get you signed up :)
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={handleRegister}>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                          className="form-control form-control-lg" 
                          type="email" 
                          name="email" 
                          placeholder="Enter your email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                          className="form-control form-control-lg" 
                          type="password" 
                          name="password" 
                          placeholder="Enter your password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>                      
                      <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-lg btn-primary">Register</button>
                      </div>
                      {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>                    
                  </div>
                </div>
              </div>
              <div className="text-center mb-3">
                Already have an account? <Link to="/login">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
