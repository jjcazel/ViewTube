import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Dropdown from './dropdown';

// lets refactor this as the navbar!

class Greeting extends React.Component {
    constructor() {
        super();
        
        // this.handleClick = this.handleClick.bind(this);
    }

   

    render() {
        if (this.props.currentUser) {  
            return (
                <div className='navbar-container'>

                    <section className='logo-play-container'>
                        <Link to='/'><div className="play"></div> </Link>
                        
                        <div><img className='logo-2' src={window.logoUrl} /></div>
                    
                    </section>

                    <a href="https://github.com/CSS-Tricks/Shapes-Of-CSS"> </a> 

                    <input className='search' type="search" placeholder='Search' q='googlesearch'/>
                    {/* <FontAwesomeIcon icon={fasfa-search} /> */}
                    <br/>
                    {/* <button className='signin'>{this.props.currentUser.email}</button> */}
                <section>
                    <Dropdown />
                </section>    
                
                </ div>

            )         
        } else {
            return (
                <div className='navbar-container'>
                    <Link className='signin' to='/signin'>SIGN IN</Link>

                </div >
            )
        }         
    }
}

export default Greeting;