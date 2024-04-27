import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Table1() {
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
                <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>مواعيد الدوام</h2>
                <Button
                 style={{ 
                    marginTop: "1%",
                    color: "#1ec823",
                    border:" 1px dotted #1ec823",
                    backgroundColor: "#e6fae6",
                    marginTop: "1.5%" }}
                  variant="outlined" onClick={handleOpen}><AddCircleIcon /></Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle
                    style={{
                        marginBottom:"15px" ,
                        borderBottom: "1px #000000d6 solid",
                        direction: "rtl", textAlign: "right"
                    }}>
                        إضافة موعد دوام جديد
                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent style={{ direction: "rtl" }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>العنوان</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="address"
                                    type="text"
                                    fullWidth
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='col-md-6' style={{ display: 'flex', alignItems: 'center' }}>
                                <RadioGroup aria-label="period" name="period" value={formData.period} onChange={handlePeriodChange} style={{ flexDirection: 'row' }}>
                                    <FormControlLabel value="فتره واحده" control={<Radio />} label="فتره واحده" />
                                    <FormControlLabel value="فتره تانيه" control={<Radio />} label="فتره تانيه" />
                                </RadioGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>من</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="startHour"
                                    type="time"
                                    fullWidth
                                    value={formData.startHour}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>عدد الساعات</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="numberOfHours"
                                    type="number"
                                    fullWidth
                                    value={formData.numberOfHours}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>نهاية موعد الانصراف</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="endDepartureTime"
                                    type="time"
                                    fullWidth
                                    value={formData.endDepartureTime}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>بداية موعد الحضور</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="startArrivalTime"
                                    type="time"
                                    fullWidth
                                    value={formData.startArrivalTime}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginBottom: "15px"
                    }}
                >
                    <div>
                        <Button
                            sx={{
                                color: "#fff",
                                backgroundColor: " #22a522"
                            }}
                            onClick={handleSave}>حفظ</Button>
                    </div>

                    <div>
                        <Button
                            sx={{
                                backgroundColor: "#e03d3d",
                                color: "#fff"
                            }}
                            onClick={handleClose}>إلغاء</Button>
                    </div>

                </DialogActions>
            </Dialog>
            <Box sx={{ marginTop: "16px" }}>
                <TableContainer>
                    <Table>
                        <TableHead className='thead-color'>
                            <TableRow >
                                <TableCell >رقم</TableCell>
                                <TableCell>العنوان</TableCell>
                                <TableCell>الفترة</TableCell>
                                <TableCell>من</TableCell>
                                <TableCell>عدد الساعات</TableCell>
                                <TableCell>نهاية موعد الانصراف</TableCell>
                                <TableCell>بداية موعد الحضور</TableCell>
                                <TableCell>تحرير</TableCell>
                                <TableCell>إزالة</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ backgroundColor: "#fff" }}>
                            {dataTable.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data.address}</TableCell>
                                    <TableCell>{data.period}</TableCell>
                                    <TableCell>{data.startHour}</TableCell>
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
        </div >
    );
}
