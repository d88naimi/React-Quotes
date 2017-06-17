// import React from "react";

// // very basic component to get started
// class Main extends React.Component {
//   render() {
//     return (
//       <div className="_navbrand">
//         <div className="valign">
//           <h1>David Naimi</h1>
//           <h1>David Naimi</h1>
//         </div>
//       </div>
//     );
//   }
// }
 
// export default Main;
   

// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">React-Quotes HW 20</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-left">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/search">Home</Link></li>
                  <li><Link to="/saved">Favorites</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <h2 className="text-center"><strong>(ReactJS) HW 20 Quotes Saver</strong></h2>
          </div>


          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

        	<div className="searchForm">
				<form id="searching" onSubmit={this.handleClick}>
					<div className="input-field col s12">
						<i className="material-icons prefix">search</i>
						<input id="topic" type="text" className="validate" onChange= {this.handleChange}/>
						<label htmlFor="topic">Search by Topic</label>
					</div>
					<div className="row center-align">
						<button type="submit" className="btn btn-primary waves-effect waves-light btn" style={{backgroundColor:'#0081af'}}>Search</button>
					</div>
				</form>
			</div>
      </div>
     
                   


          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-diamond" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;
   