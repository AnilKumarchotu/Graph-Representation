import React from 'react'
import { useNavigate ,Navigate} from "react-router-dom";

function Topbar() {

    const navigate = useNavigate();
    
const handleProfilenavigate = ()=>{
    navigate("/users")
}


  return (
    <div>
      <div className='search-container1'>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                                <ul className='navbar-nav'>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>

                                        <a className="nav-link" onClick={() => navigate("/Users")}>Profile</a>

                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Information
                                        </a>

                                        <a className="nav-link dropdown-item" href="#">Action</a>

                                        <a className="nav-link dropdown-item" href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
    </div>
  )
}

export default Topbar
