let React = require('react');
let Link = require('react-router').Link;

let Examples = (props) => {
    "use strict";
    return(
        <div>
            <h2 className="text-center">examples</h2>

            <ol>
                <li>
                    <Link to="/?location=chennai"> Chennai, In </Link>
                </li>
                <li>
                    <Link to="/?location=Bangalore"> Bangalore, In </Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;