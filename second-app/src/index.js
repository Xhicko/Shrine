import React from 'react';
import { createRoot } from 'react-dom/client';
import HemisphereDisplay from './HemisphereDisplay'


class App extends React.Component{
    state = {Latitude: null, ErrorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({Latitude: position.coords.latitude})
            },
            (error) => {
                this.setState({ErrorMessage: error.message})
            }
        )
    }

    render(){
   
        if(this.state.ErrorMessage && !this.state.Latitude){
            return  <p>Sorry, {this.state.ErrorMessage}</p>
        }
        if(this.state.Latitude && !this.state.ErrorMessage){
            return <div> <HemisphereDisplay Latitude = {this.state.Latitude} /> </div>
        }
        else{
           return  <p>Loading your Location...</p>
        }
    }
}


const root = createRoot(document.querySelector('#root'))
root.render(
   <React.StrictMode>
        <App/>
   </React.StrictMode>
)



