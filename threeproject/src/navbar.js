import React from 'react';
import {Link, NavLink} from 'react-router-dom'
function NavBar() {
    return (
      <div>

     <Link to='/PageOne'> PageOne </Link>
     <NavLink to='/PageTwo'> PageTwo </NavLink>

 

      </div>
    );
  }
  
  export default NavBar;