var React = require('react');

// var About = React.createClass ({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About Component</h1>
      <p>This is a weather application build on React</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
          - This was the JS framework used.
        </li>
        <li>
          <a href="http://openweathermapn.org">Open Weather Map</a>
          - I used Open Weather Map to search. 
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
