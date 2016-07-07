var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router'),
  Link  = Router.Link;


var Login = React.createClass({
	login: function(){

	},
    render() {
        return (
            <div>
            	<div>账号：<input type="text"/></div>
            	<div>密码：<input type="password"/></div>
            	<div><button onClick={this.login}>登录</button></div>
            	<div><Link to='register'>注册</Link></div>
            </div>
        );
    }
});

module.exports = Login;
