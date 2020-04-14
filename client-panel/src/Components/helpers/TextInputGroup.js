import React from 'react'

export default function TextInputGroup(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} className="form-control" 
            value={props.value}
            name={props.name}
            onChange={props.onChange} 
            />
        </div>
    )
}
