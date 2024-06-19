import React from 'react'
import { Link } from "react-router-dom";

const NavBar=(props)=>{
    let myStyle={
        color:'#fff'
    }
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"style={{color:'#fff'}}>News<span>X</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/business"style={myStyle}>Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment"style={myStyle}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general"style={myStyle}>General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health"style={myStyle}>Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science"style={myStyle}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports"style={myStyle}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology"style={myStyle}>Technology</Link></li>

                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
}

export default NavBar