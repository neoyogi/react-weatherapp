let React = require('react');

let WeatherForm = React.createClass({
    render: function () {
        return(
            <form onSubmit={this.setRefs}>
                <label>Location: </label>
                <input type="text" ref="location"/>
                <br/>
                <button className="button expanded hollow">Get Weather</button>
            </form>
        )
    },
    setRefs: function (e) {
        e.preventDefault();
        let newLocation = this.refs.location.value;
        let NewUpdates = {};
        if (typeof newLocation === 'string' && newLocation.length > 0){
            // NewUpdates.temprature = newLocation;
            NewUpdates.location  = newLocation;
            this.props.location(NewUpdates);
        }
        this.refs.location.value = "";
    }
});

module.exports = WeatherForm;
