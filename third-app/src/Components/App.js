import React from 'react'
import axios from 'axios';
import SearchInput from './SearchInput'
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: []}

 onSearchSubmit = async (entry) =>{
       const response = await axios.get(`https://pixabay.com/api/?key=41340830-fa9cbd2e96ddeff1f31955bb0&q=${entry}&image_type=photo&pretty=true`)
       this.setState({images:response.data.hits})
    }

    render(){

        return(
           <div className='SearchApp'>
                <SearchInput onSearchSubmit = {this.onSearchSubmit} />
                <ImageList images = {this.state.images}/>
           </div>
        )
    }
}


export default App