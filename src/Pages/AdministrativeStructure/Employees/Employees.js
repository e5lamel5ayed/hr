import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormLabel, Grid, IconButton, InputLabel, MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import Navbar from '../../../Components/Navbar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import DownloadIcon from '@mui/icons-material/Download';
import ImageIcon from '@mui/icons-material/Image';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';

export default function Employees() {
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
                <div style={{ display: "flex", alignItems: "center", marginTop: "6%", marginBottom: "2%" }}>
                    <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>المغادارات </h2>

                </div>

                <Grid container spacing={1}>
                    <Grid item xs={2}>

                        <div class="input-group mb-3" style={{ direction: "ltr" }}>
                            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                            <div class="input-group-append">
                                <label class="input-group-text" for="inputGroupSelect02">بحث </label>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={2}>

                        <div class="input-group mb-3" style={{ direction: "ltr" }}>
                            <select class="custom-select" id="inputGroupSelect02">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div class="input-group-append">
                                <label class="input-group-text" for="inputGroupSelect02">اختر الجهة</label>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={2}>

                        <div class="input-group mb-3" style={{ direction: "ltr" }}>
                            <select class="custom-select" id="inputGroupSelect02">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div class="input-group-append">
                                <label class="input-group-text" for="inputGroupSelect02">نوع الموظف</label>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={2}>

                        <div class="input-group mb-3" style={{ direction: "ltr" }}>
                            <select class="custom-select" id="inputGroupSelect02">
                                <option selected>Choose...</option>
                                <option value="1">مفعل</option>
                                <option value="2">غير مفعل</option>

                            </select>
                            <div class="input-group-append">
                                <label class="input-group-text" for="inputGroupSelect02">الحاله  </label>
                            </div>
                        </div>

                    </Grid>

                    <Grid item xs={2}>

                        <div class="input-group mb-3" style={{ direction: "ltr" }}>
                            <select class="custom-select" id="inputGroupSelect02">
                                <option value="1">مدير اداره</option>
                                <option value="2">مدير حساب </option>
                            </select>
                            <div class="input-group-append">
                                <label class="input-group-text" for="inputGroupSelect02"> دور  </label>
                            </div>
                        </div>

                    </Grid>


                    <Grid item xs={1}>

                        <div class="input-group mb-3" style={{ direction: "ltr" }}>
                            <button className='btn btn-primary btn-block '> <DownloadIcon /> </button>
                        </div>

                    </Grid>
                    <Grid item xs={1}>

                        <div class="input-group mb-3" style={{ direction: "ltr" }}>
                            <button className='btn btn-success btn-block '> عرض </button>
                        </div>

                    </Grid>

                </Grid>

                <TableContainer>
                    <Table>
                        <TableHead style={{ backgroundColor: '#caedff' }}>
                            <TableRow>
                                <TableCell>الاسم الاول </TableCell>
                                <TableCell> الاسم الثاني</TableCell>
                                <TableCell> رقم الهاتف</TableCell>
                                <TableCell>اسم المستخدم</TableCell>
                                <TableCell> الرقم الوظيفي</TableCell>
                                <TableCell>تاريخ التفعيل</TableCell>
                                <TableCell> الحاله </TableCell>
                                <TableCell>الصور </TableCell>
                                <TableCell>الصوت </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell>omar</TableCell>
                                <TableCell>aziz</TableCell>
                                <TableCell>01285555026 </TableCell>
                                <TableCell>omar4733306@gmail.com</TableCell>
                                <TableCell>555555</TableCell>
                                <TableCell>2024-04-18</TableCell>
                                <TableCell>مفعل</TableCell>
                                <TableCell><ImageIcon /></TableCell>
                                <TableCell><SettingsVoiceIcon /></TableCell>


                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display='flex' justifyContent='center' marginTop='16px'>
                    <Pagination count={10} color='primary' />
                </Box>

                <Dialog open={openDialog} onClose={handleDialogClose} maxWidth='sm' fullWidth>
                    <DialogTitle
                        style={{
                            marginBottom: "5px",
                            borderBottom: "1px #000000d6 solid",
                            direction: "rtl", textAlign: "right"
                        }}>
                        اضافة مغادرة
                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                    </DialogTitle>
                    <DialogContent>

                        <Box mt={2} >
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>

                                <Grid item xs={12} sm={12}>
                                    <FormLabel className='label-edit'>الموظف </FormLabel>
                                    <FormControl fullWidth>
                                        <InputLabel>الموظف</InputLabel>
                                        <Select label='الموظف'>
                                            <MenuItem value='test '> test</MenuItem>
                                            <MenuItem value='test '> test</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormLabel className='label-edit'>نوع الطلب </FormLabel>
                                    <FormControl fullWidth>
                                        <InputLabel>نوع الطلب</InputLabel>
                                        <Select label='نوع الطلب'>
                                            <MenuItem value='test '> test</MenuItem>
                                            <MenuItem value='test '> test</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormLabel className='label-edit'>نوع الطلب الفرعي </FormLabel>
                                    <FormControl fullWidth>
                                        <InputLabel>نوع الطلب الفرعي</InputLabel>
                                        <Select label='نوع الطلب الفرعي'>
                                            <MenuItem value='test '> test</MenuItem>
                                            <MenuItem value='test '> test</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormLabel className='label-edit'>من وقت</FormLabel>
                                    <TextField
                                        margin="dense"
                                        name="startHour"
                                        type="time"
                                        fullWidth

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormLabel className='label-edit'>الى وقت</FormLabel>
                                    <TextField
                                        margin="dense"
                                        name="startHour"
                                        type="time"
                                        fullWidth

                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormLabel className='label-edit'>من تاريخ</FormLabel>
                                    <TextField
                                        margin="dense"
                                        name="startHour"
                                        type="date"
                                        fullWidth

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormLabel className='label-edit'>الى تاريخ</FormLabel>
                                    <TextField
                                        margin="dense"
                                        name="startHour"
                                        type="date"
                                        fullWidth

                                    />
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
        </div>
    )
}
