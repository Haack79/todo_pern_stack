import React from 'react';
import SeasonDisplay from './SeasonDisplay.component';
/*
making a component to get location and maybe do seasonal suggested events
*/
// const GetLocation = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         // failure
//         (err) => console.log(err)
//     )
// }
// remembering class structure. 
class GetLocation extends React.Component {
    // constructor(props) {  // this now unecessary es2015 if don't put state in. 
    //     super(props);
    //     this.state = { lat: null, errorMessage: ''}; 
        
    // }
    // just initialize state on its own - babel will work this out.
    state = {lat: null, errorMessage: ''}; 
    componentDidMount() {
        console.log('component was rendered to screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            // failure
            (err) => {
                this.setState({errorMessage: err.message}); 
            }
        );
    }
    // componentDidUpdate() {
    //     console.log('component was just updated, it re-rendered'); 
    // }
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <div>Loading...</div>
    }
}
export default GetLocation; 