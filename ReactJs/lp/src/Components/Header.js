import React from "react";
import { Link } from "react-router-dom";
import HomeIcon  from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info ">      
              <div className="collapse navbar-collapse" > 
      <ul className="nav navbar-nav  ">  
                <li className="nav-item nav-right ">      
                    <Link to={'/'} className="nav-link"><strong><HomeIcon/>EASY LOAN</strong></Link>      
                  </li>  </ul>
                  <ul className="nav navbar-nav ml-auto ">      
                  <li className="nav-item " >      
                    <Link to={'/'} className="nav-link"><ExitToAppIcon/>Logout</Link>      
                  </li>   
                </ul>      
              </div>      
            </nav> </div>
          );
        }
        
        export default Header;