import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox, MenuItem, Select, InputLabel } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Table2() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        repeatType: '', // Changed from string to array for dropdown
        weeklyRepeat: false,
        daysOfWeek: [],
        address: '',
        startDate: '',
        endDate: ''
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
            description: '',
            repeatType: '',
            weeklyRepeat: false,
            daysOfWeek: [],
            address: '',
            startDate: '',
            endDate: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRepeatTypeChange = (e) => {
        setFormData({ ...formData, repeatType: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, weeklyRepeat: e.target.checked });
        // Clear daysOfWeek array if weeklyRepeat is checked
        if (e.target.checked) {
            setFormData({ ...formData, daysOfWeek: [] });
        }
    };

    const handleDayOfWeekChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFormData({ ...formData, daysOfWeek: [...formData.daysOfWeek, value] });
        } else {
            setFormData({ ...formData, daysOfWeek: formData.daysOfWeek.filter(day => day !== value) });
        }
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
                                <FormLabel className='label-edit'>الاسم</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="name"
                                    type="text"
                                    fullWidth
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>الوصف</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="description"
                                    type="text"
                                    fullWidth
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormControl fullWidth>
                                    <InputLabel>نوع التكرار</InputLabel>
                                    <Select
                                        value={formData.repeatType}
                                        onChange={handleRepeatTypeChange}
                                    >
                                        <MenuItem value="اسبوعي">اسبوعي</MenuItem>
                                        <MenuItem value="شهري">شهري</MenuItem>
                                        <MenuItem value="سنوي">سنوي</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-md-6' style={{ marginTop: "30px" }}>
                                <FormControlLabel
                                    control={<Checkbox checked={formData.weeklyRepeat} onChange={handleCheckboxChange} />}
                                    label="تكرار كل اسبوع"
                                    disabled={formData.repeatType !== 'اسبوعي'} // Disable checkbox if repeat type is not weekly
                                />
                            </div>
                        </div>
                        <div className='row'>
                            {formData.repeatType === "اسبوعي" && !formData.weeklyRepeat && (
                                <div className='col-md-12'>
                                    <FormLabel className='label-edit'>اختر أيام الأسبوع</FormLabel>
                                    <div style={{ display: 'flex' }}>
                                        <FormControlLabel
                                            control={<Checkbox value="الأحد" checked={formData.daysOfWeek.includes('الأحد')} onChange={handleDayOfWeekChange} />}
                                            label="الأحد"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="الاثنين" checked={formData.daysOfWeek.includes('الاثنين')} onChange={handleDayOfWeekChange} />}
                                            label="الاثنين"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="الثلاثاء" checked={formData.daysOfWeek.includes('الثلاثاء')} onChange={handleDayOfWeekChange} />}
                                            label="الثلاثاء"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="الأربعاء" checked={formData.daysOfWeek.includes('الأربعاء')} onChange={handleDayOfWeekChange} />}
                                            label="الأربعاء"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="الخميس" checked={formData.daysOfWeek.includes('الخميس')} onChange={handleDayOfWeekChange} />}
                                            label="الخميس"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="الجمعة" checked={formData.daysOfWeek.includes('الجمعة')} onChange={handleDayOfWeekChange} />}
                                            label="الجمعة"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox value="السبت" checked={formData.daysOfWeek.includes('السبت')} onChange={handleDayOfWeekChange} />}
                                            label="السبت"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>من تاريخ</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="startDate"
                                    type="date"
                                    fullWidth
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='col-md-6'>
                                <FormLabel className='label-edit'>الى تاريخ</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="endDate"
                                    type="date"
                                    fullWidth
                                    value={formData.endDate}
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
                                <TableCell >العنوان</TableCell>
                                <TableCell>من تاريخ</TableCell>
                                <TableCell>الى تاريخ</TableCell>
                                <TableCell>التكرار</TableCell>
                                <TableCell>تحرير</TableCell>
                                <TableCell>إزالة</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ backgroundColor: "#fff" }}>
                            {dataTable.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.startDate}</TableCell>
                                    <TableCell>{data.endDate}</TableCell>
                                    <TableCell>{data.repeatType}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleEdit(index)}><EditIcon /></Button>
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
