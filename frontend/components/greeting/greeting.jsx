import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from './dropdown_container';

// lets refactor this as the navbar!

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.fetchVideos().then(() => {
            this.setState({results: this.props.videos })
        });
    }

    handleChange(e) {
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.props.videos;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(video => {
                // change current item to lowercase
                const lc = video.toLowerCase();
                // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.videos;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }
   

    render() {
        debugger
        if (this.props.currentUser) {  
            return (
                <div className='navbar-container'>

                    <section className='logo-play-container'>
                        <Link to='/'><div className="play"></div> </Link>
                        
                        <div><img className='logo-2' src={window.logoUrl} /></div>
                    
                    </section>

                    <a href="https://github.com/CSS-Tricks/Shapes-Of-CSS"> </a> 

                    <input className='search' onChange={this.handleChange} type="search" placeholder='Search' q='googlesearch'/>
                    {/* <button ><FontAwesomeIcon icon={fasearch} /></button> */}
    
                    <br/>
                <section >
                    <DropdownContainer />
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