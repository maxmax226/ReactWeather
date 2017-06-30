const React = require('react');
const Nav = require('Nav');

// const Main = React.createClass({
//     render: function(){
        // return(
        //     <div>
        //         <Nav/>
        //         <h2>Main Component!</h2>
        //         {this.props.children}
        //     </div>
        // );
//     }
// });

const Main = (props) => {
  return(
            <div>
                <Nav/>
                <div className="grid-container">
                  <div className="grid-x grid-padding-x">
                    <div className="medium-6 large-6 large-offset-3 medium-offset-3 cell">
                      {props.children}
                    </div> 
                  </div>
                </div>
            </div>

        );
}

module.exports = Main;