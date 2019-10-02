import React from 'react'

class EmailForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {identifier: ''}

    }

    update(e){
        this.setState({identifier: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state).then()
    }

    render() {
        return 
            <form onSubmit={this.handleSubmit}>
                <p></p>
                <label>
                    <input type="text" value={this.state.identifier} onChange={this.update} />
                    <input type="submit" value= "Next" />
                </label>

                <Link to='/signup'>Create account</Link>

            </form>
    }


}

export deafault EmailForm;