import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../../Components/Navbar';
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';


export default function ChangePassword() {
    return (
        <div style={{ diection: "rtl", marginBottom: "50px" }}>
            <Navbar />
            <Box sx={{ width: "90%", m: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", marginTop: "10%", marginBottom: "2%" }}>

                    <div className='container d-flex shadow' style={{ backgroundColor: "#fff", justifyContent: "center", width: "50%", borderRadius: "15px", borderBottom: "1px #000 solid"}}>
                        <div className='row p-5 '>
                            <div className='col-md-12 mt-2 text-center'>
                                <h2>تغير كلمه المرور</h2>

                            </div>
                            <div className='col-md-12' style={{direction:"rtl"}}>
                                <form >
                                    <div class="form-group mt-3">
                                        <label for="exampleInputEmail1" className='d-flex'> كلمه المرور الحاليه</label>
                                        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" className='d-flex'> كلمه المرور </label>
                                        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div className='d-flex'>

                                        <small id="emailHelp" class="form-text text-muted pass">0-9</small>
                                        <small id="emailHelp" class="form-text text-muted pass">.&%$#@!</small>
                                        <small id="emailHelp" class="form-text text-muted pass">حروف صغيره</small>
                                        <small id="emailHelp" class="form-text text-muted pass">حروف كبيره</small>
                                        <small id="emailHelp" class="form-text text-muted pass">8-16 خانه</small>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" className='d-flex'> تأكيد كلمه المرور </label>
                                        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                   
                                   <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px"}} >

                                    <button type="submit" class="btn btn-success">حفظ</button>
                                    <button type="submit" class="btn btn-danger">الغاء</button>
                                   </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </Box>
        </div>
    )
}
