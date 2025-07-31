//               <Link to='/parent'>Parent Documents</Link> 
//             </MenuItem>
//             <MenuItem>
//               <Link to='/eyfs'>EYFS</Link> 
//             </MenuItem>
//             <MenuItem>
//               <Link to='/policies'>Policies and Procedures</Link> 
//             </MenuItem>
//           </MenuList>
//         </Menu>
      
      
//     );
//   }

//   export default DropDown;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from '../menuitems';
import './dropdown.scss';

function Dropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
        <ul 
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <Link 
                            className={item.cName} 
                            to={item.path} 
                            onClick={() => setClick(false)}
                        >
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    );
}

export default Dropdown;