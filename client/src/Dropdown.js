
import React from 'react';

const Dropdown = props => {    

    const dropdownChanged = e => {
        props.changed(e.target.value);

    }    

    return (
        <div className="">     
            <label className="form-label">{props.label}</label>       
            <select value={props.selectedValue} onChange={dropdownChanged} className="form-input mb-4 col-sm-6">
                <option className="dropdown-content" key={0}>Select...</option>
                {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>            
        </div>
    );
}

export default Dropdown;