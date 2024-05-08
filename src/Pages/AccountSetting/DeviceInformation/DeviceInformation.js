import React from 'react';
import Navbar from '../../../Components/Navbar';
import { Box, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function PendingMovemente() {
  return (
    <div>
            <div style={{ direction: "rtl", marginBottom: "50px" }}>
      <Navbar />
      <Box sx={{ width: "90%", m: "auto" }}>
        <div style={{ marginTop: "8%", marginBottom: "2%" }}>
          <h2 className='header-text'>  معلومات الاجهزه </h2>
        </div>
        <div style={{ direction: "rtl" }}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <div className="input-group mb-3" style={{ direction: "ltr" }}>
                <select className="custom-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="input-group-append">
                  <label className="input-group-text" htmlFor="inputGroupSelect02">اختر الجهه</label>
                </div>
              </div>
            </Grid>
            <Grid item md={3} xs={12}>
              <input type='date' className='form-control'></input>
            </Grid>
            <Grid item md={3} xs={12}>
              <input type='date' className='form-control'></input>
            </Grid>
            <Grid item md={2} xs={12}>
              <button className='btn btn-success btn-block '> عرض </button>
            </Grid>
            
          </Grid>
        </div>
        <h2 className='text-center mt-5'> لا يوجد بيانات</h2>
        </Box>
    </div>
    </div>
  )
}
