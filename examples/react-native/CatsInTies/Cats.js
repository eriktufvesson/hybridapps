'use strict';

var React = require('react-native');
var {
  Text,
  View,
  Component,
  ListView,
  Image,
  Dimensions
} = React;

var deviceWidth = Dimensions.get('window').width;

class Cats extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    this.fetchCats();
  }

  fetchCats() {
    var url = 'https://kittenapi.herokuapp.com/cats/ties/100';

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('cats', responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
      })
  }

  renderRow(rowData) {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10
        }}>
        <Image
          source={{uri: rowData.url}}
          style={{
            width: Math.floor((deviceWidth - 40) / 3),
            height: Math.floor((deviceWidth - 40) / 3)
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'flex-start'
        }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

module.exports = Cats;
