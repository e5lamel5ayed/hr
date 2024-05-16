import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [linkEnabled, setLinkEnabled] = useState(false);

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
    checkInputValues(value, password);
  };


  const checkInputValues = (username, password) => {
    // Enable the link if either username or password is not empty
    if (username.trim() !== '' || password.trim() !== '') {
      setLinkEnabled(true); // Enable the link
    } else {
      setLinkEnabled(false); // Disable the link
    }
  };

  return (
    <div className='all-login'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <img src='\images\Login.jpg' style={{ width: "100%", height: "90%" }} alt="Login" />
          </div>
          
          <div className='col-md-6' style={{ height: "100vh", backgroundColor: "#fff" , display:"flex",alignItems:"center"}}>
            <div className='col-md-8 ml-auto mr-auto login-edit'>
              <h3 className='text-center mb-4' style={{fontWeight: "600"}}>تسجيل الدخول</h3>
              <form>
                <div className="form-group">
                  <label className='d-flex' htmlFor="username">رمز الحساب</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                
                
                
                <div>
                  {/* Disable the link when both fields are empty */}
                  {linkEnabled ? (
                    <Link to="/Login2" className='text-decoration'>
                      <button type="button" className="btn btn-primary btn-block text-center mb-2">دخول</button>
                    </Link>
                  ) : (
                    <button type="button" className="btn btn-primary btn-block text-center mb-2" disabled>دخول</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
