// Login2.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [linkEnabled, setLinkEnabled] = useState(false);

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
    checkInputValues(value, password);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    checkInputValues(username, value);
  };

  const checkInputValues = (username, password) => {
    // Check if both username and password fields are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      setLinkEnabled(true); // Enable the link
    } else {
      setLinkEnabled(false); // Disable the link
    }
  };

  return (
    <div className='all-login'>
      <div className='container'>
        <div className='row form-edit'>
          <div className='col-md-6 login-edit'>
            <h3 className='text-center mb-4'>تسجيل الدخول</h3>
            <form>
              <div class="form-group">
                <label className='d-flex' for="username">اسم المستخدم</label>
                <input type="text" class="form-control" id="username" value={username} onChange={handleUsernameChange} />
              </div>
              <div class="form-group">
                <label className='d-flex' for="password">كلمة المرور</label>
                <input type="password" class="form-control" id="password" value={password} onChange={handlePasswordChange} />
              </div>
              <div>
                {/* Disable the link when the fields are empty */}
                {linkEnabled ? (
                  <Link to="/HomePage" className='text-decoration'>
                    <button type="submit" class="btn btn-primary btn-block text-center mb-2">دخول</button>
                  </Link>
                ) : (
                  <button type="submit" class="btn btn-primary btn-block text-center mb-2" disabled>دخول</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
