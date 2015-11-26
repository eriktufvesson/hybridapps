'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  StyleSheet
} = React;

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'flex-start'
        }}>
        <View style={styles.card}>
          <Text>About this app</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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

module.exports = About;
