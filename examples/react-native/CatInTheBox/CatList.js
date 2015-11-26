'use strict';

var React = require('react-native');
var {
  Text,
  View,
  Component,
  ListView,
  Image,
  Dimensions,
  TouchableHighlight
} = React;

var deviceWidth = Dimensions.get('window').width;

var CatDetail = require('./CatDetail');

class CatList extends Component {
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
    var url = 'https://kittenapi.herokuapp.com/cats/boxes/30';

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('cat list', responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  viewCat(cat) {
    console.log('viewCat', cat);
    this.props.navigator.push({
      name: 'CatDetail',
      component: CatDetail,
      passProps: {
        theCat: cat
      }
    });
  }

  renderRow(rowData) {

    var size = Math.floor((deviceWidth - 40) / 3);

    return (
      <TouchableHighlight
        onPress={() => this.viewCat(rowData)}
        underlayColor='#ddd'>
      <View style={{
          width: size,
          height: size
        }}>
        <Image
          source={{uri: rowData.url}}
          style={{
            width: size - 10,
            height: size - 10,
            margin: 5
          }}
        />
      </View>
    </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'flex-start'
        }}>
        <ListView
          contentContainerStyle={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

module.exports = CatList;
