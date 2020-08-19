import React, { InputHTMLAttributes } from 'react'
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string,
    name: string,
}

const Input:React.FunctionComponent<InputProps> = ({label,name, ...rest}) => {
    return(
        <div className="input-block">
            <label className="subtitulo-black" htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} autoComplete="off"/>
        </div>
    );
}

export default Input;