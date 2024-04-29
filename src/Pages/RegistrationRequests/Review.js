import React from 'react'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'; export default function Review() {




    return (
        <div>
            <div className='container'>
                <div className='row ' style={{ display: "flex", justifyContent: "space-between", direction: "rtl" }}>
                    <div className='col-md-3'style={{borderLeft:" 2px #00000075 dashed"}}>
                        <div >
                            <div className=' review-tab-edit'>
                                <p className='pt-1 pb-3 text-center'>بصمة الوجه</p>
                            </div>
                            <h5 className='mt-5'>لا توجد صورة للمعاينة</h5>
                            <div className='text-center' style={{ fontSize: "50px" }}>
                                <ImageNotSupportedIcon />

                            </div>
                        </div>

                    </div>
                    <div className='col-md-4 ' style={{borderLeft:" 2px #00000075 dashed"}}>
                        <div className='review-tab-edit'>
                            <p className='pt-1 pb-3 text-center'>بصمة الصوت</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='review-tab-edit'>
                            <p className='pt-1 pb-3 text-center'>الجهات</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
