import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormLabel, Grid, InputLabel, MenuItem, Pagination, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../../Components/Navbar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';


export default function AudioSentences() {


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
    return (
        <div>
            <div style={{ direction: "rtl", marginBottom: "50px" }}>
                <Navbar />
                <Box sx={{ width: "90%", m: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "7%", marginBottom: "2%", justifyContent: "space-between" }}>
                        <div className='col-md-7 d-flex'>
                            <h2 className='header-text' style={{ marginRight: "8px", marginLeft: "2%" }}>الجمل الصوتيه </h2>
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


                            <Grid item xs={6} >
                            <div className='search' >
                                <div class="input-group flex-nowrap d-flex " style={{justifyContent:"end"}}>
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
                    اضافة جمله صوتيه
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent>

                    <Box mt={2} >
                        <Grid container spacing={2} style={{ direction: 'rtl' }}>

                            <Grid item xs={12} sm={12}>
                                <FormLabel className='label-edit' >النص  </FormLabel>
                                <TextField
                                    margin="dense"
                                    name="startHour"
                                    type="text"
                                    fullWidth
                                    size='small'

                                />
                            </Grid>

                            <Grid item xs={12} sm={12} className='mb-4'>
                                    <FormLabel className='label-edit'>اللغه </FormLabel>
                                    <FormControl fullWidth>
                                        <InputLabel>اللغه</InputLabel>
                                        <Select label='الموظف'  size='small'>
                                            <MenuItem value='test '> العربيه</MenuItem>
                                            <MenuItem value='test '> English</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>



                        </Grid>



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


                </DialogContent>
            </Dialog>


            <TableContainer style={{ direction: "rtl" }}>
                <Table>
                    <TableHead style={{ backgroundColor: '#caedff' }}>
                        <TableRow>
                            <TableCell  className='text-center'>النص</TableCell>
                            <TableCell  className='text-center'>اللغه </TableCell>
                            <TableCell  className='text-center'>الحاله  </TableCell>
                            <TableCell  className='text-center'>حذف  </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell  className='text-center'>اهلا بك في بيتك الثاني نتمنى لك يوما سعيدا</TableCell>
                            <TableCell  className='text-center'> عربي</TableCell>
                            <TableCell  className='text-center'>مفعل</TableCell>
                            <TableCell  className='text-center'><DeleteForeverIcon /></TableCell>


                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display='flex' justifyContent='center' marginTop='16px'>
                <Pagination count={10} color='primary' />
            </Box>

        </Box>
            </div >
    </div >
  )
}
