import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.logout = this.logout.bind(this);
    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: !this.state.displayMenu })
    }

    hideDropdownMenu(e) {
        e.preventDefault();
        this.setState({ displayMenu: false })
    }
    logout(e){
        e.stopPropagation();
       this.props.logout().then(() => this.props.history.push('/'))
    }

    render() {
            return (
                
                <div >
                    <div className='signin-cont' onClick={this.showDropdownMenu} > 
                        <div className="signin">{this.props.currentUser.email}</div> 
                    
                    {this.state.displayMenu ? (
                        <ul className='dropdown'>
                            <li onClick={this.logout}>Sign out</li>

                        </ul>
                    ) :
                        (
                            null
                        )
                    }
                    </div>
                </div>
    
            );
         
    }
}

export default Dropdown;