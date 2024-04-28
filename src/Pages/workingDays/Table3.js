import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox, MenuItem, Select, InputLabel, Tab, Tabs } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import BusinessRules from './AddWorkingDays/BusinessRules';

export default function Table3() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        repeatType: 'اسبوعي',
        weeklyRepeat: false,
        daysOfWeek: [],
        monthlyRepeat: '',
        yearlyRepeat: {
            every: '',
            day: '',
            month: '1',
            ordinal: 'اول',
            weekday: '',
        },
        startDate: '',
        endDate: ''
    });
    const [dataTable, setDataTable] = useState([]);
    const [tabValue, setTabValue] = useState(0);

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
            repeatType: 'اسبوعي',
            weeklyRepeat: false,
            daysOfWeek: [],
            monthlyRepeat: '',
            yearlyRepeat: {
                every: '',
                day: '',
                month: '1',
                ordinal: 'اول',
                weekday: '',
            },
            startDate: '',
            endDate: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRepeatTypeChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, repeatType: value });

        // Reset other repeat type related fields
        if (value !== 'اسبوعي') {
            setFormData(prevState => ({
                ...prevState,
                weeklyRepeat: false,
                daysOfWeek: []
            }));
        }
        if (value !== 'شهري') {
            setFormData(prevState => ({
                ...prevState,
                monthlyRepeat: ''
            }));
        }
        if (value !== 'سنوي') {
            setFormData(prevState => ({
                ...prevState,
                yearlyRepeat: {
                    every: '',
                    day: '',
                    month: '1',
                    ordinal: 'اول',
                    weekday: '',
                }
            }));
        }
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

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleRemove = (index) => {
        const updatedTable = [...dataTable];
        updatedTable.splice(index, 1);
        setDataTable(updatedTable);
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginTop: "8%" }}>
                <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>العطلات </h2>
                <Button
                    style={{
                        marginTop: "1%",
                        color: "#1ec823",
                        border: "1px dotted #1ec823",
                        backgroundColor: "#e6fae6",
                        marginTop: "1.5%"
                    }}
                    variant="outlined" onClick={handleOpen}><AddCircleIcon /></Button>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle
                    style={{
                        borderBottom: "1px #000000d6 solid",
                        direction: "rtl", textAlign: "right",fontSize:"28px",fontWeight:"500"
                    }}>
                    اضافة خطة دوام
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <div
                    style={{
                        direction: "rtl", textAlign: "right",
                        backgroundColor: "#caedff",
                        color: "#000",padding:".5%"
                    }}>

                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab style={{fontSize:"20px",fontWeight:"600"}}  label="قواعد العمل" />
                        <Tab  style={{fontSize:"20px",fontWeight:"600"}}  label="الموظفين" />
                        <Tab style={{fontSize:"20px",fontWeight:"600"}}    label="الجهات" />
                        <Tab  style={{fontSize:"20px",fontWeight:"600"}}  label="قواعد العمل " />
                    </Tabs>
                </div>

                <DialogContent style={{ direction: "rtl" }}>
                    {/* Content for each tab goes here */}
                    {tabValue === 0 && (
                        <div>
                            <BusinessRules />
                        </div>
                    )}
                    {tabValue === 1 && (
                        <div>
                            {/* Content for "الجهات" tab */}
                        </div>
                    )}
                    {tabValue === 2 && (
                        <div>
                            {/* Content for "الموظفين" tab */}
                        </div>
                    )}
                    {tabValue === 3 && (
                        <div>
                            {/* Content for "الاعدادات العامة" tab */}
                        </div>
                    )}
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
            </Dialog >
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
