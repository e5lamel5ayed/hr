import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Table2() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        period: '',
        startHour: '',
        numberOfHours: '',
        endDepartureTime: '',
        startArrivalTime: ''
    });
    const [dataTable, setDataTable] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setDataTable([...dataTable, formData]);
        setOpen(false);
        setFormData({
            name: '',
            address: '',
            period: '',
            startHour: '',
            numberOfHours: '',
            endDepartureTime: '',
            startArrivalTime: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePeriodChange = (e) => {
        setFormData({ ...formData, period: e.target.value });
    };

    const handleEdit = (index) => {
        // Implement edit functionality here
    };

    const handleRemove = (index) => {
        const updatedTable = [...dataTable];
        updatedTable.splice(index, 1);
        setDataTable(updatedTable);
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginTop: "8%" }}>
                <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>العطلات</h2>
                <Button style={{ marginTop: "1%" }} variant="outlined" onClick={handleOpen}><AddCircleIcon /></Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle style={{ direction: "rtl", textAlign: "right" }}>إضافة عطلة جديدة</DialogTitle>
                <DialogContent style={{ direction: "rtl" }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>الاسم</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="address"
                                    type="text"
                                    fullWidth
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>الوصف</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="startHour"
                                    type="text"
                                    fullWidth
                                    value={formData.startHour}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>نوع التكرار</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="startHour"
                                    type="text"
                                    fullWidth
                                    value={formData.startHour}
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                        </div>
                        
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>إلغاء</Button>
                    <Button onClick={handleSave}>حفظ</Button>
                </DialogActions>
            </Dialog>
            <Box sx={{ marginTop: "16px" }}>
                <TableContainer>
                    <Table>
                        <TableHead className='thead-color'>
                            <TableRow >
                                <TableCell>العنوان</TableCell>
                                <TableCell>من تاريخ</TableCell>
                                <TableCell>الى تاريخ</TableCell>
                                <TableCell>التكرار</TableCell>
                                <TableCell>تحرير</TableCell>
                                <TableCell>إزالة</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{backgroundColor:"#fff"}}>
                            {dataTable.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{data.address}</TableCell>
                                    <TableCell>{data.numberOfHours}</TableCell>
                                    <TableCell>{data.endDepartureTime}</TableCell>
                                    <TableCell>{data.startArrivalTime}</TableCell>
                                    <TableCell>
                                        <Button onClick={handleOpen}><EditIcon /></Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleRemove(index)}><DeleteIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
}
