import React, { Component,Field } from 'react'

class location extends Component {
    constructor(){
        super();
        this.state = {
            latitude: '',
            longitude: ''
        };
        this.getMyLocation = this.getMyLocation.bind(this);
    
    }
    
    componentDidMount(){
        this.getMyLocation();
    }
    getMyLocation = (e) => {
    let location = null;
    let latitude = null;
    let longitude = null;
    if (window.navigator && window.navigator.geolocation) {
        location = window.navigator.geolocation
    }
    if (location){
        location.getCurrentPosition(function (position) {
            latitude = position.coords.latitude;
            longitude= position.coords.longitude;
            console.log(latitude);
            console.log(longitude);
        })
    }
        this.setState({latitude: latitude, longitude: longitude})
    
    }

//   constructor(props) {
//     super(props)
//     this.state = {
//       latitude: null,
//       longitude: null,
//     }
//   }

//   position = async () => {
//     await navigator.geolocation.getCurrentPosition(
//       position => this.setState({ 
//         latitude: position.coords.latitude, 
//         longitude: position.coords.longitude
//       }, newState => console.log(newState)), 
//       err => console.log(err)
//     );
//     console.log(this.state.latitude)
//     console.log(this.state.longitude)
//   }


  ///

  render() {
    return (
      <div>
        <button onClick={this.position} className='Filter'>Filter</button>


        <p>Your location is </p>
        {/* <Field name="latitude" component="input" onChange={this.getMyLocation}/> */}
        <button type="button" onClick={this.getMyLocation}>Get Geolocation</button>
      </div>
    );
  }
}

export default location;