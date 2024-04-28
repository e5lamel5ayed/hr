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
                        marginBottom: "15px",
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
                                    label="الاسم"
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
                                    label="الوصف"
                                    fullWidth
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FormControl fullWidth>
                                    <FormLabel className='label-edit'>نوع التكرار</FormLabel>
                                    <Select
                                        value={formData.repeatType}
                                        onChange={handleRepeatTypeChange}
                                    >
                                        <MenuItem value="اسبوعي">اسبوعي</MenuItem>
                                        <MenuItem value="شهري">شهري</MenuItem>
                                        <MenuItem value="سنوي">سنوي</MenuItem>
                                        <MenuItem value="بلا تكرار">بلا تكرار</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            {formData.repeatType === 'شهري' &&
                                <div className='col-md-12'>
                                    <FormLabel className='label-edit'>من كل</FormLabel>
                                    <TextField
                                        margin="dense"
                                        name="monthlyRepeat"
                                        type="number"
                                        label="يوم"
                                        fullWidth
                                        value={formData.monthlyRepeat}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            }
                            {formData.repeatType === 'سنوي' &&
                                <div className='col-md-12'>
                                    <div className='row row-edit mt-3'>

                                        <div className='col-md-6'>
                                            <FormLabel className='label-edit'>يوم</FormLabel>
                                            <TextField
                                                margin="dense"
                                                name="yearlyRepeat.day"
                                                type="number"
                                                label="يوم"
                                                fullWidth
                                                value={formData.yearlyRepeat.day}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='col-md-6'>
                                            <FormControl fullWidth>
                                                <FormLabel className='label-edit'>من شهر</FormLabel>
                                                <Select
                                                    value={formData.yearlyRepeat.month}
                                                    onChange={handleInputChange}
                                                >
                                                    {[...Array(12).keys()].map(month => (
                                                        <MenuItem key={month + 1} value={month + 1}>{month + 1}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>

                                    <div className='row row-edit mt-3'>

                                        <div className='col-md-4'>

                                            <FormControl fullWidth>
                                                <Select
                                                    value={formData.yearlyRepeat.ordinal}
                                                    onChange={handleInputChange}
                                                >
                                                    <MenuItem value="اول">اول</MenuItem>
                                                    <MenuItem value="ثاني">ثاني</MenuItem>
                                                    <MenuItem value="ثالث">ثالث</MenuItem>
                                                    <MenuItem value="رابع">رابع</MenuItem>
                                                    <MenuItem value="اخر">اخر</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className='col-md-4'>
                                            <FormControl fullWidth>
                                                <FormLabel className='label-edit'>ايام</FormLabel>
                                                <Select
                                                    value={formData.yearlyRepeat.weekday}
                                                    onChange={handleInputChange}
                                                >
                                                    <MenuItem value="الأحد">الأحد</MenuItem>
                                                    <MenuItem value="الاثنين">الاثنين</MenuItem>
                                                    <MenuItem value="الثلاثاء">الثلاثاء</MenuItem>
                                                    <MenuItem value="الأربعاء">الأربعاء</MenuItem>
                                                    <MenuItem value="الخميس">الخميس</MenuItem>
                                                    <MenuItem value="الجمعة">الجمعة</MenuItem>
                                                    <MenuItem value="السبت">السبت</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>

                                        <div className='col-md-4'>
                                            <FormControl fullWidth>
                                                <FormLabel className='label-edit'>من شهر</FormLabel>
                                                <Select
                                                    value={formData.yearlyRepeat.month}
                                                    onChange={handleInputChange}
                                                >
                                                    {[...Array(12).keys()].map(month => (
                                                        <MenuItem key={month + 1} value={month + 1}>{month + 1}</MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className='row'>
                            {formData.repeatType === "اسبوعي" && !formData.weeklyRepeat && (
                                <div className='col-md-12'>
                                    <div style={{ display: 'flex' }}>
                                        <FormControlLabel
                                            control={<Checkbox value="تكرار كل اسبوع" checked={formData.daysOfWeek.includes('تكرار كل اسبوع')} onChange={handleDayOfWeekChange} />}
                                            label="تكرار كل اسبوع"
                                        />
                                    </div>

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
                            {formData.repeatType === "بلا تكرار" && (
                                <div className='col-md-12'>
                                    <div className='row row-edit mt-3'>
                                        <div className='col-md-6'>
                                            <FormLabel className='label-edit'>من تاريخ (ميلادي)</FormLabel>
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
                                            <FormLabel className='label-edit'>الى تاريخ (ميلادي)</FormLabel>
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
                            )}
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
