const React = require('react');
const {Link} = require('react-router');
// const Examples = React.createClass({
//     render(){
//         return(
//             <h3>Examples Component</h3>
//         );
//     }
// });

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try</p>
      <ol>
        <li>
          <Link to="/?location=Singapore">Singapore, SG</Link>
        </li>
        <li>
          <Link to="/?location=KualaLumpur">Kualar Lumpur, MY</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;