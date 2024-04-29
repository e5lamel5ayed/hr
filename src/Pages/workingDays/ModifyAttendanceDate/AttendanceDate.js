import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar';
import { Box, Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, FormControlLabel, Checkbox, Pagination } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AttendanceDate() {
  const [searchQuery, setSearchQuery] = useState('');
  const [employees, setEmployees] = useState([
    // Sample employee data (replace with your actual data)
    { id: 1, date: '2022-01-01', time: '09:00 AM', type: 'In', department: 'HR', location: 'Office A' },
    { id: 2, date: '2022-01-01', time: '05:00 PM', type: 'Out', department: 'Finance', location: 'Office B' },
    { id: 3, date: '2022-01-02', time: '08:30 AM', type: 'In', department: 'IT', location: 'Office A' },
    // Add more employee data as needed
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div style={{ direction: "rtl", marginBottom: "50px" }}>
      <Navbar />
      <Box sx={{ width: "90%", m: "auto" }}>
        <div style={{ marginTop: "8%", marginBottom: "2%" }}>
          <h2 className='header-text'> تعديل موعد الحضور</h2>
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
                  <label className="input-group-text" htmlFor="inputGroupSelect02">الموظفين</label>
                </div>
              </div>
            </Grid>
            <Grid item md={3} xs={12}>
              <input type='date' className='form-control'></input>
            </Grid>
            <Grid item md={3} xs={12}>
              <input type='date' className='form-control'></input>
            </Grid>
            <Grid item md={1} xs={12}>
              <button className='btn btn-success btn-block '> عرض </button>
            </Grid>
            <Grid item md={1} xs={12}>
              <button className='btn btn-success btn-block'><AddIcon /></button>
            </Grid>
          </Grid>
        </div>

        <TableContainer>
          <Table dir='rtl'>
            <TableHead style={{ backgroundColor: '#caedff' }}>
              <TableRow>
                <TableCell>الرقم</TableCell>
                <TableCell>التاريخ</TableCell>
                <TableCell>وقت الحركه</TableCell>
                <TableCell>نوع الحركه</TableCell>
                <TableCell>الاداره</TableCell>
                <TableCell>اسم الموقع</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees
                .filter((employee) => {
                  const fullName = `${employee.firstName} ${employee.lastName}`;
                  return fullName.toLowerCase().includes(searchQuery.toLowerCase());
                })
                .map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.date}</TableCell>
                    <TableCell>{employee.time}</TableCell>
                    <TableCell>{employee.type}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.location}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display='flex' justifyContent='center' marginTop='16px'>
          <Pagination count={10} color='primary' />
        </Box>
      </Box>
    </div>
  );
}