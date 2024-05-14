// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const [linkEnabled, setLinkEnabled] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);

    // التحقق مما إذا كانت الحقول فارغة أو لا
    if (value.trim() !== '') {
      setLinkEnabled(true); // تمكين الرابط
    } else {
      setLinkEnabled(false); // تعطيل الرابط
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
                <label className='d-flex' for="exampleInputEmail1">رمز الحساب</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputValue} onChange={handleChange} />
              </div>
              <div>
                {/* تعطيل الرابط عندما تكون الحقول فارغة */}
                {linkEnabled ? (
                  <Link to="/Login2" className='text-decoration'>
                    <button type="submit" class="btn btn-primary btn-block text-center mb-2">التالي</button>
                  </Link>
                ) : (
                  <button type="submit" class="btn btn-primary btn-block text-center mb-2" disabled>التالي</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
