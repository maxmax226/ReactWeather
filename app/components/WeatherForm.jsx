const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit(event){
    event.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input 
          type="text" 
          placeholder="Enter city name"
          ref="location"/>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
})

module.exports = WeatherForm;