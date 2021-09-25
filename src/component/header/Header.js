import '../Assets/css/header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
     <header className="header-container">
       <Link to='/'>
        <h2>Star war</h2>
        </Link>
         <ul>
         <Link to="/character">
           <li>
             character
           </li>
           </Link>
                    
         </ul>
     </header>
    </>
  )

}

export default Header;