import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const Header = () => {
    const [selectedOption, setSelectedOption] = useState('جهاز التحضير Beacon'); // Set default selected option to 'جهاز التحضير Beacon'

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div style={{ direction: 'rtl' }}>
            <div className='container'>
                <div className='row '>
                    <div className='d-flex text-center ml-auto mr-auto mt-4 mb-5'>
                        <div>
                            <input
                                type="checkbox"
                                id="beacon"
                                checked={selectedOption === 'جهاز التحضير Beacon'}
                                onChange={() => handleCheckboxChange('جهاز التحضير Beacon')}
                            />
                            <label htmlFor="beacon" className='mr-2'> <h5>جهاز التحضير Beacon</h5></label>
                        </div>

                        <div className='mx-5'>
                            <input
                                type="checkbox"
                                id="gps"
                                checked={selectedOption === 'نظام تحديد المواقع gps'}
                                onChange={() => handleCheckboxChange('نظام تحديد المواقع gps')}
                            />
                            <label htmlFor="gps"  className='mr-2'><h5>نظام تحديد المواقع gps</h5> </label>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                                id="beaconGps"
                                checked={selectedOption === 'جهاز تحضير مع نظام تحديد المواقع'}
                                onChange={() => handleCheckboxChange('جهاز تحضير مع نظام تحديد المواقع')}
                            />
                            <label htmlFor="beaconGps"  className='mr-2'><h5>جهاز تحضير مع نظام تحديد المواقع</h5></label>
                        </div>



                    </div>

                </div>
                <div>
                    {selectedOption === 'جهاز التحضير Beacon' &&


                        <div>
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>

                                <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit'>الاسم بالعربي</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField size='amall' type='text' label='الاسم بالعربي' />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit'>الاسم بالانجليزي</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField size='amall' type='text' label='الاسم بالانجليزي' />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit'> رمز البوابه</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField size='amall' type='text' label='رمز البوابه' />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit'>المسافه (متر)</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField size='amall' type='text' label='المسافه ' />
                                        </FormControl>
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
                                            backgroundColor: "#e04d4d",
                                            color: "#fff"
                                        }}
                                    >إلغاء</Button>
                                </div>
                            </div>

                        </div>




                    }
                    {selectedOption === 'نظام تحديد المواقع gps' && 
            
                    
                    
                    
                    <div>
                    <Grid container spacing={2} style={{ direction: 'rtl' }}>

                        <Grid item xs={4} sm={4}>
                            <Grid item xs={12} sm={12}>
                                <FormLabel className='label-edit'>الاسم بالعربي</FormLabel>
                                <FormControl fullWidth>
                                    <TextField size='amall' type='text' label='الاسم بالعربي' />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Grid  item xs={12} sm={12}>
                                <FormLabel className='label-edit'>الاسم بالانجليزي</FormLabel>
                                <FormControl fullWidth>
                                    <TextField size='amall' type='text' label='الاسم بالانجليزي' />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Grid  item xs={12} sm={12}>
                                <FormLabel className='label-edit'> المسافه </FormLabel>
                                <FormControl fullWidth>
                                    <TextField size='amall' type='text' label='رمز البوابه' />
                                </FormControl>
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
                                    backgroundColor: "#e04d4d",
                                    color: "#fff"
                                }}
                            >إلغاء</Button>
                        </div>
                    </div>

                </div>

                    
                    
                    
                    }
                    {selectedOption === 'جهاز تحضير مع نظام تحديد المواقع' &&
                    
                    
                    
                                        
                    
                    
                    
                    <div>
                    <Grid container spacing={2} style={{ direction: 'rtl' }}>

                        <Grid item xs={6} sm={6}>
                            <Grid item xs={12} sm={12}>
                                <FormLabel className='label-edit'>الاسم بالعربي</FormLabel>
                                <FormControl fullWidth>
                                    <TextField size='amall' type='text' label='الاسم بالعربي' />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Grid  item xs={12} sm={12}>
                                <FormLabel className='label-edit'>الاسم بالانجليزي</FormLabel>
                                <FormControl fullWidth>
                                    <TextField size='amall' type='text' label='الاسم بالانجليزي' />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Grid  item xs={12} sm={12}>
                                <FormLabel className='label-edit'> رمز البوابه </FormLabel>
                                <FormControl fullWidth>
                                    <TextField size='amall' type='text' label='رمز البوابه' />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Grid  item xs={12} sm={12}>
                                <FormLabel className='label-edit'> المسافه Beacon (متر)</FormLabel>
                                <FormControl fullWidth>
                                    <TextField size='amall' type='text' label='رمز البوابه' />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Grid  item xs={12} sm={12}>
                                <FormLabel className='label-edit'> المسافه (متر)</FormLabel>
                                <FormControl fullWidth>
                                    <TextField size='amall' type='text' label='رمز البوابه' />
                                </FormControl>
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
                                    backgroundColor: "#e04d4d",
                                    color: "#fff"
                                }}
                            >إلغاء</Button>
                        </div>
                    </div>

                </div>

                    
                    
                    
                    
                    }
                </div>

            </div>

        </div>
    );
};

export default Header;
