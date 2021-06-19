import React from 'react'
import './ConicalSection.css'

function ConicalSection({clr}) {
    return (
        <div className='ConicalSection'>
            <div className='section_left' style={ clr?{backgroundColor: clr}:{}}>

            </div>
            <div className='section_right' style={clr?{backgroundColor: clr}:{}}>

            </div>
        </div>
    )
}

export default ConicalSection
