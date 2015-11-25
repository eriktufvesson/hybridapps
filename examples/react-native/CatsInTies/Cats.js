'use strict';

var React = require('react-native');
var {
  Text,
  View,
  Component,
  Navigator
} = React;

var CatList = require('./CatList');
var About = require('./About');

class Cats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Navigator below</Text>
        <Navigator
          style={{
            flex: 1,
            backgroundColor: 'red'
          }}
          initialRoute={{name: 'CatList', component: CatList}}
          renderScene={(route, nav) =>
            // if (route.component) {
            //   return React.createElement(route.component, { navigator });
            // }
            <CatList
              name={route.name}
              navigator={nav} />
          }
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromBottom;
          }}
        />
      </View>
    );
  }
}

module.exports = Cats;
