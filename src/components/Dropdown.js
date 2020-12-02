import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { MenuItem } from '@material-ui/core';

const Dropdown = (props) => {

    const userTitles = ['Mr.', 'Mrs.', 'Miss.', 'Sir.', 'Dr.']
    const [dropdownValue, setDropdownValue] = useState(userTitles[0])

    const handleDropDownChange = (e) => {
        let id = "title"
        let value = e.target.innerText
        setDropdownValue(value)
        props.updateState(id, value)
    }

   return (
    <NavDropdown title={dropdownValue} id="collasible-nav-dropdown">
                            {userTitles.map(title => {
                                        return <MenuItem key={title} onClick ={(e)=> handleDropDownChange(e)}>{title}</MenuItem>
                            })}
    </NavDropdown>
    )
}

export default Dropdown