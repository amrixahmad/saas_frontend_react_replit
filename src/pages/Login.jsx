import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../auth/Config';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + '/user/login', { email, password });
      localStorage.setItem('token', response.data.access_token);
      // Redirect to dashboard or update app state
      navigate('/admin', { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (    

    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back!</h1>
                <p className="lead">
                  Sign in to your account to continue
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={handleLogin}>
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
                      <div>
                        <div className="form-check align-items-center">
                          <input 
                            id="customControlInline" 
                            type="checkbox" 
                            className="form-check-input" 
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          <label className="form-check-label text-small" htmlFor="customControlInline">Remember me</label>
                        </div>
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-center mb-3">
                Don't have an account? <Link to="/register">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
