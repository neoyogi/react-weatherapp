/**
 * Created by yogesh on 13/2/17.
 */
let React = require('react');
let Nav = require("Nav");

let Main = (props) => {
    "use strict";
    return(
         <div>
            {/*<h2> Main component </h2>*/}
            <Nav/>
             <div className="row">
                 <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                 </div>
             </div>
        </div>
    );
};

module.exports = Main;
