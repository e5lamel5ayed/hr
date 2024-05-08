import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../../../Components/Navbar';
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div

            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index
                && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [selectedOption, setSelectedOption] = useState('عينه عشوائيه'); // Set default selected option to 'جهاز التحضير Beacon'

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };


    return (
        <div style={{ diection: "rtl", marginBottom: "50px" }}>
            <Navbar />
            <Box sx={{ width: "60%", m: "auto" }}>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: "10%", backgroundColor: "#fff" }}>
                        <h5 className='d-flex p-3'>اعدادات الحساب</h5>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="معلومات الحساب" {...a11yProps(0)} />
                            <Tab label="اعدادات التحقق" {...a11yProps(1)} />
                            <Tab label="اعدادات الحضور" {...a11yProps(2)} />
                            <Tab label="التحضير المفاجىء" {...a11yProps(3)} />
                            <Tab label="التنبيهات" {...a11yProps(4)} />
                            <Tab label="اعدادات التقراير" {...a11yProps(5)} />
                        </Tabs>
                    </Box>
                    <div style={{ backgroundColor: "#FFF" }}>
                        <CustomTabPanel value={value} index={0}>
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>
                                <Grid item xs={12} sm={12}>

                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>اسم الحساب</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField size='small' type='text' label='الاسم بالعربي' />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormLabel className='label-edit'>رمز الحساب</FormLabel>
                                        <FormControl fullWidth>
                                            <TextField size='small' type='text' label='الاسم بالانجليزي' />
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

                        </CustomTabPanel>


                        <CustomTabPanel style={{ display: "" }} value={value} index={1}>
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>
                                <Grid item xs={12} sm={5} mt={2}>
                                    <FormLabel sx={{ alignSelf: "center" }} className='label-edit '>مستوى بصمه الوجه</FormLabel>

                                </Grid>
                                <Grid item xs={12} sm={7} mt={2}>
                                    <FormControl fullWidth>
                                        <InputLabel>مستوى بصمه الوجه</InputLabel>
                                        <Select size='small' label='مستوى بصمه الوجه'>
                                            <MenuItem value='test '> سهل</MenuItem>
                                            <MenuItem value='test '> متوسط</MenuItem>
                                            <MenuItem value='test '> صعب</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={5} mt={2}>
                                    <FormLabel sx={{ alignSelf: "center" }} className='label-edit '>مستوى بصمه الصوت</FormLabel>

                                </Grid>
                                <Grid item xs={12} sm={7} mt={2}>
                                    <FormControl fullWidth>
                                        <InputLabel>مستوى بصمه الصوت</InputLabel>
                                        <Select size='small' label='مستوى بصمه الوجه'>
                                            <MenuItem value='test '> سهل</MenuItem>
                                            <MenuItem value='test '> متوسط</MenuItem>
                                            <MenuItem value='test '> صعب</MenuItem>
                                        </Select>
                                    </FormControl>
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
                        </CustomTabPanel>

                        <CustomTabPanel style={{ display: "" }} value={value} index={2}>
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>
                                <Grid item xs={12} sm={6} mt={2}>
                                    <Grid className='graid-edit' item xs={12} sm={12} mt={2}>
                                        <h5>احتساب تأخير الحضور</h5>
                                        <p> <Switch {...label} defaultChecked />التأخر بعد الفتره المرنه</p>
                                    </Grid>

                                    <Grid className='graid-edit' item xs={12} sm={12} mt={2}>
                                        <h5>اعدادات العمل الاضافي</h5>
                                        <FormControlLabel control={<Checkbox />} label="احتساب الحضور المبكر ضمن العمل الاضافي" />
                                        <FormLabel sx={{ alignSelf: "center", display: "flex", justifyContent: "center" }} className='label-edit text-center mr-2'>احتساب حركات الانصارف التلقتئي ضمن العمل الاضافي </FormLabel>

                                        <TextField
                                            // margin="dense"
                                            name="numberOfHours"
                                            type="number"
                                            label=""
                                            className='mb-2'
                                            size='small'
                                        />
                                        <p> <Switch {...label} defaultChecked />التأخر بعد الفتره المرنه</p>

                                    </Grid>
                                    <Grid className='graid-edit' item xs={12} sm={12} mt={2}>
                                        <h5>التحكم بالاجراء الخاص بتغيير حاله التحضير </h5>

                                        <p> <Switch {...label} defaultChecked />التحكم بالاجراء الخاص بتغيير حاله التحضير </p>
                                        <FormLabel sx={{ alignSelf: "center", display: "flex", justifyContent: "center" }} className='label-edit text-center mr-2'> وقت التحكم بالاجراء الخاص بتغيير حاله التحضير </FormLabel>

                                        <TextField
                                            // margin="dense"
                                            name="numberOfHours"
                                            type="number"
                                            label=""
                                            className='mb-2'
                                            size='small'
                                        />

                                    </Grid>
                                   

                                </Grid>

                                <Grid item xs={12} sm={6} mt={2}>
                                    <Grid className='graid-edit' item xs={12} sm={12} mt={2}>
                                        <h5>احتساب تأخير الحضور</h5>
                                        <FormControlLabel control={<Checkbox />} label="الانصراف التلقائي" />

                                    </Grid>
                                    <Grid className='graid-edit' item xs={12} sm={12} mt={2}>
                                        <h5> العمل عن بعد</h5>

                                        <p> <Switch {...label} defaultChecked />ايقاف الاسئله في خاصيه التحكم عن بعد</p>
                                        <p> <Switch {...label} defaultChecked />تفعيل الموقع اجباري للعمل عن بعد</p>
                                        
                                    </Grid>
                                    <Grid className='graid-edit' item xs={12} sm={12} mt={2}>
                                        <h5> اعدادات الموقع الجغرافي</h5>

                                        <p> <Switch {...label} defaultChecked />حفظ الموقع الجغرافي GPS اثناء عمليه الحضور والانصراف</p>
                                        
                                    </Grid>

                                    <Grid className='graid-edit' item xs={12} sm={12} mt={2}>
                                        <h5>اعدادات البصمه</h5>

                                        <p> <Switch {...label} defaultChecked />التحكم من بصمه اليد </p>
                                        <p> <Switch {...label} defaultChecked />تحديد تسجيل الدخول من الهاتق المسجل فقط </p>
                                        <FormLabel sx={{ alignSelf: "center", display: "flex", justifyContent: "center" }} className='label-edit text-center mr-2'> وقت التحكم بالاجراء الخاص بتغيير حاله التحضير </FormLabel>

                                        <InputLabel>  نسبه العينه العشوائيه</InputLabel>
                                        <Select className='mb-2' size='small' label='نسبه العينه العشوائيه'>
                                            <MenuItem value='test '> 0%</MenuItem>
                                            <MenuItem value='test '> 10%</MenuItem>
                                            <MenuItem value='test '> 20%</MenuItem>
                                            <MenuItem value='test '> 30%</MenuItem>
                                            <MenuItem value='test '> 40%</MenuItem>
                                            <MenuItem value='test '> 50%</MenuItem>
                                            <MenuItem value='test '> 60%</MenuItem>
                                            <MenuItem value='test '> 70%</MenuItem>

                                        </Select>
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
                        </CustomTabPanel>


                        <CustomTabPanel value={value} index={3}>
                            <div className='row '>
                                <div className='d-flex text-center ml-auto mr-auto mt-4 mb-5'>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="beacon"
                                            checked={selectedOption === 'عينه عشوائيه'}
                                            onChange={() => handleCheckboxChange('عينه عشوائيه')}
                                        />
                                        <label htmlFor="beacon" className='mr-2'> <h5>عينه عشوائيه</h5></label>
                                    </div>

                                    <div className='mx-5'>
                                        <input
                                            type="checkbox"
                                            id="gps"
                                            checked={selectedOption === 'عينه محدده'}
                                            onChange={() => handleCheckboxChange('عينه محدده')}
                                        />
                                        <label htmlFor="gps" className='mr-2'><h5>عينه محدده</h5> </label>
                                    </div>

                                </div>

                            </div>
                            <div>
                                {selectedOption === 'عينه عشوائيه' &&

                                    <div>
                                        <Grid container spacing={2} style={{ direction: 'rtl' }}>

                                            <Grid item spacing={2} xs={12} sm={12} sx={{ display: "flex" }}>
                                                <Grid item xs={12} sx={{ ml: "10px" }} sm={8}>
                                                    <FormLabel sx={{ alignSelf: "center" }} className='label-edit '>نسبه العينه العشوائيه</FormLabel>

                                                    <FormControl fullWidth>
                                                        <InputLabel>مستوى بصمه الوجه</InputLabel>
                                                        <Select size='small' label='نسبه العينه العشوائيه'>
                                                            <MenuItem value='test '> 0%</MenuItem>
                                                            <MenuItem value='test '> 10%</MenuItem>
                                                            <MenuItem value='test '> 20%</MenuItem>
                                                            <MenuItem value='test '> 30%</MenuItem>
                                                            <MenuItem value='test '> 40%</MenuItem>
                                                            <MenuItem value='test '> 50%</MenuItem>
                                                            <MenuItem value='test '> 60%</MenuItem>
                                                            <MenuItem value='test '> 70%</MenuItem>

                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={4} sx={{ ml: "10px" }} sm={8}>
                                                    <FormLabel sx={{ alignSelf: "center" }} className='label-edit '>وقت التحضير المسموح به للموظف  </FormLabel>

                                                    <TextField
                                                        // margin="dense"
                                                        name="numberOfHours"
                                                        type="number"
                                                        label="دقائق"
                                                        fullWidth
                                                        size='small'
                                                    />
                                                </Grid>
                                                <Grid item xs={4} sx={{ ml: "10px" }} sm={8}>
                                                    <FormLabel sx={{ alignSelf: "center" }} className='label-edit '>اختار الجهه  </FormLabel>

                                                    <FormControl fullWidth>
                                                        <InputLabel>مستوى بصمه الوجه</InputLabel>
                                                        <Select size='small' label='اختر الجهه'>
                                                            <MenuItem value='test '> test</MenuItem>
                                                            <MenuItem value='test '> test</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={4} sx={{ ml: "10px", alignSelf: "end" }} sm={2}>
                                                    <Button
                                                        // className='btn btn-primary'
                                                        sx={{
                                                            color: "#fff",
                                                            backgroundColor: "#1976d2",
                                                            alignSelf: "end"
                                                        }}
                                                    >ارسال</Button>
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
                                {selectedOption === 'عينه محدده' &&

                                    <div>
                                        <Grid container spacing={2} style={{ direction: 'rtl' }}>

                                            <Grid item spacing={2} xs={12} sm={12} sx={{ display: "flex" }}>

                                                <Grid item xs={4} sx={{ ml: "10px" }} sm={8}>
                                                    <FormLabel sx={{ alignSelf: "center" }} className='label-edit '>وقت التحضير المسموح به للموظف  </FormLabel>

                                                    <TextField
                                                        // margin="dense"
                                                        name="numberOfHours"
                                                        type="number"
                                                        label="دقائق"
                                                        fullWidth
                                                        size='small'
                                                    />
                                                </Grid>


                                                <Grid item xs={4} sx={{ ml: "10px" }} sm={8}>
                                                    <FormLabel sx={{ alignSelf: "center" }} className='label-edit '>اختار الجهه  </FormLabel>

                                                    <FormControl fullWidth>
                                                        <InputLabel>اختار الجهه</InputLabel>
                                                        <Select size='small' label='اختر الجهه'>
                                                            <MenuItem value='test '> test</MenuItem>
                                                            <MenuItem value='test '> test</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={4} sx={{ ml: "10px" }} sm={8}>
                                                    <FormLabel sx={{ alignSelf: "center" }} className='label-edit '>اختار الموظف  </FormLabel>

                                                    <FormControl fullWidth>
                                                        <InputLabel>اختار الموظف</InputLabel>
                                                        <Select size='small' label='اختر الموظف'>
                                                            <MenuItem value='test '> test</MenuItem>
                                                            <MenuItem value='test '> test</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>


                                                <Grid item xs={4} sx={{ ml: "10px", alignSelf: "end" }} sm={2}>
                                                    <Button
                                                        // className='btn btn-primary'
                                                        sx={{
                                                            color: "#fff",
                                                            backgroundColor: "#1976d2",
                                                            alignSelf: "end"
                                                        }}
                                                    >ارسال</Button>
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

                        </CustomTabPanel>




                        <CustomTabPanel style={{ display: "" }} value={value} index={4}>
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>
                                <Grid item xs={12} sm={8} mt={2}>
                                    <h5> <Switch {...label} defaultChecked /> استلام التقارير اليوميه عبر البريد الالكتروني</h5>

                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormLabel className='label-edit'>عنوان البريد الالكتروني cc </FormLabel>
                                    <FormControl fullWidth>
                                        <TextField size='small' type='text' label='اضف عنوان البريد الالكتروني cc ' />
                                    </FormControl>
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
                        </CustomTabPanel>

                        <CustomTabPanel style={{ display: "" }} value={value} index={5}>
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>
                                <Grid sx={{ display: "flex" }} item xs={12} sm={8} mt={2}>

                                    <h6 className='mr-2'>  حذف تقارير المصادر التي مر عليها</h6>
                                    <input style={{
                                        margin: " 0 10px",
                                        width: "62px"
                                    }} type='numper'></input>

                                    <h6>ايام</h6>


                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <h5 className='d-flex'>ملحوظه : اذا كانت القيمه 0 التقارير المصدره لا يتم حذفها من النظام</h5>
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
                        </CustomTabPanel>



                    </div>
                </Box>
            </Box>
        </div>
    );
}
