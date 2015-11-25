'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

var AppContainer = require('./AppContainer');

var CatsInTies = React.createClass({
  render: function() {
    return (
      <AppContainer />
    );
  }
});

AppRegistry.registerComponent('CatsInTies', () => CatsInTies);
