const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
    getInitialState(){
      return{
        isLoading: false,
        errorMessage: undefined
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
        },(error)=>{
          //console.log(error.message);
          this.setState({
            isLoading: false,
            errorMessage:error.message 
          });
        });
    },
    render(){
        var {isLoading,temp,location,errorMessage} = this.state;

        function renderMessage(){
          if(isLoading){
            return <h3 className="text-center">Fetching data...</h3>
          }else if(temp && location){
            return <WeatherMessage temp={temp} location={location}/>;
          }
        }

        function renderError(){
          //alert(errorMessage);
          //console.log(errorMessage);
          if(typeof errorMessage === 'string'){
            return <ErrorModal message={errorMessage}/>;
          }
        }

        return(
          <div>
            <h1 className="text-center">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}
          </div>
        );
    }
});

module.exports = Weather;