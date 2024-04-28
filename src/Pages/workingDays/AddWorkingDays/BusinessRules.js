import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox, MenuItem, Select, InputLabel } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

export default function BusinessRules() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
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
    const handleOpen2 = () => {
        setOpen2(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
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
        if (value !== 'يومي') {
            setFormData(prevState => ({
                ...prevState,
                monthlyRepeat: ''
            }));
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

    const handleRemove = (index) => {
        const updatedTable = [...dataTable];
        updatedTable.splice(index, 1);
        setDataTable(updatedTable);
    };


    return (
        <div>
            <div style={{ direction: "rtl" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'
                            style={{
                                borderLeft: "2px #000 dashed"
                            }}
                        >
                            <div className='d-flex'>
                                <h5 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>مواعيد الدوام</h5>
                                <Button
                                    className='add-edit'
                                    variant="outlined"
                                    onClick={handleOpen}
                                >
                                    <AddCircleIcon />
                                </Button>
                            </div>
                            <div className='messege-edit'>
                                <p>لا يوجد أي مواعيد الدوام حتى الآن</p>
                            </div>

                            <div className='d-flex'>
                                <h5 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>اضافة عطله</h5>
                                <Button
                                    className='add-edit'
                                    variant="outlined"
                                    onClick={handleOpen2}

                                >
                                    <AddCircleIcon />
                                </Button>
                            </div>
                            <div className='messege-edit'>
                                <p>لا يوجدأي عطلة حتى الآن</p>
                            </div>

                            <div>
                                <h5 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>الأوقات المرنة</h5>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <FormLabel className='label-edit'>فترة الحضور المرنة </FormLabel>
                                        <TextField
                                            margin="dense"
                                            name="numberOfHours"
                                            type="number"
                                            label="دقائق"
                                            fullWidth
                                            value={formData.numberOfHours}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className='col-md-6'>
                                        <FormLabel className='label-edit'>فترة الأنصراف المرنة </FormLabel>
                                        <TextField
                                            margin="dense"
                                            name="numberOfHours"
                                            type="number"
                                            fullWidth
                                            label="دقائق"
                                            value={formData.numberOfHours}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>

                            <div className='col-md-12'>
                                <FormLabel className='label-edit'>العنوان</FormLabel>
                                <TextField
                                    margin="dense"
                                    name="address"
                                    type="text"
                                    fullWidth
                                    label="العنوان"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='row mt-4'>

                                <div className='col-md-6'>
                                    <FormLabel className='label-edit'>تاريخ بداية</FormLabel>
                                    <TextField
                                        margin="dense"
                                        name="address"
                                        type="date"
                                        fullWidth
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <FormLabel className='label-edit'>تاريخ نهاية</FormLabel>
                                    <TextField
                                        margin="dense"
                                        name="address"
                                        type="date"
                                        fullWidth
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>

                            </div>
                            <div className='col-md-12'>
                                <FormControl fullWidth>
                                    <FormLabel className='label-edit'>نوع التكرار</FormLabel>
                                    <Select
                                        value={formData.repeatType}
                                        onChange={handleRepeatTypeChange}
                                    >
                                        <MenuItem value="يومي">يومي</MenuItem>
                                        <MenuItem value="اسبوعي">اسبوعي</MenuItem>

                                    </Select>
                                </FormControl>
                                <div className='row'>
                                    {formData.repeatType === "اسبوعي" && !formData.weeklyRepeat && (
                                        <div className='col-md-12'>
                                            <div style={{ display: 'flex' }}>
                                                <FormControlLabel
                                                    control={<Checkbox value="تكرار كل اسبوع" checked={formData.daysOfWeek.includes('تكرار كل اسبوع')} onChange={handleDayOfWeekChange} />}
                                                    label="تكرار كل اسبوع"
                                                />
                                            </div>

                                            <div style={{ display: 'flex', flexWrap: "wrap" }}>
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
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth >
                <DialogTitle style={{ direction: "rtl", textAlign: "right" }}>اضافة موعد دوام</DialogTitle>
                <DialogContent className=''>
                    <TextField
                        margin="dense"
                        label="بحث"
                        type="search"

                    />
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>إلغاء</Button>
                    <Button>حفظ</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={open2} onClose={handleClose2} fullWidth >
                <DialogTitle style={{ direction: "rtl", textAlign: "right" }}>اضافة عطلة  </DialogTitle>
                <DialogContent className=''>
                    <TextField
                        margin="dense"
                        label="بحث"
                        type="search"

                    />
                    <TableContainer>
                        <Table>
                            <TableHead className='thead-color'>
                                <TableRow >
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>إلغاء</Button>
                    <Button>حفظ</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
