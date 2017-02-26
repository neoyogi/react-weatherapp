/**
 * Created by yogesh on 12/2/17.
 */
let ReactDOM = require("react-dom");
let React = require("react");
let {Route, Router, IndexRoute, hashHistory} = require("react-router");
let Main = require("Main");
let Weather = require("Weather");
let About = require("About");
let Examples = require("Examples");

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
            <Route path="about" component={About}> </Route>
            <Route path="examples" component={Examples}> </Route>
        </Route>
    </Router>,
    document.getElementById("app")
);