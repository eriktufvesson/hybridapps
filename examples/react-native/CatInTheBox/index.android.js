/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

var AppContainer = require('./AppContainer');

var CatInTheBox = React.createClass({
  render: function() {
    return (
      <AppContainer />
    );
  }
});

AppRegistry.registerComponent('CatInTheBox', () => CatInTheBox);
