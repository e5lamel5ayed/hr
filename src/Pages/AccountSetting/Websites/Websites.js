import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormLabel, Grid, InputLabel, MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../../Components/Navbar';
import SitesCollection from './SitesCollection';
import AddNewSite from './AddNewSite';
import AddExistingSite from './AddExistingSite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SearchIcon from '@mui/icons-material/Search';
import Groups2Icon from '@mui/icons-material/Groups2'; import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CancelIcon from '@mui/icons-material/Cancel';


export default function Websites() {
    const [openDialog, setOpenDialog] = useState(false);

    const [open, setOpen] = useState(false);

    const [isActive, setIsActive] = useState(false);
    const [isActivee, setIsActivee] = useState(false);

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    const handleClickk = () => {
        setIsActivee(!isActivee);
    };

    const handleSwitchToggle = () => {
        setIsSwitchOn(!isSwitchOn);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
    // ******************************************

    const [openDialog2, setOpenDialog2] = useState(false);

    const [open2, setOpen2] = useState(false);

    const [dataTable, setDataTable] = useState([]);

    const handleDialogOpen2 = () => {
        setOpenDialog2(true);
    };

    const handleDialogClose2 = () => {
        setOpenDialog2(false);
    };

    const handleClose2 = () => {
        setOpenDialog2(false);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    };

    // **************************************************


    const [openDialog3, setOpenDialog3] = useState(false);

    const [open3, setOpen3] = useState(false);

    // const [dataTable, setDataTable] = useState([]);

    const handleDialogOpen3 = () => {
        setOpenDialog3(true);
    };

    const handleDialogClose3 = () => {
        setOpenDialog3(false);
    };

    const handleClose3 = () => {
        setOpenDialog3(false);
    };
    const handleOpen3 = () => {
        setOpen3(true);
    };

    // **************************************************

    const [openDialog4, setOpenDialog4] = useState(false);

    const [open4, setOpen4] = useState(false);

    // const [dataTable, setDataTable] = useState([]);

    const handleDialogOpen4 = () => {
        setOpenDialog4(true);
    };

    const handleDialogClose4 = () => {
        setOpenDialog4(false);
    };

    const handleClose4 = () => {
        setOpenDialog4(false);
    };
    const handleOpen4 = () => {
        setOpen4(true);
    };





    // **************************************************






    return (
        <div style={{ direction: "rtl", marginBottom: "50px" }}>
            <Navbar />
            <Box sx={{ width: "90%", m: "auto" }}>
                <div className='container-fluid' style={{ marginTop: "8%" }}>
                    <div className='row'>
                        <div className="col-md-3">
                            <div
                                className={`all_websites ${isActive ? 'active' : ''}`}
                                onClick={handleClick}
                                style={{ width: "100%" }}
                            >
                                <h5 className="d-flex">All Locations</h5>
                                <h5 className="d-flex">كل المواقع</h5>
                            </div>

                            <div className='col-md-12 d-flex mt-2'>

                                <h2 className='header-text' style={{ marginLeft: "4%" }}>مجموعات المواقع </h2>
                                <div style={{ alignContent: "center" }}>

                                    <Button
                                        style={{
                                            color: "#1ec823",
                                            border: " 1px dotted #1ec823",
                                            backgroundColor: "#e6fae6",
                                            marginTop: "18px",
                                            height: "maxcontent"
                                        }}
                                        variant="outlined" onClick={handleDialogOpen}>

                                        <AddCircleIcon />
                                    </Button>
                                </div>

                            </div>

                            <div className='col-md-12 d-flex mt-3'>
                                <div class="input-group mb-3" style={{ direction: "ltr" }}>
                                    <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" />
                                    <div class="input-group-append">
                                        <label class="input-group-text active" for="inputGroupSelect02"> <SavedSearchIcon /> </label>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`all_websites ${isActivee ? 'active' : ''}`}
                                onClick={handleClickk}
                                style={{ width: "100%" }}
                            >
                                <h5 className="d-flex">Esalm </h5>
                                <h5 className="d-flex">اسلام</h5>
                                {isActivee && (
                                    <div className='d-flex'>
                                        <div className='row'>


                                            <div className=' d-flex col-md-12'>
                                                <p className="additional_h5">test</p>
                                            </div>

                                            <div className='col-md-12' style={{ fontSize: "20px ", display: "flex" }}>

                                                <h5 style={{
                                                    display: "flex", flexGrow: "1", color: "green", borderRadius: "19px", backgroundColor: "#fff",
                                                    marginLeft: "5%",
                                                    paddingRight: "2%"
                                                }}>مفعل</h5>
                                                <button style={{
                                                    color: "green", border: "0px #000 solid", paddingBottom: "5px", backgroundColor: "#fff",
                                                    borderRadius: "50%",
                                                    marginLeft: "10px"
                                                }}>
                                                    <Groups2Icon />
                                                </button>
                                                <button style={{
                                                    color: "blue", border: "0px #000 solid ", paddingBottom: "5px", backgroundColor: "#fff",
                                                    borderRadius: "50%",
                                                    marginLeft: "10px"
                                                }}>
                                                    <ModeEditIcon />
                                                </button>
                                                <button style={{
                                                    color: "red", border: "0px #000 solid", paddingBottom: "5px", backgroundColor: "#fff",
                                                    borderRadius: "50%",
                                                    marginLeft: "10px"
                                                }}>

                                                    <DeleteForeverIcon />
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>


                        <div className='col-md-9'>
                            <div style={{ display: "flex", alignItems: "center", marginBottom: "2%", justifyContent: "space-between" }}>
                                <div className='col-md-3 d-flex'>
                                    <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "5%" }}>اسلام </h2>
                                    <div style={{ alignContent: "center" }}>

                                        <Button
                                            style={{
                                                color: "#1ec823",
                                                border: " 1px dotted #1ec823",
                                                backgroundColor: "#e6fae6",
                                                marginTop: "18px",
                                                height: "maxcontent"
                                            }}
                                            variant="outlined"  >

                                            <AddCircleIcon onClick={handleDialogOpen2} />
                                        </Button>
                                    </div>
                                </div>


                                <div className='d-flex mt-2' >

                                    <div style={{ marginLeft: "20px", marginTop: "8px" }}>
                                        <div class="input-group flex-nowrap mr-2">
                                            <input type="text" class="form-control" placeholder="بحث" aria-label="Username" aria-describedby="addon-wrapping" />
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="addon-wrapping" style={{ backgroundColor: "#1ba4e1", color: "#fff" }}><SearchIcon /></span>
                                            </div>
                                        </div>
                                    </div>

                                    <Grid style={{ marginLeft: "10px" }} >


                                        <FormControl sx={{ m: 1, minWidth: 150, backgroundColor: "#fff" }} size="small">
                                            <InputLabel id="demo-select-small-label">المسافه</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >

                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={20}>20</MenuItem>
                                                <MenuItem value={30}>30</MenuItem>
                                                <MenuItem value={40}>30</MenuItem>
                                                <MenuItem value={50}>30</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>

                                    <Grid style={{ marginLeft: "10px" }} >


                                        <FormControl sx={{ m: 1, minWidth: 150, backgroundColor: "#fff" }} size="small">
                                            <InputLabel id="demo-select-small-label">نوع الموقع</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={age}
                                                label="نوع الموقع"
                                                onChange={handleChange}
                                            >

                                                <MenuItem value={10}>جهاز التحضير Beacon</MenuItem>
                                                <MenuItem value={20}>نظام تحديد المواقع gps</MenuItem>
                                                <MenuItem value={30}>جهاز تحضير مع نظام تحديد المواقع</MenuItem>
                                            </Select>
                                        </FormControl>


                                    </Grid>

                                    <Grid style={{ marginLeft: "10px" }} >


                                        <FormControl sx={{ m: 1, minWidth: 150, backgroundColor: "#fff" }} size="small">
                                            <InputLabel id="demo-select-small-label">اختر الحاله</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={age}
                                                label="اختر الحاله"
                                                onChange={handleChange}
                                            >

                                                <MenuItem value={10}>مفعل</MenuItem>
                                                <MenuItem value={20}>غير مفعل</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </Grid>
                                </div>
                            </div>
                            <TableContainer className='mt-5'>
                                <Table>
                                    <TableHead style={{ backgroundColor: '#caedff' }}>
                                        <TableRow>
                                            <TableCell>اسم الموقع</TableCell>
                                            <TableCell> رمز البوابة </TableCell>
                                            <TableCell>مسافة Beacon </TableCell>
                                            <TableCell> الموقع </TableCell>
                                            <TableCell>مسافة GPS </TableCell>
                                            <TableCell>نوع الموقع  </TableCell>
                                            <TableCell>الحاله </TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <TableRow>
                                            <TableCell>attendance</TableCell>
                                            <TableCell>9454369</TableCell>
                                            <TableCell>50 </TableCell>
                                            <TableCell><LocationOnIcon /></TableCell>
                                            <TableCell>60</TableCell>
                                            <TableCell>ddd</TableCell>
                                            <TableCell>مفعل</TableCell>

                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Box display='flex' justifyContent='center' marginTop='16px'>
                                <Pagination count={10} color='primary' />
                            </Box>
                        </div>

                    </div>

                </div >


                <Dialog open={openDialog} onClose={handleDialogClose} maxWidth='sm' fullWidth>
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

                        <SitesCollection />
                    </DialogContent>
                </Dialog>




                <Dialog open={openDialog2} onClose={handleDialogClose2} maxWidth='xs' fullWidth>
                    <DialogTitle
                        style={{
                            marginBottom: "5px",
                            borderBottom: "1px #000000d6 solid",
                            direction: "rtl", textAlign: "right"
                        }}>
                        إضافة موقع
                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose2} />
                    </DialogTitle>
                    <DialogContent>

                        <Box mt={2} >
                            <Grid container spacing={2} style={{ direction: 'rtl' }}>

                                <div className='container'>
                                    <div className='row text-center'>
                                        <div className='col-md-12 mt-4'>
                                            <button className='btn btn-primary' onClick={handleDialogOpen3}>اضافه موقع جديد</button>

                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <button className='btn btn-primary' onClick={handleDialogOpen4}>اضافه موقع موجود</button>

                                        </div>

                                    </div>

                                </div>

                            </Grid>

                        </Box>

                    </DialogContent>
                </Dialog>




                <Dialog open={openDialog3} onClose={handleDialogClose3} maxWidth='md' fullWidth>
                    <DialogTitle
                        style={{
                            marginBottom: "5px",
                            borderBottom: "1px #000000d6 solid",
                            direction: "rtl", textAlign: "right"
                        }}>
                        إضافة جهة جديدة
                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose3} />
                    </DialogTitle>
                    <DialogContent>

                        <AddNewSite />
                    </DialogContent>
                </Dialog>

                <Dialog open={openDialog4} onClose={handleDialogClose4} maxWidth='sm' fullWidth>
                    <DialogTitle
                        style={{
                            marginBottom: "5px",
                            borderBottom: "1px #000000d6 solid",
                            direction: "rtl", textAlign: "right"
                        }}>
                        إضافة جهة جديدة
                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose4} />
                    </DialogTitle>
                    <DialogContent>

                        <AddExistingSite />
                    </DialogContent>
                </Dialog>





            </Box >

        </div >
    )
}






