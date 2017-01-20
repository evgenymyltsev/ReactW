var React = require('react');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h3>Examples component</h3>
//       </div>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h3>Examples component!</h3>
      <p>Wellcome to exapmles page</p>
    </div>
    );
};
module.exports = Examples;
