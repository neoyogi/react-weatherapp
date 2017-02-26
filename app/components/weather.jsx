let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
    getDefaultProps: function () {
        return{
            temprature: "unknown",
            newlocation: "unknown"
        }
    },
    getInitialState: function () {
        return{
            isLoading: false
        }
    },
    handleSearch: function (location) {
        let that = this;
        let searchLocation = location.location;
        this.setState({isLoading:true, errorMessage: undefined});
        openWeatherMap.getTemp(searchLocation)
            .then(function (temp) {
                "use strict";
                that.setState({
                    newlocation: searchLocation,
                    temprature: temp,
                    isLoading: false
                });
            },
            function (err) {
                console.log(err);
                that.setState({isLoading: false, errorMessage: err.message});
            }
        )
    },

    render: function () {
        let isLoading = this.state.isLoading;
        let temp = this.state.temprature;
        let location = this.state.newlocation;
        let errorMessage = this.state.errorMessage;
        function renderMessage() {
            if (isLoading){
                return <h3 className="text-center">Fetching Weather... </h3>;
            }else if (temp && location){
                return <WeatherMessage temprature={temp} location={location} />
            }
        }
        function renderError() {
            if (typeof errorMessage === "string"){
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }
        return(
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm location={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
    // setRefs: function (update) {
    //     this.setState(update)
    // }
});

module.exports = Weather;