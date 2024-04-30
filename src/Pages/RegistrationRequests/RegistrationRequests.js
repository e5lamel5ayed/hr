import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Review from './Review';
import {
    FormLabel,
    MenuItem, Select, InputLabel,
    FormControl,
    Box,
    Grid,
    Tab,
    Tabs,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function RegistrationRequests() {
    const [openDialog, setOpenDialog] = useState(false);
    const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0); // Added state for selected tab

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleReviewDialogOpen = () => {
        setReviewDialogOpen(true);
    };

    const handleReviewDialogClose = () => {
        setReviewDialogOpen(false);
    };

    const handleCancelRequest = () => {
        // Handle canceling the request
    };

    const handleReviewRequest = () => {
        // Handle reviewing the request
        handleReviewDialogClose();
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div style={{ direction: 'rtl', marginBottom: '50px' }}>
            <Navbar />
            <Box sx={{ width: '90%', m: 'auto' }}>
                <div className='d-flex' style={{ marginTop: '8%', marginBottom: '2%', justifyContent: "space-between" }}>
                    <div  >
                        <h2 className='header-text'>طلبات تسجيل الموظفين</h2>
                    </div>

                    <div style={{ marginTop: "1.5%", fontSize: "20px" }}>
                        <Button variant='contained' className='btn-color' onClick={handleDialogOpen}>
                            <h4 className=' mt-2 ml-2'>اضافه موظف </h4>
                        </Button>
                    </div>
                </div>

                <TableContainer>
                    <Table>
                        <TableHead style={{ backgroundColor: '#caedff' }}>
                            <TableRow>
                                <TableCell>الاسم الاول</TableCell>
                                <TableCell>الاسم الثاني</TableCell>
                                <TableCell>اسم المستخدم</TableCell>
                                <TableCell>الرقم الوظيفي</TableCell>
                                <TableCell>الاداره</TableCell>
                                <TableCell>تاريخ الانضمام</TableCell>
                                <TableCell>الحاله</TableCell>
                                <TableCell>الصور</TableCell>
                                <TableCell>الصوت</TableCell>
                                <TableCell>الرفض</TableCell>
                                <TableCell>المراجعه</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell>John</TableCell>
                                <TableCell>Doe</TableCell>
                                <TableCell>johndoe</TableCell>
                                <TableCell>12345</TableCell>
                                <TableCell>HR</TableCell>
                                <TableCell>01/04/2024</TableCell>
                                <TableCell>Pending</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Audio</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="error" onClick={handleCancelRequest}>رفض</Button>
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        sx={{
                                            backgroundColor: " #4545da",
                                            color: " #fff"
                                        }}
                                        onClick={handleReviewDialogOpen}>
                                        <AssignmentIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Dialog open={openDialog} onClose={handleDialogClose} maxWidth='sm' fullWidth>
                    <DialogTitle>
                        <Grid container justifyContent='space-between' alignItems='center' style={{ direction: 'rtl' }}>
                            <div>
                                <Tabs
                                    value={selectedTab} onChange={handleTabChange} style={{ direction: 'rtl' }}>
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label='اضافه موظف' />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label='اضافه مجموعه موظفين' />
                                </Tabs>
                            </div>

                            <IconButton onClick={handleDialogClose}>
                                <CancelIcon />
                            </IconButton>
                        </Grid>
                    </DialogTitle>
                    <DialogContent>
                        {selectedTab === 0 && (
                            <Box mt={4}>
                                <Grid container spacing={2} style={{ direction: 'rtl' }}>
                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>الاسم الاول</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField type='text' label='الاسم الاول' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>الاسم الثاني</FormLabel>

                                        <FormControl fullWidth>
                                            <TextField type='text' label='الاسم الثاني' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>اسم المستخدم </FormLabel>
                                        <FormControl fullWidth>
                                            <TextField type='text' label='اسم المستخدم' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>الرقم الوظيفي </FormLabel>
                                        <FormControl fullWidth>
                                            <TextField type='text' label='الرقم الوظيفي' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>المسمى الوظيفي </FormLabel>
                                        <FormControl fullWidth>
                                            <TextField type='text' label='المسمى الوظيفي' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <FormLabel className='label-edit'> رقم الهاتف</FormLabel>
                                            <TextField type='text' label='رقم الهاتف' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>الجهه </FormLabel>
                                        <FormControl fullWidth>
                                            <InputLabel>الجهه</InputLabel>
                                            <Select label='الجهه'>
                                                <MenuItem value='الاداره الرئيسيه'> الاداره الرئيسية</MenuItem>
                                                <MenuItem value='محاسبه'>محاسبه</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>الجنسيه</FormLabel>
                                        <FormControl fullWidth>
                                            <InputLabel>الجنسية</InputLabel>
                                            <Select label='الجنسيه'>
                                                <MenuItem value='مصر'>مصر</MenuItem>
                                                <MenuItem value='السعودية'>السعودية</MenuItem>
                                                {/* Add more countries */}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormLabel className='label-edit'>نوع الموظف </FormLabel>
                                        <FormControl fullWidth>
                                            <InputLabel>نوع الموظف</InputLabel>
                                            <Select label='نوع الموظف'>
                                                <MenuItem value='اخرى'>اخرى</MenuItem>
                                                <MenuItem value='موظف متقاعد'>موظف متقاعد</MenuItem>
                                                <MenuItem value='موظف رسمي'>موظف رسمي</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3%" }} >
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
                        )}
                        {selectedTab === 1 && (
                            <Box mt={4} mb={50}>
                                <div className='d-flex' >
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text upload-exel" id="inputGroupFileAddon01">رفع</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                                <label class="custom-file-label" for="inputGroupFile01">رفع ملف اكسل</label>
                                        </div>
                                    </div>
                                </div>

                            </Box>
                        )}
                    </DialogContent>
                </Dialog>

                <Dialog open={reviewDialogOpen} onClose={handleReviewDialogClose} maxWidth='md' fullWidth>
                    <DialogTitle
                        style={{
                            marginBottom: "15px",
                            borderBottom: "1px #000000d6 solid",
                            direction: "rtl", textAlign: "right"
                        }}>
                        مراجعة طلب تسجيل
                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                    </DialogTitle>                    <DialogContent  >
                        <Review />
                    </DialogContent>
                    <DialogActions>
                        <div>

                            <Button className='accept-edit' onClick={handleReviewRequest} color="primary">الموافقه على الطلب</Button>
                        </div>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
}
