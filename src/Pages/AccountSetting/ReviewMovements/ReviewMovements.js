import { Box, FormLabel, Grid, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../../../Components/Navbar';


export default function ReviewMovements() {
    return (
        <div style={{ direction: "rtl", marginBottom: "50px" }}>
            <Navbar />
            <Box sx={{ width: "90%", m: "auto" }}>

                <div style={{ display: "flex", alignItems: "center", marginTop: "6%", marginBottom: "2%" }}>
                    <div className='col-md-4'>

                        <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>الحركات المرفوضه </h2>
                    </div>

                    <div className='col-md-8 mt-4'>
                        <Grid container spacing={1}>

                            <Grid item xs={3} sx={{ marginTop: "10px" }}>

                                <div class="input-group " style={{ direction: "ltr" }}>
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

                            <Grid item xs={12} sm={3} className='mb-3' >
                                <TextField
                                    margin="dense"
                                    name="startHour"
                                    type="date"
                                    fullWidth
                                    size='small'
                                    sx={{ backgroundColor: "#fff" }}
                                />
                            </Grid>

                            <Grid item xs={3} sx={{ marginTop: "10px" }}>

                                <div class="input-group " style={{ direction: "ltr" }}>
                                    <select class="custom-select" id="inputGroupSelect02">
                                        <option selected>Choose...</option>
                                        <option value="1">مرفوضه</option>
                                        <option value="2">مقبوله بعد الرفض</option>
                                    </select>
                                    <div class="input-group-append">
                                        <label class="input-group-text" for="inputGroupSelect02">حاله الحركه </label>
                                    </div>
                                </div>

                            </Grid>


                            <Grid item xs={2} sx={{ marginTop: "10px" }}>

                                <div class="input-group mb-3" style={{ direction: "ltr" }}>
                                    <button className='btn btn-success btn-block '> عرض </button>
                                </div>

                            </Grid>

                        </Grid>
                    </div>

                </div>
                <TableContainer>
                    <Table>
                        <TableHead style={{ backgroundColor: '#caedff' }}>
                            <TableRow>
                                <TableCell> اسم الموظف </TableCell>
                                <TableCell> الرقم الوظيفي</TableCell>
                                <TableCell> نوع الحركه</TableCell>
                                <TableCell>تاريخ الحركه</TableCell>
                                <TableCell> وقت الحركه</TableCell>
                                <TableCell>طريقه التحضير</TableCell>
                                <TableCell>تصحيح الحركه</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell>Esalm Elsayed</TableCell>
                                <TableCell>9454369</TableCell>
                                <TableCell> test</TableCell>
                                <TableCell>5:00</TableCell>
                                <TableCell>6:00</TableCell>
                                <TableCell>test</TableCell>
                                <TableCell>test</TableCell>
                                

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display='flex' justifyContent='center' marginTop='16px'>
                    <Pagination count={10} color='primary' />
                </Box>
            </Box>
        </div>
    )
}
