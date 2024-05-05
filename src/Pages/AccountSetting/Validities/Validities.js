import React, { useState } from 'react';
import { Box, Button, Checkbox, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputLabel, MenuItem, Pagination, Radio, RadioGroup, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Navbar from '../../../Components/Navbar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Groups3Icon from '@mui/icons-material/Groups3';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function Validities() {
    const [openDialog, setOpenDialog] = useState(false);

    const [open, setOpen] = useState(false);

    const [dataTable, setDataTable] = useState([]);

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div style={{ direction: "rtl", marginBottom: "50px" }}>
            <Navbar />
            <Box sx={{ width: "90%", m: "auto" }}>

                <div style={{ display: "flex", alignItems: "center", marginTop: "8%" }}>
                    <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>الادوار </h2>
                    <Button
                        style={{
                            marginTop: "1%",
                            color: "#1ec823",
                            border: " 1px dotted #1ec823",
                            backgroundColor: "#e6fae6",

                        }}
                        variant="outlined" onClick={handleDialogOpen}><AddCircleIcon /></Button>
                </div>

                <div style={{ display: "flex", marginTop: "2%", padding: "1%" }} className='thead-color'>
                    <div style={{ display: "flex", flexGrow: "1" }}>
                        <h5> مدير الحساب</h5>
                        <h5 className='mx-5'><SmartToyIcon /><span className='mr-2' style={{ color: "#1ba4e1" }}>1</span></h5>
                        <h5 style={{ color: "green" }}>فعال</h5>
                    </div>
                    <div style={{ fontSize: "20px" }}>
                        <button onClick={handleDialogOpen} style={{ color: "green", border: "0px #000 solid", paddingBottom: "5px" }}>
                            <Groups3Icon />
                        </button>

                        <button onClick={handleDialogOpen} style={{ color: "blue", border: "0px #000 solid ", paddingBottom: "5px" }}>
                            <ModeEditIcon />
                        </button>

                    </div>
                </div>
            </Box>

            <Dialog open={openDialog} onClose={handleDialogClose} maxWidth='md' fullWidth>
                <DialogTitle
                    style={{
                        marginBottom: "5px",
                        borderBottom: "1px #000000d6 solid",
                        direction: "rtl", textAlign: "right"
                    }}>
                    إضافة دور جديد
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent>

                    <Box mt={2} >
                        <Grid container spacing={2} style={{ direction: 'rtl' }}>

                            <Grid item xs={6} sm={6}
                                style={{
                                    borderLeft: "2px #000 dashed",
                                    marginLeft: "3%",
                                    paddingLeft: "3%"
                                }}
                            >
                                <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }} sm={12}>
                                    <Grid item xs={12} sm={5}>
                                        <FormLabel className='label-edit'>الاسم بالعربي</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField size='small' type='text' label='الاسم بالعربي' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={5}>
                                        <FormLabel className='label-edit'>الاسم بالانجليزي</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField size='small' type='text' label='الاسم بالانجليزي' />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <h5
                                        style={{
                                            display: "flex",
                                            marginTop: "14px",
                                            borderBottom: " 1px #000 dashed",
                                            paddingBottom: "10px",
                                        }}
                                    >مستوى الصلاحيه :</h5>
                                </Grid>

                                <Grid item xs={12} sm={12}
                                    style={{
                                        display: "flex",
                                        marginTop: "14px",
                                        borderBottom: " 1px #000 dashed",
                                        paddingBottom: "10px",
                                    }}
                                >
                                    <FormControl sx={{ display: "flex" }}>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"

                                        >
                                            <FormControlLabel value="all" control={<Radio />} label="كل الادارات" />
                                            <FormControlLabel value="beside" control={<Radio />} label="الاداره والادارات التابعه لها" />
                                            <FormControlLabel value="based" control={<Radio />} label="اداره مخصصه" />
                                            <FormControlLabel value="basedEmployee" control={<Radio />} label="الاداره التابعه لموظف" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormLabel className='label-edit'>نوع الموظف </FormLabel>
                                    <FormControl fullWidth>
                                        <InputLabel>نوع الموظف</InputLabel>
                                        <Select label='نوع الموظف' size='small'>
                                            <MenuItem value='اخرى'>اخرى</MenuItem>
                                            <MenuItem value='موظف رسمي'>موظف رسمي</MenuItem>
                                            <MenuItem value='موظف غير رسمي'>موظف غير رسمي</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>


                            </Grid>


                            <Grid item xs={4} sm={4}>

                                <h5 style={{ display: "flex" }}> الصلاحيات :</h5>

                                <div style={{ overflow: "auto", height: "50vh",width:"130%" }}>

                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="التقارير" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="مواعيد الدوام" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="طلبات التسجيل" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="شاشات المغادرات" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="الموظفين" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="المواقع" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="معلومات الأجهزه" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="الأسئله" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="الجمل الصوتيه" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="تغير معلومات الحساب" />
                                        <FormControlLabel control={<Checkbox Checkbox  />} label="مراجعه الحركات المرفوضه" />

                                    </FormGroup>
                                </div>

                            </Grid>

                        </Grid>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4%" }} >
                            <Button
                                sx={{
                                    color: "#fff",
                                    backgroundColor: " #22a522"
                                }}
                            >حفظ</Button>

                            <div>
                                <Button
                                    sx={{
                                        backgroundColor: "#e03d3d",
                                        color: "#fff"
                                    }}
                                >إلغاء</Button>
                            </div>
                        </div>

                    </Box>

                </DialogContent>
            </Dialog>

        </div >
    )
}
