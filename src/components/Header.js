import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "../assets/DarkMode/DarkMode";
import Logo from "../assets/img/Logo.png";

export default function Header() {
  return (
    <div className="container-fluid">
      {" "}
      <Navbar
        className=''
        // style={{
        //   color: "white",
        //   backgroundColor: "#191919",
        //   bottom: "60px",
        //   position: "relative",
        //   padding: "0px",
        // }}
        collapseOnSelect
        expand='md'
      >
        <Container fluid>
          <Navbar.Brand href='/'>
            <img
              src={Logo}
              // width='30'
              // height='30'
              className='d-inline-block align-top logo'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Dropdown className=' d-md-none d-block'
            key='start'
            id='dropdown-button-drop-start'
            drop='start'>
            <Dropdown.Toggle className='navToggleBtn' id='dropdown-basic'>
              <i className="bi bi-justify"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="nav-dropDown">
              <Dropdown.Item>
                {" "}
                <NavLink className='nav-item' to='/about'>
                  About
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <NavLink className='nav-item' to='/resume'>
                  Resume
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <NavLink className='nav-item' to='/portfolio'>
                  Portfolio
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink className='nav-item' to='/contact'>
                  Contact
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item className="d-flex flex-row">
                <Link className='nav-item' to=''>
                  <i className='bi bi-linkedin fs-4'></i>
                </Link>
                <Link className='nav-item' to='' target='_blank'>
                  <i className='bi bi-github fs-4 '></i>
                </Link>
              </Dropdown.Item>
              <DarkMode />
            </Dropdown.Menu>
          </Dropdown>
          {/* <Navbar.Toggle className='nav-btn ' /> */}
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='ms-auto nav-items'>
              <NavLink className='nav-item' to='/about'>
                About
              </NavLink>
              <NavLink className='nav-item' to='/resume'>
                Resume
              </NavLink>
              <NavLink className='nav-item' to='/portfolio'>
                Portfolio
              </NavLink>
              <NavLink className='nav-item' to='/contact'>
                Contact
              </NavLink>
              <Link className='nav-item' to='www.linkedin.com/in/umer-yasir' target='_blank'>
                <i className='bi bi-linkedin fs-4'></i>
              </Link>
              <Link className='nav-item' to='https://github.com/UmerYasir718' target='_blank'>
                <i className='bi bi-github fs-4 '></i>
              </Link>
              <DarkMode />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
// import React from "react";
// import { NavLink } from "react-router-dom";
// // import "../App.css";
// // import logo from "../Pics/new.png";
// import logo from "../assets/img/Logo.png";
// export default function Header() {
//   // const [textColor, setTextColor] = useState({
//   //   color: "black",
//   // })
//   // const [styles, setStyles] = useState({
//   //   color: "white",
//   //   backgroundColor: "black"
//   // })
//   // const themeChange = () => {
//   //   if (styles.color === "black" && textColor.color === "black") {
//   //     setStyles({
//   //       color: "white",
//   //       backgroundColor: "#282C34",
//   //     })
//   //     setTextColor({
//   //       color: "white",
//   //     })
//   //     setBtn(< i className="fa-solid fa-sun fs-2" ></i >)
//   //   }
//   //   else {
//   //     setStyles({
//   //       color: "black",
//   //       backgroundColor: "white",
//   //     })
//   //     setTextColor({
//   //       color: "black",
//   //     })
//   //     setBtn(<i className="fa-solid fa-moon fs-2"></i>)
//   //   }
//   // }
//   // const [btn, setBtn] = useState(
//   //   <i className="fa-solid fa-moon fs-2"></i>
//   // )
//   return (
//     <div>
//       <nav className='navbar navbar-expand-lg navbar-dark Navbar container '>
//         <div className='container-fluid'>
//           <img src={logo} className='logo' alt='logo' />
//           <button
//             className='navbar-toggler'
//             type='button'
//             data-bs-toggle='collapse'
//             data-bs-target='#navbarSupportedContent'
//             aria-controls='navbarSupportedContent'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//           >
//             <span className='navbar-toggler-icon'></span>
//           </button>
//           <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//             <ul className='navbar-nav ms-auto'>
//               {/* <li className='nav-item'>
//                 <NavLink
//                   className='nav-link fs-5 textColor'
//                   aria-current='page'
//                   to='/'
//                 >
//                   Home
//                 </NavLink>
//               </li> */}
//               <li className='nav-item'>
//                 <NavLink
//                   className='nav-link'
//                   aria-current='page'
//                   to='/About'
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink
//                   className='nav-link '
//                   aria-current='page'
//                   to='/MyResume'
//                 >
//                   My Resume
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink
//                   className='nav-link '
//                   aria-current='page'
//                   to='/Portfolio'
//                 >
//                   Portfolio
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to='/Contact'>
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
