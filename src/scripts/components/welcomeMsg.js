var React = require('react');

require('./welcomeMsg.scss');

var welcomeMsg = React.createClass({
  render: function() {
    var features = [];
    this.props.features.forEach(function(feature){
      features.push(<li><a href={feature.url}>{feature.name}</a></li>);
    })
    return (
      <div className="main">
        <div className="welcomeMsg">
          Congratulations, you now have a working react.js application.
        </div>
        Features include:
        <ul className="featureList">
          {features}
        </ul>
      </div>
    );
  }
});

module.exports = welcomeMsg;
