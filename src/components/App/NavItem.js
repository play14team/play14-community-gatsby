import React from 'react';
import {Link} from 'gatsby'

const NavItem = (props) => {
    const { name, to, setCollapsed, children} = props

    return (
        <li className="nav-item">
            <Link 
                to={to ? to : "#"} 
                activeClassName="active"
                onClick={setCollapsed ? () => setCollapsed(true) : e => e.preventDefault()}
                className="nav-link"
            >
                {name} {children && <i className='bx bx-chevron-down'></i> }
            </Link>

            { 
                props.children &&
                <ul className="dropdown-menu">
                    { children }
                </ul>
            }

        </li>
    )
}

export default NavItem