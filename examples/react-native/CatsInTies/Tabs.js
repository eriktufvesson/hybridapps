'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Component
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');

var CatList = require('./CatList');
var About = require('./About');
var deviceWidth = Dimensions.get('window').width;

class Tabs extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView>
          <ScrollView tabLabel="Cats" style={styles.tabView}>
            <CatList navigator={this.props.navigator} />
          </ScrollView>
          <ScrollView tabLabel="About" style={styles.tabView}>
            <About navigator={this.props.navigator} />
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabView: {
    width: deviceWidth,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

module.exports = Tabs;
