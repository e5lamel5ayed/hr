import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container, Grid, ListItem } from '@mui/material';

export default function Search() {
    return (
        <div style={{ direction: "rtl"}}>
            <Grid container spacing={1}>
                <Grid item xs={3}>

                    <div class="input-group mb-3" style={{ direction: "ltr" }}>
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

                <Grid item md={3} xs={12} >
                    <div class="input-group mb-3" style={{ direction: "ltr" }}>
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div class="input-group-append">
                            <label class="input-group-text" for="inputGroupSelect02">اختر الموظف</label>
                        </div>
                    </div>
                </Grid>

                <Grid item md={2} xs={12} >
                    <input type='date' className='form-control'></input>
                </Grid>
                <Grid item md={2} xs={12} >
                    <input type='date' className='form-control'></input>
                </Grid>
                <Grid item md={2} xs={12} >
                    <button className='btn btn-success '> عرض البيانات</button>
                </Grid>







            </Grid>
        </div>
    )
}
