import React from 'react';
import './styles.css'

function Input(props)
{
    return(
        <div className="inp">
        <input type="text" onChange={props.handler} value={props.para1}/>
        </div>
    );
}


export default Input;