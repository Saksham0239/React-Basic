import React from 'react'
import './styles.css'
function Output(props)
{
    return(
        <div className="inp">
        <p>{props.para1}</p>
        <p>Some Random text for the second paragraph</p>
        </div>
    )
}

export default Output;