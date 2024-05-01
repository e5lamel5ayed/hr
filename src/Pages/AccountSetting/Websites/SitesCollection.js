import { Box, Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

export default function SitesCollection() {
    return (
        <div>
            <Box mt={2} >
                <Grid container spacing={2} style={{ direction: 'rtl' }}>

                    <Grid item xs={12} sm={12}>
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
                        <Grid item xs={12} sm={12}>
                            <FormLabel className='label-edit'> الوصف</FormLabel>
                            <FormControl fullWidth>
                                <TextField type='text' label='الوصف ' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <div className='d-flex mt-4'>
                                <div className='d-flex' style={{ flexGrow: "1" }} >
                                    <h5 >الحاله</h5>

                                </div>
                                <h5 style={{
                                    border: "0.5px #000 solid", color: "green", borderRadius: "19px", backgroundColor: "#fff",
                                    marginLeft: "5%",
                                    paddingRight: "2%",
                                    paddingLeft: "2%",
                                    paddingBottom: "1%",
                                    paddingTop: "1%"
                                }}>مفعل</h5>
                            </div>

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

        </div>
    )
}
