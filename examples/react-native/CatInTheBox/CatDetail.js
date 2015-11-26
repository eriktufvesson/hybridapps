'use strict';

var React = require('react-native');

var {
  Component,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  PixelRatio,
  Image,
  Dimensions
} = React;


var deviceWidth = Dimensions.get('window').width;

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <View>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class CatDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cat: props.p.theCat
    }
  }

  render() {

    var size = deviceWidth - 20;

    return (
      <View style={{
          flex: 1,
          marginTop: 50,
          justifyContent: 'flex-start'
        }}>
        <NavButton
          onPress={() => {
            this.props.navigator.pop();
          }}
          text="Back to the cats"
        />
        <Image
          source={{uri: this.state.cat.url}}
          style={{
            width: size,
            height: size,
            margin: 10
          }}
        />
      </View>
    );
  }

}

var styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  icon: {
    width: 30,
    height: 30
  }
});

module.exports = CatDetail;
