import * as React from 'react';
import {
    type Color
 } from '../model/color';

 interface Props{
    color:Color;
}

const ColorBrowser:React.FC<Props> =  (props) => {
    const divStyle:React.CSSProperties = {
        width:"11rem",
        height:'7rem',
        backgroundColor:`rgb(${props.color.r},${props.color.g},${props.color.b})`
    }

    return (
        <div>
            <h2>Color Browser</h2>
            <div style={divStyle}></div>
        </div>
    )
}

export default ColorBrowser;
