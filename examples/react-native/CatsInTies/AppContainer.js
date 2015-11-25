'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Component,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  PixelRatio
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');

var Tabs = require('./Tabs');

var screen = require('Dimensions').get('window');


class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigator: null
    }
  }

  navBack() {
    Navigator.getContext(this);
  }

  render() {
    var state = this.state;
    return (
      <Navigator
        style={{
          flex: 1
        }}
        initialRoute={{name: 'Tabs', component: Tabs}}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator, p: route.passProps });
          }
        }}
        navigationBar={
          <View style={styles.navigationBar}>
            <TouchableHighlight
              style={styles.button}
              underlayColor="#B5B5B5"
              onPress={() => this.navBack()}>
              <View>
                <Text style={styles.buttonText}>Back</Text>
              </View>
            </TouchableHighlight>

            <Text style={{color: '#fff', fontSize: 18}}>Cats in Ties</Text>
          </View>
        }
        configureScene={(route => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        })}
      />
    );
  }

  onTabItemPress(name) {

  }
}

var styles = StyleSheet.create({
  navigationBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 50,
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    backgroundColor: '#387ef5',
    width: screen.width,
    alignItems: 'center'
  },
  button: {
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  }
});

module.exports = AppContainer;
