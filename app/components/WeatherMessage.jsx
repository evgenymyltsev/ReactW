var React = require('react');

// var WeatherMessage = React.createClass ({
//   render: function () {
//     var {temp, location} = this.props;
//     return (
//       <h3>This is {temp} in {location}</h3>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 classname="text-center">This is {temp} in {location}</h3>
  );
};

module.exports = WeatherMessage;
