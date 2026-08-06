import * as React from 'react';
import { type Color } from '../model/color';

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

const ColorPicker: React.FC<Props> = (props) => {
    return (
        <div>
            <input
            type="range"
            min="0"
            max="255"
            value={props.color.r}
            onChange={event => props.onColorUpdated({
                ...props.color,
                r: +event.target.value,
            })}
            />
            {props.color.r}
            <br />
            <input
            type="range"
            min="0"
            max="255"
            value={props.color.g}
            onChange={event => props.onColorUpdated({
                ...props.color,
                g: +event.target.value,
            })}
            />
            {props.color.g}
            <br />
            <input
            type="range"
            min="0"
            max="255"
            value={props.color.b}
            onChange={event => props.onColorUpdated({
                ...props.color,
                b: +event.target.value,
            })}
            />
            {props.color.b}
            <br />
        </div>
    )
}

export default ColorPicker;
