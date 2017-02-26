let React = require('react');

// let About = React.createClass({
//     render: function () {
//         return(
//             <h3>About page</h3>
//         );
//     }
// });

let About = (props) => {
    "use strict";
    return(
        <div>
            <h3>About page</h3>
            <p> This is a weather application built on React </p>
            <p> Here are some of the tools I've used:  </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React </a> - This is a JS framework
                </li>
                <li>
                    <a href="http://openweathermap.org" > Open weather map ></a> - I used Open weather map to search for weather map by city name
                </li>
            </ul>
        </div>
    )
};

module.exports = About;