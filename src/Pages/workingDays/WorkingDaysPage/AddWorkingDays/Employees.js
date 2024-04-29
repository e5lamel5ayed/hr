import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, FormControlLabel, Checkbox } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Employees() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', username: 'johndoe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', username: 'janesmith' },
    // Add more employees as needed
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Save the selected employees
    setOpen(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allEmployeeIds = employees.map((employee) => employee.id);
      setSelectedEmployees(allEmployeeIds);
    } else {
      setSelectedEmployees([]);
    }
  };

  const handleEmployeeSelect = (employeeId) => {
    setSelectedEmployees((prevSelectedEmployees) => {
      if (prevSelectedEmployees.includes(employeeId)) {
        return prevSelectedEmployees.filter((id) => id !== employeeId);
      } else {
        return [...prevSelectedEmployees, employeeId];
      }
    });
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "end", marginTop: "8px" , marginBottom:"2%" }}>
        <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" , flexGrow:"1"}}>ربط خطة دوام بالموظفين</h2>
        <TextField
          label="بحث"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearch}
          style={{ marginRight: "8px" }}
        />
        
      </div>
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedEmployees.length === employees.length}
                      onChange={handleSelectAll}
                    />
                  }
                  label="اختيار الكل"
                />
              </TableCell>
              <TableCell>الاسم الأول</TableCell>
              <TableCell>الاسم الثاني</TableCell>
              <TableCell>اسم المستخدم</TableCell>
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
                  <TableCell>
                    <Checkbox
                      checked={selectedEmployees.includes(employee.id)}
                      onChange={() => handleEmployeeSelect(employee.id)}
                    />
                  </TableCell>
                  <TableCell>{employee.firstName}</TableCell>
                  <TableCell>{employee.lastName}</TableCell>
                  <TableCell>{employee.username}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}