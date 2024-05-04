import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormLabel, Grid, InputLabel, MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../../Components/Navbar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';



export default function Question() {

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

    }

    // **************************************


    const [openDialog2, setOpenDialog2] = useState(false);

    const [open2, setOpen2] = useState(false);

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







    return (
        <div>
            <div style={{ direction: "rtl", marginBottom: "50px" }}>
                <Navbar />
                <Box sx={{ width: "90%", m: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "7%", marginBottom: "2%", justifyContent: "space-between" }}>
                        <div className='col-md-4 d-flex'>
                            <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>الأسئله </h2>
                            <Button
                                style={{
                                    color: "#1ec823",
                                    border: " 1px dotted #1ec823",
                                    backgroundColor: "#e6fae6",
                                    marginTop: "3.5%",
                                    // height: "maxcontent"
                                }}
                                variant="outlined" onClick={handleDialogOpen} ><AddCircleIcon />
                            </Button>
                        </div>
                        <Grid container spacing={1} mt={3}>
                            <Grid item xs={4}>

                                <div class="input-group mb-3" style={{ direction: "ltr" }}>
                                    <select class="custom-select" id="inputGroupSelect02" >
                                        <option value="1">سؤال عام /اقتراح من النظام</option>
                                        <option value="2">سؤال خاص </option>
                                    </select>
                                    <div class="input-group-append">
                                        <label class="input-group-text" for="inputGroupSelect02"> نوع السؤال </label>
                                    </div>
                                </div>

                            </Grid>


                            <Grid item xs={8}>
                                <div>
                                    <div class="input-group flex-nowrap ">
                                        <input type="text" class="form-control" placeholder="بحث" aria-label="Username" aria-describedby="addon-wrapping" />
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="addon-wrapping" style={{ backgroundColor: "#1ba4e1", color: "#fff" }}><SearchIcon /></span>
                                        </div>
                                    </div>
                                </div>
                            </Grid>


                        </Grid>
                    </div>


                    <Dialog open={openDialog} onClose={handleDialogClose} maxWidth='sm' fullWidth>
                        <DialogTitle
                            style={{
                                marginBottom: "5px",
                                borderBottom: "1px #000000d6 solid",
                                direction: "rtl", textAlign: "right"
                            }}>
                            اضافة سؤال
                            <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                        </DialogTitle>
                        <DialogContent>

                            <Box mt={2} >
                                <Grid container spacing={2} style={{ direction: 'rtl' }}>

                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit' >نص السؤال بالعربيه</FormLabel>
                                        <TextField
                                            margin="dense"
                                            name="startHour"
                                            type="text"
                                            fullWidth
                                            size='small'

                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit' >نص السؤال بالأنجليزيه</FormLabel>
                                        <TextField
                                            margin="dense"
                                            name="startHour"
                                            type="text"
                                            fullWidth
                                            size='small'

                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={12}>
                                        <FormLabel className='label-edit'>تاريخ انتهاء الصلاحيه</FormLabel>
                                        <TextField
                                            margin="dense"
                                            name="startHour"
                                            type="date"
                                            fullWidth
                                            size='small'
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <Grid item xs={2} sm={2}>

                                            <div className='d-flex mt-2'>

                                                <h5 style={{
                                                    border: "0.5px #000 solid", color: "green", borderRadius: "19px", backgroundColor: "#fff",
                                                    marginLeft: "5%",
                                                    paddingRight: "20px",
                                                    paddingLeft: "20px",
                                                    paddingBottom: "5px",
                                                    paddingTop: "1%"
                                                }}>مفعل</h5>
                                            </div>
                                        </Grid>

                                    </Grid>


                                </Grid>
                                <Grid item xs={12} sx={{ direction: "rtl" }} sm={12}>

                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>اضافة جواب </h2>
                                        <Button
                                            style={{
                                                marginTop: "1%",
                                                color: "#1ec823",
                                                border: " 1px dotted #1ec823",
                                                backgroundColor: "#e6fae6",
                                                // marginTop: "1.5%"
                                            }}
                                            variant="outlined" onClick={handleDialogOpen2}><AddCircleIcon /></Button>
                                    </div>

                                </Grid>



                                <TableContainer style={{ direction: "rtl" }}>
                                    <Table>
                                        <TableHead style={{ backgroundColor: '#caedff' }}>
                                            <TableRow>
                                                <TableCell>العنوان</TableCell>
                                                <TableCell>نوع الاجابه</TableCell>
                                                <TableCell> التاريخ</TableCell>
                                                <TableCell>الحاله  </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            <TableRow>
                                                <TableCell>zag</TableCell>
                                                <TableCell>test</TableCell>
                                                <TableCell>4/5/2024</TableCell>
                                                <TableCell>مفعل</TableCell>

                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box display='flex' justifyContent='center' marginTop='16px'>
                                    <Pagination count={10} color='primary' />
                                </Box>



                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4%" }} >
                                    <Button
                                        sx={{
                                            color: "#fff",
                                            backgroundColor: " #22a522",
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

                                            <Grid item xs={12} sm={12}>
                                                <FormLabel className='label-edit' >نص الأجابه بالعربيه</FormLabel>
                                                <TextField
                                                    margin="dense"
                                                    name="startHour"
                                                    type="text"
                                                    fullWidth
                                                    size='small'

                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={12}>
                                                <FormLabel className='label-edit' >نص الأجابه بالأنجليزيه</FormLabel>
                                                <TextField
                                                    margin="dense"
                                                    name="startHour"
                                                    type="text"
                                                    fullWidth
                                                    size='small'

                                                />
                                            </Grid>


                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4%" }} >
                                                <Button
                                                    sx={{
                                                        color: "#fff",
                                                        backgroundColor: " #22a522",
                                                        marginLeft: "20px"

                                                    }}
                                                >تعديل</Button>

                                                <div>
                                                    <Button
                                                        sx={{
                                                            backgroundColor: "#e03d3d",
                                                            color: "#fff"
                                                        }}
                                                    >إلغاء</Button>
                                                </div>
                                            </div>


                                        </Grid>
                                    </Box>

                                </DialogContent>
                            </Dialog>



                        </DialogContent>
                    </Dialog>


                    <TableContainer style={{ direction: "rtl" }}>
                        <Table>
                            <TableHead style={{ backgroundColor: '#caedff' }}>
                                <TableRow>
                                    <TableCell>العنوان</TableCell>
                                    <TableCell>اسم الحساب</TableCell>
                                    <TableCell>نوع السؤال</TableCell>
                                    <TableCell> التاريخ</TableCell >
                                    <TableCell> تاريخ انتهاء الصلاحيه</TableCell >
                                    <TableCell>الحاله  </TableCell>
                                    <TableCell>تعديل  </TableCell>
                                    <TableCell>حذف  </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell>zag</TableCell>
                                    <TableCell>ُEsalm ELsayed</TableCell>
                                    <TableCell>test </TableCell>
                                    <TableCell>4/5/2024</TableCell>
                                    <TableCell>4/6/2024</TableCell>
                                    <TableCell>مفعل</TableCell>
                                    <TableCell><EditIcon/></TableCell>
                                    <TableCell><DeleteForeverIcon/></TableCell>
                                    

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box display='flex' justifyContent='center' marginTop='16px'>
                        <Pagination count={10} color='primary' />
                    </Box>

                </Box>
            </div>
        </div>
    )
}
