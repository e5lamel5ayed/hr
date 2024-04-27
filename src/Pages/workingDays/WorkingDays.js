import React from 'react';
import { Box} from '@mui/material';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';

export default function WorkingDays() {

    return (
        <div style={{ direction: "rtl", marginBottom: "50px" }}>
            <Box sx={{ width: "90%", m: "auto" }}>
                <Table1/>
                <Table2/>
                <Table3/>
            </Box>
        </div>
    );
}
