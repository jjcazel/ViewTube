import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

// lets refactor this as the navbar!

class Greeting extends React.Component {
    constructor() {
        super();
        
        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    
    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
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
                    <button className='signin' onClick={this.showMenu}>{this.props.currentUser.email}</button>
                        
                    {
                        this.state.showMenu
                        ? (
                            <div
                            className="menu"
                            ref={(element) => {
                                this.dropdownMenu = element;
                            }}
                            >
                            <button onClick={this.props.logout}>Sign out</button>
                                   
                            </div>
                            )
                            : (
                                null
                            )
                    }
                </div>
            )
        } else {
            return (
                <div className='navbar-container'>
                    <Link className='signin'to={'/signin'}>SIGN IN</Link>
                 
                </div >
            )
        }
    }
}

export default Greeting;