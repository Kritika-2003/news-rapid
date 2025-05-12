// import React, { Component } from 'react'

// import {Link} from "react-router-dom";

// export class Navbar extends Component {
 

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/">RAPID REPORT</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
//         <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
//         <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
//         <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
//         <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
//         <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
//         <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
//         <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
//         <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>

//    </ul>
    
//     </div>
//   </div>
// </nav>
//       </div>
//     )
//   }
// }

// export default Navbar



import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
  state = {
    isDarkMode: false
  };

  toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode', !this.state.isDarkMode);
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    const { isDarkMode } = this.state;

    return (
      <div>
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">RAPID REPORT</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                </li>
              
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/business">Business</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/entertainment">Entertainment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/general">General</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/health">Health</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/science">Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/sports">Sports</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/technology">Technology</NavLink>
                </li>
                {/* Add other navigation links */}
              </ul>
              {/* Toggle button for light/dark mode */}
              <button className="btn btn-outline-primary ms-2" onClick={this.toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;


