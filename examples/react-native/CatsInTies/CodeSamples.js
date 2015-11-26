

var React = require('react-native');
var { ScrollView, TouchableHighlight, Text, Component } = React;

class Sample1 extends Component {
  render() {
    return (
      <ScrollView>
        <TouchableHighlight onPress={() => console.log('pressed')}>
          <Text>Proper Touch Handling</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

module.exports = Sample1;


var React = require('react-native');
var { Image, StyleSheet, Text, View, Component } = React;

class Sample2 extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.text}>
          <Text style={styles.title}>
            React Native
          </Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  row: { flexDirection: 'row', margin: 40 },
  text: { flex: 1, justifyContent: 'center'},
  title: { fontSize: 11, fontWeight: 'bold' },
});

module.exports = Sample2;
