const React = require('react');

// const WeatherMessage = React.createClass({
//   render(){
//     var {temp,location} = this.props;
    
//     return(
//       <h3>It's is {temp} in {location}</h3>
//     );
//   }
// })

const WeatherMessage = ({temp,location}) => <h3>It's is {temp} in {location}</h3>

module.exports = WeatherMessage;