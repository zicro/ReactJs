import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'
import { Link } from 'react-router-dom';
// function Anonyme, la nouvelle Ecriture de la function
 // const Navbar = () => { la meme chose que  function Navbar (){
 const Navbar = (props) => {
     const {title} = props;
    return (

            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">{title}</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home 
                            <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact/add">Add Contact </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About </Link>
                        </li>    
                    </ul>
            </nav>  

    )
}

Navbar.defaultProps = {title: "my title"}
Navbar.propTypes = {title: PropTypes.string.isRequired};
export default Navbar;