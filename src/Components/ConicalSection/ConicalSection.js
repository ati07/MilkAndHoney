import React from 'react'
import './ConicalSection.css'

function ConicalSection({clr,url1}) {
    console.log("url",url1)
    return (
        <div className='ConicalSection'>
            <div className='section_left' style={ clr || url1 ?{backgroundColor: clr, backgroundImage:`url(${url1})`}:{}}>

            </div>
            <div className='section_right' style={clr|| url1 ?{backgroundColor: clr, backgroundImage:`url(${url1})`}:{}}>

            </div>
        </div>
    )
}

export default ConicalSection
