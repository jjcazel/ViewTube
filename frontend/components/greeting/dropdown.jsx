import React from 'react';
// import './style.css';
import { Link } from 'react-router-dom';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        if (this.props.currentUser){

            debugger
            return (
                <div className="dropdown" style={{ background: "white", width: "120px" }} >
                    <div className="signin" onClick={this.showDropdownMenu}> {this.props.currentUser.email}</div>
    
                    {this.state.displayMenu ? (
                        <ul>
                            <li><a className="active" onClick={this.props.logout} href="#Create Page">Sign out</a></li>
                            {/* <button onClick={this.props.logout}>Sign out</button> */}
                        </ul>
                    ) :
                        (
                            null
                        )
                    }
    
                </div>
    
            );
        } else {
            return (
                <div className='navbar-container'>

                    <Link className='signin' to='/signin'>SIGN IN</Link>

                </div >
            )
        }
    }
}

export default Dropdown;