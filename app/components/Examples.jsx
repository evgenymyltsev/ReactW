var React = require('react');
var {Link} = require('react-router')

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
      <h1 className="text-center">Examples</h1>
      <p>Here are a few exapmle location to try out: </p>
      <ol>
        <li>
          <Link to='/?location=Chelyabinsk'>
            Chelyabinsk, RU
          </Link>
        </li>
        <li>
          <Link to='/?location=Rio'>
            Rio
          </Link>
        </li>
      </ol>
    </div>
    );
};
module.exports = Examples;
