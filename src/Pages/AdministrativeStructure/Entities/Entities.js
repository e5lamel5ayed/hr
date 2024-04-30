import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormLabel, Grid, IconButton, InputLabel, MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Navbar from '../../../Components/Navbar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function Entities() {
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

                <div style={{ display: "flex", alignItems: "center", marginTop: "7%", marginBottom: "2%", justifyContent: "space-between" }}>
                    <div className='col-md-6 d-flex'>
                        <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>الجهات </h2>
                        <Button
                            style={{

                                color: "#1ec823",
                                border: " 1px dotted #1ec823",
                                backgroundColor: "#e6fae6",
                                marginTop: "3.5%",
                                height: "maxcontent"
                            }}
                            variant="outlined" onClick={handleDialogOpen}><AddCircleIcon />
                        </Button>
                    </div>

                    <div>
                        <div class="input-group flex-nowrap mt-3">
                            <input type="text" class="form-control" placeholder="بحث" aria-label="Username" aria-describedby="addon-wrapping" />
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="addon-wrapping" style={{ backgroundColor: "#1ba4e1", color: "#fff" }}><SearchIcon /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", marginTop: "5%", padding: "1%" }} className='thead-color'>
                    <div style={{ display: "flex", flexGrow: "1" }}>
                        <h5>الادارة الرئيسية</h5>
                        <h5 className='mx-5'><SmartToyIcon /><span className='mr-2' style={{ color: "#1ba4e1" }}>1</span></h5>
                        <h5 style={{ color: "green" }}>فعال</h5>
                    </div>
                    <div style={{ fontSize: "20px"}}>
                        <button  onClick={handleDialogOpen} style={{color:"green",border: "0px #000 solid",paddingBottom:"5px" }}>
                            <AddIcon  />
                        </button>
                        <button style={{color:"red",border: "0px #000 solid" ,paddingBottom:"5px" }}>

                            <DeleteForeverIcon  />
                        </button>
                        <button  onClick={handleDialogOpen} style={{color:"blue",border: "0px #000 solid ",paddingBottom:"5px" }}>
                            <ModeEditIcon  />
                        </button>
                        <button style={{color:"gray",border: "0px #000 solid",paddingBottom:"5px" }}>

                    <ArrowDropDownCircleIcon/>
                        </button>
                    </div>
                </div>


                <Dialog open={openDialog} onClose={handleDialogClose} maxWidth='md' fullWidth>
                    <DialogTitle
                        style={{
                            marginBottom: "5px",
                            borderBottom: "1px #000000d6 solid",
                            direction: "rtl", textAlign: "right"
                        }}>
                        إضافة جهة جديدة
                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                    </DialogTitle>
                    <DialogContent>

                        <Box mt={2} >
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>

                                <Grid item xs={5} sm={5}
                                    style={{
                                        borderLeft: "2px #000 dashed",
                                        marginLeft: "3%",
                                        paddingLeft: "3%"
                                    }}
                                >
                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit'>الاسم بالعربي</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField type='text' label='الاسم بالعربي' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit'>الاسم بالانجليزي</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField type='text' label='الاسم بالانجليزي' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit'>الجهة العليا  </FormLabel>
                                        <FormControl fullWidth>
                                            <InputLabel>الجهه العليا </InputLabel>
                                            <Select label='الجهه العليا '>
                                                <MenuItem value='الاداره الرئيسيه '> الاداره الرئيسية</MenuItem>
                                                <MenuItem value='محاسبه '> محاسبه</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <Grid item xs={6} sm={6}>

                                    <Grid item xs={12} sm={12}>

                                        <Grid item xs={12} sm={12}>
                                            <div className='d-flex'>
                                                <div className='col-md-6' style={{
                                                    marginBottom: "10px",
                                                    fontSize: "22px", fontWeight: "600",
                                                    direction: "rtl", textAlign: "right"
                                                }}>
                                                    خطط الدوام
                                                </div>

                                                <div class="input-group mb-3" style={{ direction: "ltr" }}>
                                                    <input type="text" class="form-control" placeholder="بحث" aria-label="Username" aria-describedby="addon-wrapping" />

                                                </div>
                                            </div>
                                        </Grid>


                                        <TableContainer>
                                            <Table>
                                                <TableHead
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-around"
                                                    }}
                                                    className='thead-color'>
                                                    <TableRow >
                                                        <TableCell sx={{ fontSize: "22px", fontWeight: "600" }} >العنوان</TableCell>
                                                        <TableCell sx={{ paddingLeft: "60px", paddingRight: "60px", fontSize: "22px", fontWeight: "600" }}>بدايه </TableCell>
                                                        <TableCell sx={{ fontSize: "22px", fontWeight: "600" }}>نهايه </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody style={{ backgroundColor: "#fff" }}>

                                                    <TableRow >
                                                        {/* <p className='text-center mt-3'>لا يوجد اي خطط دوام حتى الان</p> */}


                                                    </TableRow>

                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>

                                    <Grid item xs={12} sm={12}>

                                        <Grid item xs={12} sm={12}>
                                            <div className='d-flex mt-4'>
                                                <div className='col-md-6' style={{
                                                    marginBottom: "10px",
                                                    fontSize: "22px", fontWeight: "600",
                                                    direction: "rtl", textAlign: "right"
                                                }}>
                                                    الموظفين
                                                </div>

                                                <div class="input-group mb-3" style={{ direction: "ltr" }}>
                                                    <input type="text" class="form-control" placeholder="بحث" aria-label="Username" aria-describedby="addon-wrapping" />

                                                </div>
                                            </div>
                                        </Grid>


                                        <TableContainer>
                                            <Table>
                                                <TableHead
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-around"
                                                    }}
                                                    className='thead-color'>
                                                    <TableRow >
                                                        <TableCell sx={{ fontSize: "22px", fontWeight: "600" }} >الاسم الاول</TableCell>
                                                        <TableCell sx={{ paddingLeft: "30px", paddingRight: "30px", fontSize: "22px", fontWeight: "600" }}>الاسم الثاني </TableCell>
                                                        <TableCell sx={{ fontSize: "22px", fontWeight: "600" }}>اسم المستخدم </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody style={{ backgroundColor: "#fff" }}>

                                                    <TableRow >


                                                    </TableRow>

                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>

                                    <Grid item xs={12} sm={12}>

                                        <Grid item xs={12} sm={12}>
                                            <div className='d-flex mt-4'>
                                                <div className='col-md-6' style={{
                                                    marginBottom: "10px",
                                                    fontSize: "22px", fontWeight: "600",
                                                    direction: "rtl", textAlign: "right"
                                                }}>
                                                    خطط الدوام
                                                </div>

                                                <div class="input-group mb-3" style={{ direction: "ltr" }}>
                                                    <input type="text" class="form-control" placeholder="بحث" aria-label="Username" aria-describedby="addon-wrapping" />

                                                </div>
                                            </div>
                                        </Grid>

                                    </Grid>

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

            </Box>
        </div >
    )
}
