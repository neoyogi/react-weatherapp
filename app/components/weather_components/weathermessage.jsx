let React = require('react');

let WeatherMessage = (props) => {
    "use strict";
     return(
        <div>
            {/*<h3 className="text-center"> Temprature: {props.temprature}*/}
            <p>Temprature: {props.temprature}</p>
            <p>Location: {props.location}</p>
        </div>
    );
};

module.exports = WeatherMessage;