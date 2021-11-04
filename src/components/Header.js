import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div>
           <h1>Deploy</h1> 
           <nav>
               <ul>
                   <li>
                       <NavLink to="/login">Login</NavLink>
                   </li>
                   <li>
                        <NavLink to="/home">Home</NavLink>
                   </li>
               </ul>
           </nav>
        </div>
    )
}

export default Header

