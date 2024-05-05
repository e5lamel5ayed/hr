import { Box, FormControl, FormLabel, InputLabel, MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../../Components/Navbar';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function AlertsManagement() {
    return (
        <div style={{ diection: "rtl", marginBottom: "50px" }}>
            <Navbar />
            <Box sx={{ width: "90%", m: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", marginTop: "6%", marginBottom: "2%" }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2 className='header-text ' style={{ marginRight: "8px", marginLeft: "2%" }}>تنبيهات مواعيد العمل 3/2
                                    <AddAlertIcon
                                        sx={{
                                            fontSize: " 34px",
                                            marginRight: "8px",
                                            marginBottom: "4px",
                                            color: "blue"
                                        }}
                                    /></h2>
                            </div>
                            <div className='col-md-12'>
                                <div style={{ backgroundColor: "#fff", display: "flex", padding: "20px", borderRadius: "10px" }}>
                                    <div className='col-md-6 '>
                                        <div className='col-md-12 d-flex'>
                                            <h4>اضافة تنبيه جديد</h4>
                                        </div>
                                        <div className='col-md-12 d-flex'>
                                            <div className='col-md-3 mt-3 '>
                                                <FormLabel className=''
                                                    style={{
                                                        fontSize: "13px",
                                                        fontWeight: "800",
                                                    }}> <AvTimerIcon
                                                        sx={{
                                                            fontSize: "19px",
                                                            color: "blueviolet",
                                                        }}

                                                    /> توقيت ارسال التنبيه<span style={{ color: "red" }}>*</span> </FormLabel>
                                                <TextField
                                                    size='small'
                                                    margin="dense"
                                                    name="numberOfHours"
                                                    type="number"
                                                    label="دقائق"
                                                    fullWidth

                                                />
                                            </div>
                                            <div className='col-md-3 mt-3' style={{
                                                display: "flex",
                                                alignItems: "end",
                                                marginBottom: "5px"
                                            }}>
                                                <FormControl fullWidth size='small'>
                                                    <Select >
                                                        <MenuItem value='test ' selected> قبل</MenuItem>
                                                        <MenuItem value='test '> بعد</MenuItem>
                                                        <MenuItem value='test '> اثناء</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div className='col-md-4 mt-3' style={{
                                                display: "flex",
                                                alignItems: "end",
                                                marginBottom: "5px"
                                            }}>
                                                <FormControl fullWidth size='small'>
                                                    <Select>
                                                        <MenuItem value='test ' selected> بدايه موعد الدوام</MenuItem>
                                                        <MenuItem value='test '> نهايه موعد الدوام</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                        </div>



                                    </div>

                                    <div className='col-md-6 '>
                                        <div className='col-md-3 mt-3 '>
                                            <FormLabel className=''
                                                style={{
                                                    fontSize: "13px",
                                                    fontWeight: "800",
                                                    paddingTop: "42px",
                                                }}>  محتوى التنبيه  <span style={{ color: "red" }}>*</span> </FormLabel>

                                        </div>

                                        <div className='col-md-12 d-flex row'>
                                            <div className='d-flex col-md-3' style={{
                                                padding: "9px 61px 9px 23px"
                                            }}>
                                                <FormLabel className='label-edit'>عربي </FormLabel>
                                            </div>
                                            <div className='col-md-9'>

                                                <TextField
                                                    margin="dense"
                                                    name="startHour"
                                                    type="text"
                                                    fullWidth
                                                    size='small'
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-12 d-flex row'>
                                            <div className='d-flex col-md-3' style={{
                                                padding: "9px 61px 9px 23px"
                                            }}>
                                                <FormLabel className='label-edit'>انجليزي </FormLabel>
                                            </div>
                                            <div className='col-md-9'>

                                                <TextField
                                                    margin="dense"
                                                    name="startHour"
                                                    type="text"
                                                    fullWidth
                                                    size='small'
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <button className='btn btn-success mt-5'>حفظ</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <TableContainer style={{ direction: "rtl" }}>
                    <Table>
                        <TableHead style={{ backgroundColor: '#caedff' }}>
                            <TableRow>
                                <TableCell className='text-center'>محتوى التنبيه</TableCell>
                                <TableCell className='text-center'>توقيت ارسال التنبيه </TableCell>
                                <TableCell className='text-center'>الحاله  </TableCell>
                                <TableCell className='text-center'>تعديل  </TableCell>
                                <TableCell className='text-center'>حذف  </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell className='text-center'>مرحبا بك..لا تنسى اثبات الحضور..يومك سعيد</TableCell>
                                <TableCell className='text-center'> 30دقيقه قبل بدايه موعد الدوام</TableCell>
                                <TableCell className='text-center'>مفعل</TableCell>
                                <TableCell className='text-center'><EditIcon /></TableCell>
                                <TableCell className='text-center'><DeleteForeverIcon /></TableCell>


                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display='flex' justifyContent='center' marginTop='16px'>
                    <Pagination count={10} color='primary' />
                </Box>




            </Box >

        </div >
    )
}
