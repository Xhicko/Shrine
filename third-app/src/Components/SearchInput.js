import React from "react";
import './index.css'


class SearchInput extends React.Component{
   state = { entry: ''}

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSearchSubmit(this.state.entry)
  }

    render(){
        return(
            <div className="Search_Wrapper">
                <h3>Search for an Image</h3>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui  icon input">
                        <input type="text" placeholder="Search..." 
                        onChange={(event) => this.setState({entry: event.target.value})}
                        value={this.state.entry}
                        />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput