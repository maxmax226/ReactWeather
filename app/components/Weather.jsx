const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState(){
      return{
        isLoading: false
      };
    },
    handleSearch(location){
      this.setState({
        isLoading:true
      });
      //debugger;
      openWeatherMap.getTemp(location)
        .then((data) =>{
          this.setState({
            location: data.location,
            temp: data.temp,
            isLoading: false
          })
        },(errorMessage)=>{
          alert(errorMessage);
        });
    },
    render(){
        var {isLoading,temp,location} = this.state;

        function renderMessage(){
          if(isLoading){
            return <h3 className="text-center">Fetching data...</h3>
          }else if(temp && location){
            return <WeatherMessage temp={temp} location={location}/>;
          }
        }

        return(
          <div>
            <h1 className="text-center">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
          </div>
        );
    }
});

module.exports = Weather;