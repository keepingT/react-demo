var React = require('react'),
	ReactDOM = require('react-dom'),
	Router = require('react-router'),
	login = require('./_component/login'),
	Routes = require('./common/routes');

/*ReactDOM.render(
	React.createElement(login,null),
	document.getElementById("container")
);*/


Router.run(Routes, Router.HistoryLocation,  function (Handler) {
  React.render(<Handler />, document.getElementById("container"));
});